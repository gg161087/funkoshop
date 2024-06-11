import { UserRoles } from './../database/initSequelize.js';

export const getAllUserRoles = async (req, res) => {
    try {
        const userRoles = await  UserRoles.findAll();
        res.status(200).json(userRoles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getUserRolesByUserId = async (req, res) => {
    const { user_id } = req.params;
    try {
        const userRoles = await UserRoles.findByPk(user_id);     
        res.status(200).json(userRoles);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createUserRoles = async (req, res) => {    
    const { user_id, role_id } = req.body;
    if (!user_id || !role_id) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const newUserRoles = await UserRoles.create({user_id, role_id});
        res.status(201).json(newUserRoles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateUserRolesByUserId = async (req, res) => {
    const { user_id } = req.params;
    const { role_id } = req.body;
    if (!role_id) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const userRoles = await UserRoles.findByPk(user_id);         
        if (!userRoles) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await userRoles.update({role_id});
            res.json({ message: 'Branch Office updated correctly.', result: result });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteUserRolesByUserId = async (req, res) => {
    const { user_id } = req.params;
    try {
        const userRoles = await UserRoles.findByPk(user_id);
        if (!userRoles) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await userRoles.destroy();
            res.status(202).json({ message: 'User Role deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};