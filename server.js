const jsonServer = require('json-server').create().router('db.json');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/angular-power'));
app.use(jsonServer);
app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/angular-power/index.html'));
});

app.listen(process.env.PORT || 3000);
