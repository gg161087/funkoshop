import { db } from './dbConfig.js';

export const dbConnection = async () => {
    try {
        await db.authenticate()
        console.log('connected to the DB');
    } catch (error) {
        console.log(`error: ${error}`);
    }
}