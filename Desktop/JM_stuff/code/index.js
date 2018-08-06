var http = require("http");
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
 
 
app.get('/form', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "Your name is " + req.body.name + "</p>";
  reply += "Your E-mail id is " + req.body.email + "</p>"; 
  reply += "The button is " + req.body.lightstatus + "</p>";

  res.send(reply);
 });