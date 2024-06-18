import { sequelize } from '../database/initSequelize.js';

import { seedCategories } from './seedCategories.js';
import { seedLicences } from './seedLicences.js';
import { seedRoles } from './seedRoles.js';
import { seedProducts } from './seedProducts.js';
import { seedProductSpecifications } from './seedProductSpecifications.js';
import { seedUsers } from './seedUsers.js';
import { seedUserRoles } from './seedUserRoles.js';

export const initSeeders = async () => {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');   

    seedCategories();
    seedLicences();
    seedRoles();
    seedProducts();
    //seedProductSpecifications();
    seedUsers();
    seedUserRoles();

    console.log('Initial data has been added.');
}