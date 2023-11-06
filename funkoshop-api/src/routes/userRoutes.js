import { Router } from 'express';

import userController from './../controllers/userController.js';
import authMiddleware from './../middleware/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware.authenticateToken, userController.getUsers);
router.get('/:user_id', authMiddleware.authenticateToken, userController.getUser);
router.post('/', authMiddleware.authenticateToken, userController.createUser);
router.put('/:user_id', authMiddleware.authenticateToken, userController.updateUser);
router.delete('/:user_id', authMiddleware.authenticateToken, userController.deleteUser);

export default router;