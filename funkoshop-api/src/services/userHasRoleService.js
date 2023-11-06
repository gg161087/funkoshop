import { UserHasRole } from './../models/indexModels.js';

const getRolesByUser = async (user_id) => {
    const userRoles = await UserHasRole.findAll({
        where: {
            user_user_id:user_id
        }
    })
    return userRoles;
};

const getUsersByRole = async (role_id) => {
    const userRoles = await UserHasRole.findAll({
        where: {
            role_role_id:role_id
        }
    })
    return userRoles;
};

const createUserHasRole = async (user_id, role_id) => {
    const userRoles = await UserHasRole.create({user_user_id:user_id, role_role_id:role_id});
    return userRoles;
};

export default {
    getRolesByUser,
    getUsersByRole,
    createUserHasRole
};