const jsonServer = require('json-server');
const server = jsonServer.create();
const express = require('express');
const path = require('path');
const router = jsonServer.router('db.json');
const app = express();

app.use(express.static(__dirname + '/dist/angular-power'));
server.use(router);
app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/angular-power/index.html'));
});

app.listen(process.env.PORT || 3000);
