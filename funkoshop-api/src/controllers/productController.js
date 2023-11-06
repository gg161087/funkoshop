import productService from './../services/productService.js';

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();        
        products.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: products});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting products.', error: error.message });
    }
};

const getProductsByLicence = async (req, res) => {
    try {
        const { licence_id } = req.params
        const products = await productService.getProductsByLicence(licence_id);
        products.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: products});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting product by license.', error: error.message});
    }
};

const getProduct = async (req, res) => {
    try {
        const { product_id } = req.params
        const product = await productService.getProduct(product_id);
        product.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: product});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error getting product.', error: error.message});
    }
};

const createProduct = async (req, res) => {
    const productData = req.body;
    if(
        !productData.product_name ||
        !productData.product_description ||
        !productData.price ||
        !productData.stock ||
        !productData.discount ||
        !productData.sku ||
        !productData.dues ||
        !productData.image_front ||
        !productData.image_back ||
        !productData.license_id ||
        !productData.category_id
    ){
        return res.status(404).json({ success: false, message: 'Missing fields.'}) 
    }     
    try {        
        const createdProduct = await productService.createProduct(productData);
        res.status(201).json({ success: true, message: 'Added product.', data:createdProduct});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating product.', error: error.message});
    }    
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const productData = req.body;
    if(
        !productData.product_name ||
        !productData.product_description ||
        !productData.price ||
        !productData.stock ||
        !productData.discount ||
        !productData.sku ||
        !productData.dues ||
        !productData.image_front ||
        !productData.image_back ||
        !productData.license_id ||
        !productData.category_id
    ){
        return res.status(404).json({ success: false, message: 'Missing fields.'});
    }
    try {         
        const updatedProduct = await productService.updateProduct(productData, id);
        res.status(200).json({success:true, message: 'Product updated successfully.'});
    } catch (error) {
        res.status(500).json({success:false, message: 'Error updating product.', error: error.message});
    }  
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const result = await productService.deleteProduct(productId);
        result ? res.status(200).json({ success:true, message: 'Product deleted successfully'}) : res.status(404).json({ success:false, message: 'Product not found.'});
    } catch (error) {
        res.status(500).json({ success:false, message: 'Error deleting product.'});
    }
};

export default {
    getProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};