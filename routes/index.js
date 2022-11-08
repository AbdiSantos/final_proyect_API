const express = require('express');

const moviesRouter = require('./moviesRouter');
const authRouter = require(`./authRoutes`)
const invoiceRouter = require('./invoiceRoutes');


function routerApi(app) {
  const router = express.Router();
  app.use(`/cinema`, router);
  router.use('/movies', moviesRouter);
  router.use('/auth', authRouter);
  router.use('/invoice',invoiceRouter );
}

module.exports = routerApi;
