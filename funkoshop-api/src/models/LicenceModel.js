import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js'; 

const Licence = sequelize.define('licence', {
    licence_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    licence_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    licence_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    licence_image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'licence',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
});

export default Licence;