
const userSchema = require("../models/user");

    const getAllUser = async () =>{
        //return user;
        try{
            const users = await userSchema.find();
            return users;
        }
        catch (error){
            throw error;
        } 
    };
    
    const getOneUser = async (userId) =>{
        try {
            const user = userSchema.findById(userId);
            return user;
        } catch (error) {
            throw error;
        }
    };
    
    const createNewUser = async (userData) =>{

        try {
            
            const newUser = new userSchema(userData);
            const createdUser = await newUser.save();
            console.log("datos de parametro " +createdUser)

            return createdUser;
        } catch (error) {
            throw error;
        }
    };
    
    const updateNewUser = async(userId, userData) =>{
        try {
            const updatedUser = await userSchema.findByIdAndUpdate(userId, userData, {new : true});

            return updatedUser;

        } catch (error) {
            throw error;
        }
    };
    
    const deleteOneUser = async(userId) =>{
        try {
            const deletedUser =  await userSchema.findByIdAndRemove(userId);
            return deletedUser;
        } catch (error) {
            throw error;
        }
    };

    module.exports = {
        getAllUser,
        getOneUser,
        createNewUser,
        updateNewUser,
        deleteOneUser

    }