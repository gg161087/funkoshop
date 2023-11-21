import { Router } from 'express';

import categoryController from './../controllers/categoryController.js';
import authMiddleware from './../middleware/authMiddleware.js';

const router = Router();

router.get('/', categoryController.getCategories);
router.get('/:category_id', categoryController.getCategory);
router.post('/', authMiddleware.authenticateToken, authMiddleware.authorizeRole(1), categoryController.createCategory);
router.put('/:category_id', authMiddleware.authenticateToken, authMiddleware.authorizeRole(1), categoryController.createCategory);
router.delete('/:category_id', authMiddleware.authenticateToken, authMiddleware.authorizeRole(1), categoryController.deleteCategory);

export default router;