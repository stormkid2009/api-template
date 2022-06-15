import { Request, Response } from "express";
import workoutService from "../services/workoutService";

const getAllWorkouts = (req: Request, res: Response) => {
  
  try {
    const allWorkouts = workoutService.getAllWorkouts();
    res
    .status(201).send({ status: "OK", data: allWorkouts })
    
  } catch (error) {
    res
    .status(500).send({status:"FAILED",data:error})
    
  }
};

const getOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
  } catch (error) {
    res
      .status( 500)
      .send({ status: "FAILED", data: error });
  }
};

const createNewWorkout = (req: Request, res: Response) => {
  const { body } = req;
  // *** ADD ***
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
    return;
  }
  // *** ADD ***
  const newWorkout: object = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res.status(500).send({ status: "FAILED", data: { error: error } });
  }
};

const updateOneWorkout = (req: Request, res: Response) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({ status: "OK", data: updatedWorkout });
  } catch (error) {
    res
      .status( 500)
      .send({ status: "FAILED", data: error });
  }
};

const deleteOneWorkout = (req: Request, res: Response) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }
  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status( 500)
      .send({ status: "FAILED", data: error });
  }
};

const workoutController = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

export default workoutController;
