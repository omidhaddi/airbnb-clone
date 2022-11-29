'use strict';
import connection from '../connection';
const { Model, DataTypes} = require('sequelize')
const initReview = (sequelize, DataTypes) => {
  class Review extends Model {    
    static associate(models) {
      Review.belongsToMany(models.Reservation)
      // define association here
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