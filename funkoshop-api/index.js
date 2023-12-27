import app from './app.js';
import { dbConnection } from './src/database/dbConnection.js';

const main = () => {
	app.listen(app.get('port'), () => {
		dbConnection();
		console.log(`Server running http://localhost:${app.get('port')}`);
	});  
};

main();