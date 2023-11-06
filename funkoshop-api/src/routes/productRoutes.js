import { Router } from 'express';

import productController from './../controllers/productController.js';
import authMiddleware from './../middleware/authMiddleware.js';

const router = Router();

router.get('/', authMiddleware.authenticateToken, productController.getProducts);
router.get('/licence/:licence_id', authMiddleware.authenticateToken, productController.getProductsByLicence);
router.get('/:product_id', authMiddleware.authenticateToken, productController.getProduct);
router.post('/', authMiddleware.authenticateToken, authMiddleware.authorizeRole(1), productController.createProduct);
router.put('/:product_id', authMiddleware.authenticateToken, authMiddleware.authorizeRole(1), productController.updateProduct);
router.delete('/:product_id', authMiddleware.authenticateToken, authMiddleware.authorizeRole(1), productController.deleteProduct);

export default router;