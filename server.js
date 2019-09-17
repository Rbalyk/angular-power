const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const express = require('express');
const path = require('path');

server.use(middlewares);
server.use(router);

server.listen(port);

const app = express();

app.use(express.static(__dirname + '/dist/angular-power'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/angular-power/index.html'));
});

app.listen(process.env.PORT || 8080);
