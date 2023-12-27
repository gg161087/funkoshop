import { db } from './dbConfig.js';

export const dbConnection = async () => {
    try {
        await db.authenticate()
        console.log('conectado a la db');
    } catch (error) {
        console.log(`error: ${error}`);
    }
}