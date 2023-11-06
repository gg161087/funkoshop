import userService from './../services/userService.js';

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        users.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: users});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getUser = async (req, res) => {
    try {
        const { id }= req.params;
        const user = await userService.getUser(id);
        user.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: user});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createUser = async (req, res) => {
    const body = req.body;
    const userScheme = {
        name:body.name,
        lastname:body.lastname,
        email: body.email,
        password: body.password 
    }    
    if( !userScheme.name || !userScheme.lastname || !userScheme.email || !userScheme.password ){
        return res.json({ success: false, data: 'Missing fields.'});      
    }
    const result = await userService.createUser(userScheme);
    res.json({ success: true, data: result});
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { category_name, category_description } = req.body
    const result = userService.updateUser({ category_name, category_description }, id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'actualizado correctamente'});
};
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const result = userService.deleteCategory(id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'Eliminado correctamente'});
};

export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};