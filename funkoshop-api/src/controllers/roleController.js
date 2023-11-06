import roleService from './../services/roleService.js';

const getRoles = async (req, res) => {
    try {
        const roles = await roleService.getRoles();
        roles.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: roles});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getRole = async (req, res) => {
    try {
        const { role_id }= req.params;
        const role = await roleService.getRole(role_id);
        role.length == 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success: true, data: role});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createRole = async (req, res) => {
    const { role_name } = req.body;   
    if(!role_name){
        return res.json({ success: false, data: 'Missing field.'});      
    }
    const result = await roleService.createRole({role_name});
    res.json({ success: true, data: result});
};

const updateRole = async (req, res) => {
    const { role_id } = req.params;
    const { role_name } = req.body;
    if(!role_name){
        return res.json({ success: false, data: 'Missing field.'});      
    }
    try {
        const result = await roleService.updateRole({role_name}, role_id);        
        console.log(result);
        res.json({ success: true, data: result});
    } catch (error) {
        res.json({ success: false, message: error});
    }    
    /* result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success:true, message: 'Updated successfully.'}); */
};

const deleteRole = async (req, res) => {
    const { role_id } = req.params;
    const result = roleService.deleteRole(role_id);
    console.log(result);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'Bad request.'}) : res.json({success:true, message: 'Deleted successfully.'});
};

export default {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
}