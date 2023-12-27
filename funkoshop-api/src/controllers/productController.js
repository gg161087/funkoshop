import { licenceModel } from './../models/licenceModel.js'
import { categoryModel } from '../models/categoryModel.js';
import { productModel, productSpecificationsModel } from './../models/productModel.js';

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productModel.findAll({
            include: [
                { model: licenceModel },
                { model: categoryModel },
                { model: productSpecificationsModel }            
            ]
        });
        res.status(200).json(products);

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

export const getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await productModel.findByPk(id, {
            include: [
                { model: productSpecificationsModel },                
                { model: categoryModel },
            ]
        });
        res.status(200).json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

export const createProduct = async (req, res) => {
    const { brand, model, description, price,
        stock, discount, sku, dues, imgUrl, category_id } = req.body;
    if (!brand || !model || !description || !price || !stock ||
        !discount || !sku || !dues || !imgUrl || !category_id) {
        return res.status(404).json({ message: 'Missing fields.' });
    };
    const productSchema = {
        brand: brand,
        model: model,
        description: description,
        price: price,
        stock: stock,
        discount: discount,
        sku: sku,
        dues: dues,
        imgUrl: imgUrl,
        category_id: category_id
    };
    try {
        const newProduct = await productModel.create({ productSchema });
        return res.status(403).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { brand, model, description, price,
        stock, discount, sku, dues, imgUrl, category_id } = req.body;
        
    if (!brand || !model || !price || !sku || !category_id) {
        return res.status(404).json({ message: 'Missing fields.' });
    };

    const decimalPrice = parseFloat(price)
    const decimalDiscount = parseFloat(discount)

    const productSchema = {
        brand: brand,
        model: model,
        description: description,
        price: decimalPrice,
        stock: stock,        
        discount: decimalDiscount,
        sku: sku,
        dues: dues,
        imgUrl: imgUrl,
        category_id: category_id
    };    
    try {
        const product = await productModel.findByPk(id);        
        if (!product) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            product.price = decimalPrice 
            product.discount = decimalDiscount   
            await product.save();       
            const result = await product.update({productSchema});
            console.log(result);
            res.json({ message: 'Product updated correctly.', result: result });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findByPk(id);

        if (!product) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await product.destroy();
            res.status(202).json({ message: 'Product deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};