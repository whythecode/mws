const express =  require('express');
const createError =  require('http-errors');
const logger =  require('morgan');

const checkoutRouter = require('./routes/checkout');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', checkoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
