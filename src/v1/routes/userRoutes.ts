import { Router } from "express";
import userController from "../controllers/userController";

const router: Router = Router();

router.get("/", userController.getAllUsers);

router.get("/:userId", userController.getOneUser);

router.post("/", userController.createNewUser);

router.patch("/:userId", userController.updateOneUser);

router.delete("/:userId", userController.deleteOneUser);

export default router;
