'use strict';
const { Model, DataTypes } = require('sequelize')
import connection from '../connection';

const initRoom = (sequelize, DataTypes) => {
  class Room extends Model {

    static associate(models) {
      // define association here
      Room.belongsTo(models.User, { foreignKey: "owner_id" })
      Room.hasMany(models.Reservation ,{ foreignKey: "room_id" })
      Room.hasMany(models.Review,{ foreignKey: "reservation_id" } )
    }
  }
  Room.init({
    room_type: DataTypes.STRING,
    number_ofPersons: DataTypes.INTEGER,
    total_bedrooms: DataTypes.INTEGER,
    total_bathrooms: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    country: DataTypes.STRING,
    lon: DataTypes.INTEGER,
    lat: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};


export default initRoom(connection, DataTypes)