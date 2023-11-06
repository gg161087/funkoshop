import { User, Role, UserHasRole} from './indexModels.js';

User.belongsToMany(Role, { through: UserHasRole, foreignKey: 'user_user_id', as: 'roles' });
Role.belongsToMany(User, { through: UserHasRole, foreignKey: 'role_role_id', as: 'users' });