import app from './app.js';
import sequelize from './database/database.js';
import './../src/models/associations.js';

const main = () => {
    sequelize.sync({ force: false })
    .then(() => {
        app.listen(app.get('port'), () => {
            console.log(`Server running http://localhost:${app.get('port')}`);
        });
    })
    .catch(error => {
        console.error('Error al sincronizar la base de datos:', error);
    });  
};

main();