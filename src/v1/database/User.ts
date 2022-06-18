const DB = require("./db.json");
import saveToDatabase from "./utils";

const getAllUsers = () => {
  try {
    return DB.users;
  } catch (error) {
    throw { status: 500, message: error };
  }
};
const createNewUser =(newUser:any)=>{
  try {
    //check if user exists already
    const isAlreadyAdded = DB.users.findIndex((user:any)=>user.email === newUser.email)>-1;
    if(isAlreadyAdded){
      throw {
        status:400,
        message:`user with email ${newUser.email} alreay exists!!`
      }
    };
    DB.users.push(newUser);
    saveToDatabase(DB);
    return newUser;
    
  } catch (error) {
    throw {status:500,data:error}
  }

};
const getOneUser=(userId:string)=>{
  try {
    const user = DB.users.find((user:any)=> user.id === userId);
    if(!user){
      throw {
        status:400,
        message:`can not find user with id : '${userId}'`
      }
    };
    return user;
  } catch (error) {
    throw {status:500,message:error}
  }
};

const deleteOneUser=(userId:string)=>{
  try {
    const indexForDeletion = DB.users.findIndex((user:any)=> user.id === userId);
    //if user does not exist
    if(indexForDeletion === -1){
      throw {
        status:400,
        message:`there is no such user with id : '${userId}'`
      }
    }
    DB.users.splice(indexForDeletion,1);
    saveToDatabase(DB);
  } catch (error) {
    throw {status:500,message:error};
  }
}

const User = {
    getAllUsers,
    createNewUser,
    getOneUser,
    deleteOneUser
};


export default User;