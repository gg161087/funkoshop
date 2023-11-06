import { Router } from 'express';

import roleController from './../controllers/roleController.js';
import authMiddleware from './../middleware/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware.authenticateToken, roleController.getRoles);
router.get('/:role_id', authMiddleware.authenticateToken, roleController.getRole);
router.post('/', authMiddleware.authenticateToken, roleController.createRole);
router.put('/:role_id', authMiddleware.authenticateToken, roleController.updateRole);
router.delete('/:role_id', authMiddleware.authenticateToken, roleController.deleteRole);

export default router;