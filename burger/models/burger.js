var orm = require('../config/orm.js');

var burgers = {

    seeBurger: function(cb){
        orm.seeBurger('burgers',function(res){
            cb(res);
        })
    },

    addBurger: function(newBurger,cb){
        orm.addBurger('burgers',newBurger,cb);
    },

    eatBurger: function(eatenBurger,cb){
        orm.eatBurger('burgers',eatenBurger,cb);
    }
};

module.exports = burgers;