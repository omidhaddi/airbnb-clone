
import dotenv from 'dotenv';
dotenv.config();

const config = {
  "development": {
<<<<<<< HEAD
    "username": "avinash",
    "password": "password",
=======
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
>>>>>>> 927eaa87234fb2343897d5433d368358b8bed710
    "database": "airbnb-clone",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
  },
}
export default config
