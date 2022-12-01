'use strict';
import connection from '../connection';
const { Model, DataTypes} = require('sequelize')
const initReview = (sequelize, DataTypes) => {
  class Review extends Model {    
    static associate(models) {
      
      // define association here
      Review.belongsTo(models.Reservation, { foreignKey: "room_id" })
    }
  }
  Review.init({
    reservation_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
export default initReview(connection, DataTypes)