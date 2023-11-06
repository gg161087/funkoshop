import userHasRoleService from './../services/userHasRoleService.js';

const getRolesByUser = async (user_id) => {
    try {
        const userRoles = await userHasRoleService.getRolesByUser(user_id);
        userRoles.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: products});    
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getUsersByRole = async (role_id) => {
    try {
        const userRoles = await userHasRoleService.getUsersByRole(role_id);
        userRoles.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: products});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createUserHasRole = async (user_id, role_id) => {
    try {
        const userHasRole = await userHasRoleService.createUserHasRole(user_id, role_id);
        res.status(201).json({ success: true, message: userHasRole});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating relationship.' });
    }
};

export default {
    getRolesByUser,
    getUsersByRole,
    createUserHasRole
};