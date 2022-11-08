const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const db = require(`./database`)
const createRoles = require(`./initialSetUp`)

db;
createRoles();

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send({author: "Abdi Santos",
description : "API Cinema",
Version: `1.0.0`});
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
