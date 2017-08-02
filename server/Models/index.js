import Sequelize from 'sequelize';
import User from './User';

const db = {};
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);
const modules = [User];

modules.forEach((module) => {
  const model = module(sequelize, Sequelize);
  db[model.name] = model;
});

// Apply associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
