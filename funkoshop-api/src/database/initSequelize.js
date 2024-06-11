import { Sequelize } from 'sequelize';

import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } from '../../config.js';

import categoryModel from './../models/categoryModel.js';
import licenceModel from './../models/licenceModel.js';
import productModel from './../models/productModel.js';
import productSpecificationsModel from './../models/productSpecificationsModel.js';
import userModel from './../models/userModel.js';
import roleModel from './../models/roleModel.js';
import userRolesModel from './../models/userRolesModel.js';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT
});

const Category = categoryModel(sequelize);
const Licence = licenceModel(sequelize);
const Product = productModel(sequelize);
const ProductSpecifications = productSpecificationsModel(sequelize);
const User = userModel(sequelize);
const Role = roleModel(sequelize);
const UserRoles = userRolesModel(sequelize);

Product.hasMany(ProductSpecifications, { foreignKey: 'product_id' });
ProductSpecifications.belongsTo(Product, { foreignKey: 'product_id' });
Product.belongsTo(Licence, { foreignKey: 'licence_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });
User.belongsToMany(Role, { through: UserRoles, foreignKey: 'user_id' });
Role.belongsToMany(User, { through: UserRoles, foreignKey: 'role_id' });

const initSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');

        await sequelize.sync({ force: true });
        console.log('All models were synchronized successfully.');

        await Category.bulkCreate([
            { name: 'funkos', description: 'Figuras coleccionables Funko Pop' },
            { name: 'remeras', description: 'Remeras de anime, series, peliculas y más' },
            { name: 'llaveros', description: 'Llaveros coleccionables' }
        ]);

        await Role.bulkCreate([
            { name: 'admin' },
            { name: 'user' },
            { name: 'guest' }
        ]);

        console.log('Initial data has been added.');
    } catch (error) {
        console.error('Unable to initialize Sequelize:', error);
    }
};

export { sequelize, Category, Licence, Product, ProductSpecifications, User, Role, UserRoles, initSequelize };