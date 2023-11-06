import { Category } from '../models/indexModels.js';

const getCategories = async () => {  
    const categories = await Category.findAll();
    return categories;
};

const getCategory = async (id) => {  
    const category = await Category.findByPk(id);
    return category;
};

const createCategory = async (params) => {
    const createdCategory = await Category.create(params);
    return createdCategory;
};

const updateCategory = async (params, id) => {
    const category = await Category.findByPk(id);
    if (!category) {
        return false;
    }
    const updatedCategory = await Category.update(params);
    return true;
};

const deleteCategory = async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
        return false;
    }
    category.destroy();
    return true;
};

export default {
    getCategories,    
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};