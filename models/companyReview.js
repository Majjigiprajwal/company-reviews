const Sequelize = require ('sequelize');

const sequelize = require('../util/database');

const companyReview = sequelize.define('companyReview',{
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull:false,
    primaryKey:true
  },
  companyName:{
    type:Sequelize.STRING,
    allowNull: false
  },
  pros:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  cons:{
      type:Sequelize.STRING,
      allowNull:false
},
ratings : {
  type:Sequelize.INTEGER,
  allowNull:false,
}
})

module.exports = companyReview;