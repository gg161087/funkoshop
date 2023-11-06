import jwt from 'jsonwebtoken';

import { JWT_SECRET } from './../config.js';

const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role === role) {
            // El usuario tiene el rol necesario para acceder a la ruta
            next();
        } else {
            // El usuario no tiene permiso para acceder a la ruta
            res.status(403).json({ message: 'Acceso no autorizado' });
        }
    };
}

const authenticateToken = (req, res, next) => {
    // Obtiene el token del encabezado de autorización
    const token = req.header('Bearer');

    if (!token) {
        return res.status(401).json({ message: 'Token de autenticación no proporcionado' });
    }

    try {
        // Verifica el token JWT
        const decoded = jwt.verify(token, JWT_SECRET);
        // Agrega los datos del usuario autenticado al objeto de solicitud
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ message: 'Token inválido' });
    }
}

export default {
    authenticateToken,
    authorizeRole
}