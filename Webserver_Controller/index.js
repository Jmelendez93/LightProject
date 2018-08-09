var http = require("http");
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var fs = require('fs');
var PythonShell = require('python-shell');

 
// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
  
});
var options = {
  args: ["-e", "a2zx7yb4b8zjqn.iot.us-west-2.amazonaws.com", "-r", "root-ca-cert.pem", "-c", "422106a8b4.cert.pem", "-k",
  "422106a8b4.private.key", "-n", "TrafficLight", "-id", "Switch_Webhost"]
};
app.post('/thank', urlencodedParser, function (req, res){
  var logger = fs.createWriteStream('data.txt')
  logger.write(req.body.name + "\n");
  logger.write(req.body.email + "\n");
  logger.write(req.body.lightstatus + "\n");
  logger.end();
  var reply='';
  reply += "Thank you for your submission, " + req.body.name + ".</p>";
  reply += "Confirmation E-mail will be sent to " + req.body.email + "</p>"; 
  reply += "Light will be set to " + req.body.lightstatus + "</p>";
  res.send(reply);
  PythonShell.run(/*'dataTest.py',*/'lightController.py', options, function (err, results) {
    //if (err) throw err; <---Error with light change doesn't affect performance
    // results is an array consisting of messages collected during execution
    console.log('New form content being sent to shadow service: \nName - %j\nEmail - %j\nLight - %j',/*'results: %j',*/req.body.name,req.body.email,req.body.lightstatus );
  });
  
 });