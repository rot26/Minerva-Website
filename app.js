var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var dir = __dirname + '/dist';

app.use(require('prerender-node').set('prerenderToken', 'bdHXmmLaAu5t2R018duW'));

app.use('/images', express.static(dir + '/images'));
app.use('/bower_components', express.static(dir + '/bower_components'));
app.use('/people', express.static(dir + '/people'));
app.use('/scripts', express.static(dir + '/scripts'));
app.use('/styles', express.static(dir + '/styles'));
app.use('/views', express.static(dir + '/views'));

app.get('/*', function(request, response) {
    response.sendFile(dir + '/index.html');
});

app.listen(port, function () {
  console.log('app listening on port 3000!');
});
