// DEPENDENCIES
var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// CONNECTION
var connection = require('./burger/config/connection.js');

// MIDDLEWARE
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('method'));

// HANDLEBARS

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    extname: '.handlebars',
    layoutsDir: 'burger/views/layouts'}));
app.set('view engine','handlebars');
app.set('views', __dirname + '/burger/views');









// ROUTES
app.get('/',function(req,res){
    res.render('index');
});
var routes = require('./burger/controllers/burger_controllers.js');
app.use('/',routes);
app.use('/add',routes);
app.use('/eat',routes);

// CONFIRMATION
var PORT = process.env.NODE_ENV || 3000;
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});