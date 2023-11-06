import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Role = sequelize.define('role', {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
}, {
    tableName: 'role',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
});

export default Role;