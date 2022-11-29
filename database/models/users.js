'use strict';
import connection from '../connection';
const { Model, DataTypes} = require('sequelize')

 const initUser = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.hasMany(models.Room),
      User.hasMany(models.Reservation),
      User.hasMany(models.Review)

      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser(connection, DataTypes)