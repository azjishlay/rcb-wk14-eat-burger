var express = require('express');
var router = express.Router();
var db = require('../models/burger.js');

router.route('/')
    .get(function(req,res){
        db.seeBurger(function(burger_data){
            // console.log('see');
            res.render('index', {burger_data: burger_data});
        });
});

router.route('/add')
    .get(function(req,res){
        db.seeBurger(function(burger_data){
            // console.log('get add');
            res.render('index', {burger_data: burger_data});
        });
    })
    .post(function(req,res){
        db.addBurger(req.body.new_burger_name, function(result){
            // console.log('add');
            res.redirect('/');
        });
});

router.route('/eat')
    .put(function(req,res) {
        db.eatBurger(req.body.burger_id, function(result) {
            // console.log('eat');
            res.redirect('/');
        })
    })
    .get(function(req,res){
        db.seeBurger(function(burger_data){
            // console.log('get eat');
            res.render('index', {burger_data: burger_data});
        });
});

module.exports = router;