const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers/routers');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));

app.use(express.static(`${__dirname}/../react-client/dist`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', router);

app.listen(8080, function() {
  console.log('listening on port 8080!');
});