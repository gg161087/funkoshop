import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const productModel = sequelize.define('products', {
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
        special: {
            type: DataTypes.TINYINT(1),
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
    return productModel;
}