import Sequelize from 'sequelize';
import config from './config/config.mjs';
import reservations from './models/reservations.js';
import users from './models/users.js';
import rooms from './models/rooms.js';

const db = {};
db.reservations  = reservations

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
