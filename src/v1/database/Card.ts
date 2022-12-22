import DB from "./database";
import saveToDatabase from "./utils";

const getAllCards=()=>{
    try {
        return DB.cards;
        
    } catch (error) {
        throw error
    }
}

const getOneCard=(cardId:string)=>{
    try {
        const card = DB.cards.find((card:any)=> card.id === cardId);
        if(!card){
            throw {
                status:400,
                message:`there is no card with id: ${cardId}`
            }
        }
        return card;
        
    } catch (error) {
        throw error
    }
};
//this function is not in the right place we have to merge it to the users api
//to make it easy to be sure that card created has existed id ... or maybe check this here
const createNewCard =(newCard:any)=>{
    const isUserExist = DB.users.findIndex((user:any)=>user.id === newCard.userId)>-1;
    if(!isUserExist){
        throw {
            
            message:`can not create card for anonymous user`
        }
    }
    try {
        const isAlreadyExist = DB.cards.findIndex((card:any)=>card.userId === newCard.userId)>-1;
        if(isAlreadyExist){
            throw {message:`there is already a card for user : ${newCard.userId}`}
        }
        DB.cards.push(newCard);
        saveToDatabase(DB);
        return newCard;
    } catch (error) {
        throw error
    }
};
const updateOneCard=(cardId:string,changes:any)=>{
    
    try {
        const isAlreadyExist = DB.cards.findIndex((card:any)=> card.id === cardId)>-1;
        if(!isAlreadyExist){
            throw {status:400,message:`there is no such card with id : ${cardId}`}
        }
        const indexForUpdate = DB.cards.findIndex((card:any)=> card.id === cardId);
        //notice here spreed with object litterals :
        //changes object with the same key value will overide the orignial ones in card
        //for example products:[] ====> will be products:['item','item' etc]
        const updatedCard = {
            ...DB.cards[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        DB.cards[indexForUpdate] = updatedCard;
        saveToDatabase(DB);

    } catch (error) {
        throw error
    }
}

const deleteOneCard=(cardId:string)=>{
    try {
        const indexForDeletion = DB.cards.findIndex((card:any)=>card.id === cardId);
        if(indexForDeletion === -1){
            throw {message:`there is no such card with id: ${cardId}`}
        }
        DB.cards.splice(indexForDeletion,1);
        saveToDatabase(DB);
    } catch (error) {
        throw error
    }
};

const Card = {
    getAllCards,
    createNewCard,
    getOneCard,
    deleteOneCard,
    updateOneCard,
};

export default Card;