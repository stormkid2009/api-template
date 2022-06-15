import express,{Request,Response,Application,NextFunction} from 'express';
import {Server} from 'http';
import {config} from 'dotenv';
import v1WorkoutRouter from './v1/routes/workoutRoutes';

config();


const app:Application = express();
const port:Number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use("/api/v1/workouts", v1WorkoutRouter);
const server:Server = app.listen(port,()=> console.log(`server is running on port: ${port}`));

