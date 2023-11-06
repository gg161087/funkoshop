import { Product } from '../models/indexModels.js';

const getProducts = async () => {
    const products = await Product.findAll();
    return products;
};

const getProductsByLicence = async (licence_id) => {    
    const products = await Product.findAll({
        where: {
            licence_id:licence_id,
        },
    });
    return products;
}

const getProduct = async (id) => {
    const product = await Product.findByPk(id);
    return product;
};

const createProduct = async (params) => {
    const createdProduct = await Product.create(params);
    return createdProduct;
};

const updateProduct = async (params, id) => {
    const product = await Product.findByPk(id);
    if (!product) {
        return false;
    }
    const updatedProduct = await Product.update(params);
    return true;
};

const deleteProduct = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) {
        return false;
    }
    await product.destroy();
    return true;
};

export default {
    getProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};