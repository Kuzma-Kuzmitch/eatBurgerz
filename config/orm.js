var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;"
    connection.query(queryString, function(err, results){
      if (err) {throw err}
      cb(results)
    })
  },
  insertOne: function(name, devoured, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);"
    connection.query(queryString, [name, devoured], function(err, results) {
      if (err) {throw err}
      cb(results)
    })
  },
  updateOne: function(name, id, cb) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;"
    connection.query(queryString, [devoured, id], function(err, results) {
      if (err) {throw err}
      cb(results)
    })
  }
};

module.exports = orm;
