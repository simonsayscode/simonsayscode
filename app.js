/**
 * Module dependencies.
 */
var express = require('express'),
   exphbs = require('express3-handlebars'),
   routes = require('./routes'),
   http = require('http'),
   path = require('path'),
   app = express(),
   hbs;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

// setting up the express3-handlebars link
hbs = exphbs.create({
    defaultLayout: 'main',
    partialsDir: 'views/partials/',
    layoutsDir: 'views/layouts/'
});

// setting up templating engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// error handling 404
app.use(function (req, res) {
    res.render('errors/404', {});
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// https://www.parse.com/docs/js/symbols/express.html