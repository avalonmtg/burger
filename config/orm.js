 
var connection = require("./connection.js");


var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM ?";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  create: function(tableName, cols, vals, cb) {
    var queryString = `INSERT INTO ${tableName} (${cols.toString()}) VALUES(${vals})`;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
      console.log(result);
    });
  },
  update: function(tableName, objColVals, condition, cd) {
    var queryString = "UPDATE" + table + "SET" + objToSql(objColVals) + "WHERE" + condition;
        connection.query(queryString, function(err,result) {
        if (err) throw err;
        cb(result);
        console.log(result);
      }
    );
  }
};

module.exports = orm;