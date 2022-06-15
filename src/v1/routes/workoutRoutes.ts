import {Router} from 'express';
import workoutController from '../controllers/workoutController';


const router:Router = Router();

router.get("/",workoutController.getAllWorkouts);

router.get("/:workoutId",workoutController.getOneWorkout);

router.post("/",workoutController.createNewWorkout);

router.patch("/:workoutId",workoutController.updateOneWorkout);

router.delete("/:workoutId",workoutController.deleteOneWorkout);


export default router;