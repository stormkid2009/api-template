import Card from "../database/Card";
const { v4: uuid } = require("uuid");


const getAllCards=()=>{
    try {
        const allCards = Card.getAllCards();
        return allCards;
        
    } catch (error) {
        throw error
    }
}
const getOneCard=(cardId:string)=>{
    try {
        const card=Card.getOneCard(cardId);
        return card;
    } catch (error) {
        throw error
    }

};

const createNewCard =(newCard:any)=>{
    const cardToInsert = {
        ...newCard,
        id:uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdCard = Card.createNewCard(cardToInsert);
        return createdCard;
    } catch (error) {
        throw error
    }
};

const deleteOneCard=(cardId:string)=>{
    try {
        Card.deleteOneCard(cardId);
        
    } catch (error) {
        throw error
    }
}

const cardService = {
    getAllCards,
    createNewCard,
    getOneCard,
    deleteOneCard,
};

export default cardService;