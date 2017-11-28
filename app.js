console.log("Hola mundo");

const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const api        = require('./server/routes/api');
var passport = require('passport');


app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/home', function(req, res){
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/clients', function(req, res){
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/inventory', function(req, res){
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/sales', function(req, res){
  res.sendFile(path.resolve('dist/index.html'));
});

app.set('port', process.env.PORT || 3000);
 
var server = app.listen(app.get('port'), function() {
  console.log('[app] Express server listening on port ' + server.address().port);
});

console.log("[app] Routes APIs ");
app.use(api);


var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
