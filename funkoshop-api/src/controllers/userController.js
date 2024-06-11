import { User, UserRoles, Role } from './../database/initSequelize.js';
import { hashPassword }from './../utils/handlePassword.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                Role
            ]
        });
        res.status(200).json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
            include: [
                Role
            ]
        });     
        res.status(200).json(user);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createNewUser = async (req, res, next) => {
    const { name, last_name, telephone, email, password } = req.body;
    if (!name || !last_name || !telephone || !email || !password) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    const hashedPass = await hashPassword(password);    
    const userSchema = {
        name: name,
        last_name: last_name,
        telephone: telephone,
        email: email,
        password: hashedPass
    };
    try {
        const newUser = await User.create(userSchema);
        const newUserRole = await UserRoles.create({user_id: newUser.id, role_id: 2})
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, last_name, telephone, email, password } = req.body;
    if (!name || !last_name || !telephone || !email || !password) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    const hashedPass = hashPassword(password);
    const userSchema = {
        name: name,
        last_name: last_name,
        telephone: telephone,
        email: email,
        password: hashedPass
    };
    try {
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await user.update({userSchema});
            res.json({ message: 'User updated correctly.', result: result });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await user.destroy();
            res.status(202).json({ message: 'User deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};