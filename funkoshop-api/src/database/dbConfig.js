import { Sequelize } from 'sequelize';
import {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} from './../../config.js';

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: 3306
});