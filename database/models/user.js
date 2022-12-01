'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize')

const initUser = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
     
      // define association here
      User.hasMany(models.Room, { foreignKey: "owner_id" })
      User.hasMany(models.Reservation , { foreignKey: "room_id"})
      User.hasMany(models.Review , { foreignKey: "reservation_id"})
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
      type: DataTypes.STRING,
      
      validate: {
        isEmail: true,
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