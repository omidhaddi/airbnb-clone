import Sequelize from 'sequelize';
import config from './config/config.mjs';
import Room from './models/room.js';
import User from "./models/user"
import Reservation from "./models/reservation"
import Review from "./models/review"

const db = {};
db.User = User;
db.Room = Room
db.Reservation = Reservation
db.Review = Review


let sequelize;
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production);
} else {
  sequelize = new Sequelize(config.development);
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
