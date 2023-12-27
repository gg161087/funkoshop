import { categoryModel } from './../models/categoryModel.js';

export const getAllCategories = async (req, res) => {
    try {
        const cateogries = await categoryModel.findAll();
        res.status(200).json(cateogries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryModel.findByPk(id);
        res.status(200).json(category);        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createCategory = async (req, res) => {    
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({ message: 'Missing fields.'});
    };
    try {
        const newCategory = await categoryModel.create({ name });
        if (!newCategory) {
            res.status(404).json({ message: 'Bad request.'});
        } else {
            res.status(201).json(newCategory);
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateCategoryById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const category = await categoryModel.findByPk(id);
        if (!category) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await category.update({ name });
            res.json({ message: 'Category updated correctly.', result:result });
        };      
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryModel.findByPk(id);
        if (!category) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await response.destroy();
            res.status(202).json({ message: 'Category deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};