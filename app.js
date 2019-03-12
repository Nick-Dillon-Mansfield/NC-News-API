const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes/apiRouter.js');

app.use(bodyParser.json());
app.use('/api', apiRouter);

module.exports = app;
