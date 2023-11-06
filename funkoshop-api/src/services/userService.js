import { User } from './../models/indexModels.js';

const getUsers = async () => {  
    const users = await User.findAll();
    return users;
};

const getUser = async (id) => {  
    const user = await User.findByPk(id);
    return user;
};

const createUser = async (params) => {
    const createdUser = await User.create(params);
    return createdUser;
};

const updateUser = async (params, id) => {
    const user = await User.findByPk(id);
    if (!user) {
        return false;
    }
    const updatedRole = await User.update(params);
    return true;
};

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        return false;
    }
    role.destroy();
    return true;
};

export default {
    getUsers,    
    getUser,
    createUser,
    updateUser,
    deleteUser
};