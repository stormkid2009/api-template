import { Router } from "express";
import cardController from "../controllers/cardController";

const router = Router();

router.get("/",cardController.getAllCards);

router.get("/:cardId",cardController.getOneCard);

router.post("/",cardController.createNewCard);

router.patch("/:cardId",cardController.updateOneCard)

router.delete("/:cardId",cardController.deleteOneCard);


export default router;