var util = require('util'),
  express = require('express'),
  liveReload = require('./node_modules/grunt-contrib-livereload/lib/utils'),
  request = require('request')

var localise = !!~process.argv.indexOf('--localise')
var dbURI = 'http://' + (localise ? '127.0.0.1' : 'alpb-url-public') + ':5984/local-equiv'

var app = express();
app.use(express.bodyParser())
// add liveReload middleware to inject reload javascript
app.use(liveReload.livereloadSnippet);

//map static requests to built /build
app.use(express.static(__dirname + '/build'));

app.get('/api/:id', function(req,res) {
  request(util.format('%s/%s', dbURI, req.params.id), function(e,r,b) {
    return res.send(JSON.parse(b))
  })
});

app.get('/api/*', function(req,res) {
  console.log(req.url, (__dirname + '/app/api/' + req.url.split("/").slice(-1)[0].split("?")[0] + '.json'));

  res.sendfile(__dirname + '/app/api/' + req.url.split("/").slice(-1)[0].split("?")[0] + '.json');
});

app.listen(3500);
console.log('Listening on port 3500');
