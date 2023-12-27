import { Router } from 'express';

import { getProductById, getAllProducts, createProduct, updateProductById, deleteProductById } from './../controllers/productController.js';

export const productRouter = Router();

productRouter.get('/:id', getProductById);
productRouter.get('/', getAllProducts);
productRouter.post('/', createProduct);
productRouter.put('/:id', updateProductById);
productRouter.delete('/:id', deleteProductById);