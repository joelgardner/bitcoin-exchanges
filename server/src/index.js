var express = require('express');
var app = express();

/**
IMPORTANT:
You must create a file called api.config.json (see api.sample.config.json) with contents:
{
  "key": "YOUR_API_KEY_HERE",
  "secret": "YOUR_API_SECRET_HERE"
}
**/

// proxy to Coinigy's API
var proxy = require('express-http-proxy');
var config = require('./api.config.json');
app.use('/proxy', proxy('https://www.coinigy.com', {
  decorateRequest: function(proxyReq, originalReq) {
    proxyReq.headers['X-API-KEY'] = config.key;
    proxyReq.headers['X-API-SECRET'] = config.secret;
    return proxyReq;
  }
}));

// otherwise, just serve static files
app.use('/', express.static(__dirname + '/../../client/src/assets'));

// start the server
app.listen(3000, function () {
  console.log('Listening on http://localhost:3000/');
});
