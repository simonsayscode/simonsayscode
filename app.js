/**
 * Module dependencies.
 */
var express = require('express'),
   hbs = require('hbs'),
   routes = require('./routes'),
   http = require('http'),
   path = require('path'),
   app = express();

// all environments
app.set('port', process.env.PORT || 3000);

// setting up templating engine
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// error handling 404
app.use(function (request, response) {
    response.render('errors/404', {});
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});