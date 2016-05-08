var connection = require('./connection.js');

var tableName = 'burgers';

var orm = {

    addBurger: function(newBurger,callback){
        var queryString = "INSERT INTO " + tableName + "(burgerName)" + "VALUES (?);";
        connection.query(queryString,[newBurger.burgerName,newBurger.devoured,newBurger.date], function(err,result){
            if (err) throw err;
            callback(result);
        });
    },

    seeBurger: function(callback){
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString,function(err,result){
            if (err) throw err;
            callback(result);
        });
    },

    eatBurger: function(eatenBurger,callback){
        var queryString = "UPDATE " + tableName + "SET devoured = 1 " + "WHERE burgerName=?;";
        connection.query(queryString,[eatenBurger],function(err,result){
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;