import {Request,Response} from 'express';
import userService from '../services/userService';

const getAllUsers=(req:Request,res:Response)=>{
    try {
        //talk to userService to get all users
        const allUsers = userService.getAllusers();
        res.status(200).send({status:"OK",data:allUsers})
    } catch (error) {
        res.status(500).send({status:"FAILED",data:error})
        
    }

}

const getOneUser=(req:Request,res:Response)=>{
     const {params:{userId}}=req;
    if(!userId){
        return res.status(400).send({
            status:"FAILED",
            msg:`u must provide a user ID`
        });
        
    };
    
    try {
        //talk to userService to get specific user
        const user = userService.getOneUser(userId);
        res.status(200).send({status:"OK",data:user})
        
    } catch (error) {
        res.status(500).send({status:"FAILED",data:error});
        
    }

}

const createNewUser=(req:Request,res:Response)=>{
    
    try {
        //talk to userService to create new use
        const createdUser = userService.createNewUser();
        res.status(201).send({status:"OK",data:createdUser})
        
    } catch (error) {
        res.status(500).send({status:"FAILED",data:error});
        
    }

}

const updateOneUser=(req:Request,res:Response)=>{
    const {userId} = req.params;
    
    try {
        //talk to userService to get updated user
        const updatedUser = userService.updateOneUser(userId);
        res.status(201).send({status:"OK",data:updatedUser})
    } catch (error) {
        res.status(500).send({status:"FAILED",data:error});
        
    }

}

const deleteOneUser=(req:Request,res:Response)=>{
    const {userId}=req.params;
    try {
        //talk to userService to delete specific user
        const msg=userService.deleteOneUser(userId);
        res.status(201).send({status:"OK",data:msg})
        
    } catch (error) {
        res.status(500).send({status:"FAILED",data:error});
        
    }
}
    



const userController={
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
};

export default userController;