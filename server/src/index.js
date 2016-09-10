var express = require('express');
var app = express();

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
