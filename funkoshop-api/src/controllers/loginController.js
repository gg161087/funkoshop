import jwt from 'jsonwebtoken';

import { checkPassword } from './../utils/handlePassword.js';
import { User, Role } from './../database/initSequelize.js';

export const login = async (req, res, next) => {
    const { email, password } = req.body;  
    try {        
        const user = await User.findOne({
            where: { email },
            include: [
                Role
            ]
        });
        if (!user) {
            return res.status(404).json({ message: 'Not found.' });
        }       
        const isPasswordValid = await checkPassword(password, user.password);
        if (!isPasswordValid) {            
            return res.status(404).json({ message: 'Invalid credentials.' });
        }        
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });  
            
        return res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
            telephone: user.telephone,
            roles: user.roles,
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};