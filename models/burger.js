var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.selectAll(function(results){
      cb(results)
    });
  },
  create: function(name, devoured, cb) {
    orm.insertOne(name, devoured, function(results) {
      cb(results)
    });
  },
  update: function(devoured, id, cb) {
    orm.updateOne(devoured, id, function(results){
      cb(results)
    });
  }
};

module.exports = burger;
