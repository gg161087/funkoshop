import { Licence } from '../models/indexModels.js';

const getLicences = async () => {
    const rows = await Licence.findAll();
    return rows;
};

const getLicence = async (params) => {  
    const rows = await Licence.findByPk(params);
    return rows;
};

const createLicence = async (params) => {
    const createdLicence = await Licence.create(params);
    return createdLicence;
};

const updateLicence = async (params, id) => {
    const licence = await Licence.findByPk(id);
    if (!licence) {
        return false
    }
    const updatedLicence = await Licence.update(params)
    return updatedLicence;
};

const deleteLicence = async (id) => {
    const licence = await Licence.findByPk(id);
    if (!licence) {
        return false
    }
    await Licence.destroy()
    return true;
};

export default {
    getLicences,    
    getLicence,
    createLicence,
    updateLicence,
    deleteLicence
};