import { Request, Response } from "express";
import cardService from "../services/cardService";

const getAllCards=(req:Request,res:Response)=>{
  try {
    const allCards = cardService.getAllCards();
    res.status(200).send({
      status:"OK",data:allCards
    })
  } catch (error) {
    res.status(500).send({status:"FAILED",message:error})
  }
}

const createNewCard = (req: Request, res: Response) => {
  const { body } = req;
  if (!body.userId) {
    res.status(400).send({
      message: `card's user id  is missing please provide the data`,
    });
    return;
  }
  try {
    const newCard = {
      userId: body.userId,
      isEmpty: true,
      products: [],
    };
    const createdCard = cardService.createNewCard(newCard);
    res.status(201).send({
      status: "OK",
      data: createdCard,
    });
  } catch (error) {
    res.status(500).send({
      status: "FAILED",
      data: error,
    });
  }
};

const getOneCard = (req: Request, res: Response) => {
  const {
    params: { cardId },
  } = req;
  if (!cardId) {
    return res.status(400).send({
      status: "FAILED",
      message: `You must forget to send card id !!!`,
    });
  }
  try {
    const card = cardService.getOneCard(cardId);
    res.status(200).send({
      status: "OK",
      data: card,
    });
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: error });
  }
};

const deleteOneCard=(req:Request,res:Response)=>{
  const {
    params:{cardId}
  } = req;
  if(!cardId){
    return res.status(400).send({
      status:"FAILED",
      message:`u should provide  card id`
    })
  }
  try {
    cardService.deleteOneCard(cardId);
    res.status(204).send({message:`card has been deleted successfully`})
  } catch (error) {
    res.status(500).send({
      status:"FAILED",
      message:error
    })
  }
}

const cardController = {
  getAllCards,
  createNewCard,
  getOneCard,
  deleteOneCard
};

export default cardController;
