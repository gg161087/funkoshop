import { User } from './../database/initSequelize.js';

export const seedUsers = async () => {
    await User.bulkCreate([
        {
            id: 1,
            name: "Administrador",
            last_name: "Itechnology",
            telephone: "542215123478",
            email: "admin@funkoshop.com",
            password: "$2b$10$DwS8ByBVKeeKmMj9vGVHb.bAazoDI9JklgZKOjGNL22NJbC8vX92a"
        }
    ]);
};