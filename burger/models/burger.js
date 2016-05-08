var orm = require('../config/orm.js');

var burgers = {

    addBurger: function(newBurger,callback){
        orm.addBurger(newBurger);
    },

    seeBurger: function(callback){
        orm.seeBurger(function(result){
            callback(result)
        })
    },

    eatBurger: function(eatenBurger,callback){
        orm.eatBurger(eatenBurger);
    }
};

module.exports = burgers;