import { Licence } from './../database/initSequelize.js';

export const getAllLicences = async (req, res) => {
    try {
        const licences = await Licence.findAll();
        res.status(200).json(licences);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const getLicenceById = async (req, res) => {
    const { id } = req.params;
    try {
        const licence = await Licence.findByPk(id);
        res.status(200).json(licence);        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    };
};

export const createLicence = async (req, res) => {    
    const { name, description, image } = req.body;
    if (!name || ! description || image) {
        return res.status(404).json({ message: 'Missing fields.'});
    };
    try {
        const newLicence = await Licence.create({ name:name, description:description, image:image });
        if (!newLicence) {
            res.status(404).json({ message: 'Bad request.'});
        } else {
            res.status(201).json(newLicence);
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const updateLicenceById = async (req, res) => {
    const { id } = req.params;
    const { name, description, image } = req.body;
    if (!name || ! description || image) {
        return res.status(404).json({message: 'Missing fields.'});
    };
    try {
        const licence = await Licence.findByPk(id);
        if (!licence) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            const result = await licence.update({ name:name, description:description, image:image });
            res.json({ message: 'Licence updated correctly.', result:result });
        };      
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

export const deleteLicenceById = async (req, res) => {
    const { id } = req.params;
    try {
        const licence = await Licence.findByPk(id);
        if (!licence) {
            res.status(404).json({ message: 'Not found.' });
        } else {
            await licence.destroy();
            res.status(202).json({ message: 'Licence deleted successfully.' });
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};