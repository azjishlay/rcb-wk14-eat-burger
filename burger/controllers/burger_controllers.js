var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
    burger.seeBurger(function(burger_data){
        res.render('index', {burger_data: burger_data});
    });
});

router.post('/add', function(req,res){
    burger.addBurger(req.body.burger_name, function(result){
        res.redirect('/');
    });
});

router.put('/eat', function(req,res){
    burger.eatBurger(req.body.burger_id, function(result){
        res.redirect('/');
    });
});

module.exports = router;