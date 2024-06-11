import { Role } from './../database/initSequelize.js';

export const getAllRoles = async (req, res) => {
    try {
        const roles = await  Role.findAll();
        res.status(200).json(roles)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findByPk(id);        
        res.status(200).json(role);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createRole = async (req, res) => {    
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const newRole = await Role.create({name});
        res.status(201).json(newRole);        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateRoleById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await role.update({name});
            res.json({message: 'Role updated correctly.', result:result})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteRoleById = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await role.destroy();
            res.status(202).json({ message: 'Role deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};