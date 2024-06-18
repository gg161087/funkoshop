import { Role } from './../database/initSequelize.js';

export const seedRoles = async () => {
    await Role.bulkCreate([
        { 
            id: 1,
            name: 'administrator' 
        },
        {
            id: 2, 
            name: 'guest' 
        },
        {
            id: 3, 
            name: 'seller' 
        },
        {
            id: 4,
            name: 'client' 
        }
    ]);
};