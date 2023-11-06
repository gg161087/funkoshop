import licenceService from './../services/licenceService.js';

const getLicences = async (req, res) => {
    try {
        const licences = await licenceService.getLicences();
        licences.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: licences});       
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
};

const getLicence = async (req, res) => {
    try {
        const { licence_id } = req.params
        const licence = await licenceService.getLicence(licence_id);
        licence.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: licence});  
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createLicence = async (req, res) => {
    const body = req.body;    
    if( !body.licence_name || !body.licence_description || !body.licence_image){
        return res.json({ success: false, data: 'Missing fields.'});      
    }
    const result = await licenceService.createLicence(body);
    res.json({ success: true, data: result});
};

const updateLicence = async (req, res) => {
    const { licence_id } = req.params;
    const { licence_name, licence_description, licence_image} = req.body;
    const result = licenceService.updateLicence({ licence_name, licence_description, licence_image}, licence_id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success:true, message: 'Updated successfully.'});
};
const deleteLicence = async (req, res) => {
    const { licence_id } = req.params;
    const result = licenceService.deleteLicence(licence_id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success:true, message: 'Deleted successfully.'});
};

export default {
    getLicences,
    getLicence,
    createLicence,
    updateLicence,
    deleteLicence
};