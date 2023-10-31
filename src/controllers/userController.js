const userService = require("../services/userServices");

const getAllUser = async (req,res) => {
    //res.send('Get all user');
    try {
        const users = await userService.getAllUser();
        res.json(users);
    }catch(error){
        res.status(500).send('Error al obtener los registros de usuarios');
    }
    //const AllUsers = userService.getAllUser();
    
};

const getOneUser = async (req, res)=>{

    try {
        const userId = req.params.workoutId;
        const oneUser = await userService.getOneUser(userId);
        if(oneUser){
            res.json(oneUser);
        }else {
            res.status(404).send("USuario no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al no obtener el usuario");
    }
};

const createNewUser = async (req,res) => {
    try {
        const createUser = await userService.createNewUser(req.body);
        res.json(createUser);
    } catch (error) {
        res.status(500).send('Error al obtener los registros de usuarios'+error);
    }
};

const updateNewUser = async (req,res)=>{
    // const updateUser = userService.updateNewUser(req.params.workoutId);
    // res.send(`Update an existing workout`);
    try {
        const userId = req.params.workoutId;
        const userData = req.body;

        const updatedUser = await userService.updateNewUser(userId, userData);
        
        if(updatedUser){
            res.json(updatedUser);    
        }else{
            res.status(400).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al actualizar el usuario");
    }
};

const deleteOneUser = async(req,res) => {
    try {
        const userId = req.params.workoutId;

        const deletedUser = await userService.deleteOneUser(userId);
        
        if(deletedUser){
            res.json(deletedUser);
        }else {
            res.status(404).send("Usuario no encontrado");
        }
    }catch {
        res.status(500).send("Error al eliminar el usuario");
    }
};

module.exports = {
    getAllUser,
    getOneUser,
    createNewUser,
    updateNewUser,
    deleteOneUser
}