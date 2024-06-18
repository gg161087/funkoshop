import { Product } from './../database/initSequelize.js';

export const seedProducts = async () => {
    await Product.bulkCreate([
        {
            name: "Baby Yoda Blueball",
            description: "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
            price: 1799.99,
            stock: 8,
            discount: 5.00,
            sku: "STW001001",
            dues: 3,
            special: 0,
            image_front: "star-wars/baby-yoda-1.webp",
            image_back: "star-wars/baby-yoda-1-box.webp",
            licence_id: 2,
            category_id: 1
        },
        {
            name: "Luke Skylwalker & Grogu",
            description: "Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.",
            price: 2399.99,
            stock: 8,
            discount: 15.00,
            sku: "STW001003",
            dues: 3,
            special: 0,
            image_front: "star-wars/luke-1.webp",
            image_back: "star-wars/luke-1-box.webp",
            licence_id: 2,
            category_id: 1
        },
        {
            name: "Stormtrooper Lightsaber",
            description: "Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.",
            price: 1799.99,
            stock: 8,
            discount: 20.00,
            sku: "STW001004",
            dues: 3,
            special: 0,
            image_front: "star-wars/trooper-1.webp",
            image_back: "star-wars/trooper-1-box.webp",
            licence_id: 2,
            category_id: 1
        },
        {
            name: "Charmander Smiley",
            description: "Figura coleccionable de Charmander - Pokemon Saga.",
            price: 1799.99,
            stock: 8,
            discount: 10.00,
            sku: "PKM001001",
            dues: 3,
            special: 0,
            image_front: "pokemon/charmander-1.webp",
            image_back: "pokemon/charmander-1-box.webp",
            licence_id: 1,
            category_id: 1
        },
        {
            name: "Dragonite Hi!",
            description: "Figura coleccionable de Dragonite - Pokemon Saga.",
            price: 1799.99,
            stock: 8,
            discount: 10.00,
            sku: "PKM001002",
            dues: 3,
            special: 0,
            image_front: "pokemon/dragonite-1.webp",
            image_back: "pokemon/dragonite-1-box.webp",
            licence_id: 1,
            category_id: 1
        },
        {
            name: "Pidgeotto Flying",
            description: "Figura coleccionable de Pidgeotto - Pokemon Saga.",
            price: 1799.99,
            stock: 8,
            discount: 30.00,
            sku: "PKM00103",
            dues: 3,
            special: 1,
            image_front: "pokemon/pidgeotto-1.webp",
            image_back: "pokemon/pidgeotto-1-box.webp",
            licence_id: 1,
            category_id: 1
        },
        {
            name: "Pikachu Smiley",
            description: "Figura coleccionable de Pikachu - Pokemon Saga.",
            price: 1799.99,
            stock: 8,
            discount: 10.00,
            sku: "PKM001004",
            dues: 3,
            special: 0,
            image_front: "pokemon/pikachu-1.webp",
            image_back: "pokemon/pikachu-1-box.webp",
            licence_id: 1,
            category_id: 1
        },
        {
            name: "Vulpix Fancy",
            description: "Figura coleccionable de Vulpix - Pokemon Saga.",
            price: 99.99,
            stock: 8,
            discount: 10.00,
            sku: "PKM001005",
            dues: 3,
            special: 0,
            image_front: "pokemon/vulpix-1.webp",
            image_back: "pokemon/vulpix-1-box.webp",
            licence_id: 1,
            category_id: 1
        },
        {
            name: "Harry Potter & Hegwid",
            description: "Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.",
            price: 1799.99,
            stock: 11,
            discount: 10.00,
            sku: "HPT001001",
            dues: 9,
            special: 0,
            image_front: "harry-potter/harry-1.webp",
            image_back: "harry-potter/harry-1-box.webp",
            licence_id: 3,
            category_id: 1
        },
        {
            name: "Kakashi Hatake Shippuden",
            description: "Kakashi Hatake Shippuden",
            price: 1999.99,
            stock: 20,
            discount: 10.00,
            sku: "NRT001001",
            dues: 9,
            special: 0,
            image_front: "naruto/naruto-kakashi-1.webp",
            image_back: "naruto/naruto-kakashi-1-box.webp",
            licence_id: 4,
            category_id: 1
        },
        {
            name: "Harry Potter",
            description: "Remera coleccionable de Harry Potter.",
            price: 100.00,
            stock: 999,
            discount: 10.00,
            sku: "HPT003001",
            dues: 6,
            special: 1,
            image_front: "harry-potter/harry-3.webp",
            image_back: "harry-potter/harry-3-box.webp",
            licence_id: 3,
            category_id: 2
        }
    ]);
};