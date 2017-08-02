import repl from 'repl';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

global.models = require('./server/Models');

const replServer = repl.start({});
replServer.on('exit', () => {
  process.exit();
});
