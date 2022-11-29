'use strict';
const { Model, DataTypes} = require('sequelize')
import connection from '../connection';

const initRoom = (sequelize, DataTypes) => {
  class Room extends Model {
    
    static associate(models) {
      // define association here
      Room.belongsToMany(models.User),
      Room.hasMany(models.Reservation)

    }
  }
  Room.init({
    room_type: DataTypes.STRING,
    number_ofPersons: DataTypes.INTEGER,
    total_bedrooms: DataTypes.INTEGER,
    total_bathrooms: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    published_at: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};


export default initRoom(connection, DataTypes)