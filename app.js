let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'server.log' }
  },
  categories: {
    default: { appenders: ['console'], level: 'trace' }
  }
});

let logger = log4js.getLogger();

let index = require('./routes/index');

let app = express();

app.use(log4js.connectLogger(logger, { level: 'info' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

module.exports = app;
