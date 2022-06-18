import User from "../database/User";
const { v4: uuid } = require("uuid");

//good practice to name service functions the same like controller functions
const getAllusers=()=>{
    try {
        const allUsers = User.getAllUsers();
        return allUsers;
    } catch (error) {
       throw error; 
    }
};

const getOneUser=(userId:string)=>{
    try {
        const user = User.getOneUser(userId);
        return user;
        
    } catch (error) {
        throw error;
    }
};

const createNewUser=(newUser:object)=>{
    const userToInsert = {
        ...newUser,
        id:uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    try {
        const createdUser = User.createNewUser(userToInsert);
        return createdUser;
        
    } catch (error) {
        throw error
    }
};

const updateOneUser=(userId:string)=>{
    return {msg:`user id ${userId} has been updated successfully!`}
};

const deleteOneUser=(userId:string)=>{
    try {
        User.deleteOneUser(userId);
    } catch (error) {
       throw error; 
    }
};

const userService={
    getAllusers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};

export default userService;