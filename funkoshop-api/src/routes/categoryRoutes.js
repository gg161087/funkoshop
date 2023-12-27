import { Router } from 'express';

import { getCategoryById, getAllCategories, createCategory, updateCategoryById, deleteCategoryById } from './../controllers/categoryController.js';

export const categoryRouter = Router();

categoryRouter.get('/:id', getCategoryById);
categoryRouter.get('/', getAllCategories);
categoryRouter.post('/', createCategory);
categoryRouter.put('/:id', updateCategoryById);
categoryRouter.delete('/:id', deleteCategoryById);