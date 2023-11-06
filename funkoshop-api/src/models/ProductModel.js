import { DataTypes, Sequelize } from 'sequelize';

import { Category, Licence} from './indexModels.js';
import sequelize from '../database/database.js';

const Product = sequelize.define('product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    product_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    product_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sku: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    dues: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    image_front: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    image_back: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    create_time: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: true,
    },
    licence_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    tableName: 'product',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
});

Product.belongsTo(Category, {
    foreignKey: 'category_id', 
});

Product.belongsTo(Licence, {
    foreignKey: 'licence_id', 
});

export default Product;