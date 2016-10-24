'use strict';
const express = require('express');
const path = require('path');
var port = process.env.PORT || '1337';

var	app = express();

/** Serve Static Resources **/
app.use('/', express.static(path.join(__dirname, '/cv')));


app.listen(port, function() {
  console.log('Node app running on port ' + port);
})