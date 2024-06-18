import { ProductSpecifications } from './../database/initSequelize.js';

export const seedProductSpecifications = async () => {
    await ProductSpecifications.bulkCreate();
};