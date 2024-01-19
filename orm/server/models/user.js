const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../util/database") ;

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  Name: {
    type: Sequelize.STRING
  },
  mobile: {
    type: Sequelize.STRING
  },
}, {
  timestamps:true
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
module.exports = User;