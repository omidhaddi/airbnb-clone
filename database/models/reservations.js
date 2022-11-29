'use strict';

import connection from '../connection';
const { Model, DataTypes} = require('sequelize')

const initReservation = (sequelize, DataTypes) => {
  class Reservation extends Model {
    
    static associate(models) {
      Reservation.belongsToMany(models.User),
      Reservation.belongsToMany(models.Room)
      // define association here
    }
  }
  Reservation.init({
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    start_date: DataTypes.INTEGER,
    end_date: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};

export default initReservation(connection, DataTypes)