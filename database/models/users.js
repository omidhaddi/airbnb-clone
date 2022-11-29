'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize')

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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      isEmail: true,
      validate: {
        notEmpty: true,
      },
    },
    profile_picture: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser(connection, DataTypes)