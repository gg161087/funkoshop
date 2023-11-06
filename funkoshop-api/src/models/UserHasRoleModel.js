import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import { User, Role } from './indexModels.js';

const UserHasRole = sequelize.define('user_has_role', {
    user_user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    role_role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Role,
            key: 'role_id',
        },
    },
}, {
    tableName: 'user_has_role',
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
});

export default UserHasRole;