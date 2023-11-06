import { Role } from '../models/indexModels.js';

const getRoles = async () => {  
    const roles = await Role.findAll();
    return roles;
};

const getRole = async (id) => {  
    const role = await Role.findByPk(id);
    return role;
};

const createRole = async (params) => {
    const createdRole = await Role.create(params);
    return createdRole;
};

const updateRole = async (params, id) => {
    const role = await Role.findByPk(id);
    if (!role) {
        return false;
    }     
    const updatedRole = await Role.update(params, {
        where: { role_id: role_id },
        returning: true,
    });
    console.log(updatedRole);
    return true;
};

const deleteRole = async (id) => {
    const role = await Role.findByPk(id);
    if (!role) {
        return false;
    }
    role.destroy();
    return true;
};

export default {
    getRoles,    
    getRole,
    createRole,
    updateRole,
    deleteRole
};