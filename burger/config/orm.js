var connection = require('../config/connection.js');

var orm = {

    seeBurger: function(tableInput,cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    addBurger: function(tableInput,nameInput,cb){
        var queryString = "INSERT INTO " + tableInput + " (burgerName)" + " VALUES (?);";
        connection.query(queryString,[nameInput],function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    eatBurger: function(tableInput,idInput,cb){
        var queryString = "UPDATE " + tableInput + " SET devoured = 1 " + "WHERE id=?;";
        connection.query(queryString,[idInput],function(err,result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;