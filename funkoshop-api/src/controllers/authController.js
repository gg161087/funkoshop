import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, UserHasRole } from './../models/indexModels.js';
import { JWT_SECRET } from './../config.js';

const register = async (req, res) => {
    try {
        const { name, lastname, email, password} = req.body;
    
        const existingUser = await User.findOne({ where: { email } });
    
        if (existingUser) {
          return res.status(409).json({ success: false, message: 'User already exists.' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);

        const userCreated = await User.create({ name, lastname, email, password: hashedPassword });
        await UserHasRole.create({user_user_id:userCreated.user_id, role_role_id:3});
        res.status(201).json({ success: true, message: 'Registered user successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server Error.' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Busca al usuario por correo electrónico
        console.log(req.body);
        const user = await User.findOne({ where: { email } });
  
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }    
        // Comprueba si la contraseña es válida
        const isPasswordValid = await bcrypt.compare(password, user.password);
    
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid credentials.' });
        }
        // Obtener Roles dependiendo user_id:
        const roles  = await UserHasRole.findAll({where: {user_user_id: user.user_id}});
        const role_role_id = roles[0].dataValues.role_role_id;   
        // Genera un token JWT  
        const token = jwt.sign({ user_id: user.user_id, role: role_role_id }, JWT_SECRET, {
            expiresIn: '1h', // Cambia la duración del token según tus necesidades
        });
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server Error.' });
    }
};

export default{
    register,
    login
}