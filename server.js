var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/00', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/00 - hello javascript/index.html'));
});

app.get('/01', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/01 - hello jsx/index.html'));
});

app.get('/02', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/02 - hello props/index.html'));
});

app.get('/03', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/03 - hello composition/index.html'));
});

app.get('/04', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/04 - hello chat/index.html'));
});

app.get('/06', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/06 - hello state/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
