import app from './app.js';
import { initializeDatabase } from './src/database/initDatabase.js';

const main = () => {
	app.listen(app.get('port'), () => {
		initializeDatabase();
		console.log(`Server running http://localhost:${app.get('port')}`);
	});  
};

main();