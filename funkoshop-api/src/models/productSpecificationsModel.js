import { DataTypes } from 'sequelize';

export default (sequelize) => {    
    const productSpecificationsModel = sequelize.define('product_specifications', {
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
    return productSpecificationsModel;
}