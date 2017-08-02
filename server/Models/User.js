const passwordCrypto = require('../libs/password');

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate(user) {
          return passwordCrypto.hash(user.password).then((hashedPassword) => {
            // eslint-disable-next-line no-param-reassign
            user.password = hashedPassword;
          });
        },
      },
    },
  );

  User.prototype.verifyPassword = function (inputPassword) {
    return passwordCrypto.compare(inputPassword, this.password);
  };

  return User;
};
