import { Category } from '../database/initSequelize.js';

export const seedCategories = async () => {
    await Category.bulkCreate([
        { name: 'funkos', description: 'Figuras coleccionables Funko Pop' },
        { name: 'remeras', description: 'Remeras de anime, series, peliculas y más' },
        { name: 'llaveros', description: 'Llaveros coleccionables' }
    ]);
}