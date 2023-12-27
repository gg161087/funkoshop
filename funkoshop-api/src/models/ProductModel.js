import { DataTypes } from 'sequelize';

import { db } from './../database/dbConfig.js';
import { licenceModel } from './licenceModel.js'
import { categoryModel } from './categoryModel.js';

export const productModel = db.define('products', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },    
    description: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    discount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
    },
    sku: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dues: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    image_front: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    image_back: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },   
    licence_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

export const productSpecificationsModel = db.define('product_specifications', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    value: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

productModel.hasMany(productSpecificationsModel, { foreignKey: 'product_id' });
productSpecificationsModel.belongsTo(productModel, { foreignKey: 'product_id' });

productModel.belongsTo(licenceModel, { foreignKey: 'licence_id' });
productModel.belongsTo(categoryModel, { foreignKey: 'category_id' });