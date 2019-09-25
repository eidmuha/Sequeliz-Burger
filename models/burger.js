// // Import the ORM to create functions that will interact with the database
// // var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(cb) {
//       orm.selectAll("burgers", function(res) {
//         cb(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     insertOne: function(cols, val, cb) {
//       orm.insertOne("burgers", cols, val, function(res) {
//         cb(res);
//       });
//     },
//     // update 
//     updateOne: function(objColVals, condition, cb) {       
//       orm.updateOne("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     }
//   };


// // Export the database functions for the controller (catsController.js).
// module.exports = burger;


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Burger;
};