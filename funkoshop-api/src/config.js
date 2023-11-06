import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3308;
const DB_NAME = process.env.DB_NAME || 'funkoshop';
const DB_USER = process.env.DB_USER || 'admin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'admin';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export {
    PORT,
    HOST,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    JWT_SECRET
};