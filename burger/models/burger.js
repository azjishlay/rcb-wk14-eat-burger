var orm = require('../config/orm.js');

var burgers = {

    seeBurger: function(cb){
        orm.seeBurger('burgers',function(res){
            cb(res);
        })
    },

    addBurger: function(nameInput,cb){
        orm.addBurger('burgers',nameInput,cb);
    },

    eatBurger: function(idInput,cb){
        orm.eatBurger('burgers',idInput,cb);
    }
};

module.exports = burgers;