var express = require('express');
var bodyParser = require("body-parser");
var app = express();

PORT = 5000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
      res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log(req);
});

app.listen(PORT, function () {
      console.log('Example app listening on port ' + PORT);
});
