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

const createNewCard =(newCard:any)=>{
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
}

const Card = {
    getAllCards,
    createNewCard,
    getOneCard,
    deleteOneCard
};

export default Card;