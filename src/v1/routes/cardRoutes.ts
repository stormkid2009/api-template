import { Router } from "express";
import cardController from "../controllers/cardController";

const router = Router();

router.get("/",cardController.getAllCards);

router.get("/:cardId",cardController.getOneCard);

router.post("/",cardController.createNewCard);

router.delete("/:cardId",cardController.deleteOneCard);


export default router;