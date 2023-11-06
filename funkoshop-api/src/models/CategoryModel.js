import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Category = sequelize.define('category', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'category',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
});

export default Category;