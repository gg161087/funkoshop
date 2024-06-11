import mysql from 'mysql2/promise';

import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from './../../config.js';
import { initSequelize } from './initSequelize.js';

export const initializeDatabase = async () => {
    try {        
        const connection = await mysql.createConnection({
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASSWORD
        });
        console.log('Conexion establecida.');        
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        await connection.end();
        console.log(`Database ${DB_NAME} created/exists and connection established successfully.`);
        initSequelize();
    } catch (error) {
        console.error('Unable to initialize the database:', error);
    }
};