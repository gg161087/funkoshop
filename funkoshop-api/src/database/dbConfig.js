import { Sequelize } from 'sequelize';
import {DB_NAME, DB_USER, DB_PASSWORD} from './../../config.js';

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});