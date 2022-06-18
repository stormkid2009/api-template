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
    const {body} = req;
    if(!body.email || !body.name){
        res.status(400).send({
            data:`user email or name is missed plz provide it`
        });
        return;
    }
    
    try {
        const newUser:object = {
            email:body.email,
            name:body.name,
        }
        //talk to userService and pass newUser object to it
        const createdUser = userService.createNewUser(newUser);
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
    if(!userId){
        res.status(400).send({
            status:"FAILED",
            data:{error:"u should provide user id"}

        });
    }
    try {
        //talk to userService to delete specific user
        userService.deleteOneUser(userId);
        res.status(204).send({status:"OK"})
        
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