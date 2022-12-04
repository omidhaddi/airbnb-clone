'use strict';

import connection from '../connection';
const { Model, DataTypes } = require('sequelize')

const initReservation = (sequelize, DataTypes) => {
  class Reservation extends Model {

    static associate(models) {
      Reservation.belongsTo(models.User, { foreignKey: "user_id" })
      Reservation.belongsTo(models.Room, { foreignKey: "room_id" })
      // define association here
    }
  }
  Reservation.init({
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};

export default initReservation(connection, DataTypes)