// DEPENDENCIES
var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var routes = require('./burger/controllers/burger_controllers.js');

// CONNECTION
var connection = require('./burger/config/connection.js');

// MIDDLEWARE
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// HANDLEBARS
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: 'burger/views/layouts'}));
app.set('view engine','handlebars');
app.set('views', __dirname + '/burger/views');

// ROUTES
app.use('/',routes);
// app.use('/add',routes);
// app.use('eat',routes);
app.get('/',routes);
app.get('/add',routes);
app.post('/add',routes);
app.put('/eat',routes);
app.get('/eat',routes);

// CONFIRMATION
var PORT = process.env.NODE_ENV || 3000;
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});