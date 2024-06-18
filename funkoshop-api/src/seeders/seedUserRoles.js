import { UserRoles } from './../database/initSequelize.js';

export const seedUserRoles = async () => {
    await UserRoles.bulkCreate([
        {
            user_id: 1,
            role_id: 1
        }
    ]);
};