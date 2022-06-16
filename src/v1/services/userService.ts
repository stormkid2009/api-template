import User from "../database/User"

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
    return {
        id:userId
    }
};

const createNewUser=()=>{
    return {msg:"user has been created successfully!"}
};

const updateOneUser=(userId:string)=>{
    return {msg:`user id ${userId} has been updated successfully!`}
};

const deleteOneUser=(userId:string)=>{
    return {
        msg:`user id ${userId} has been deleted successfully!`
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