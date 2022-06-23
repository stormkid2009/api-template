import express,{Application} from 'express';
import {Server} from 'http';
import {config} from 'dotenv';
import v1WorkoutRouter from './v1/routes/workoutRoutes';
import v1UserRouter from './v1/routes/userRoutes';
import v1ProductRouter from './v1/routes/productRoutes';
import v1CardRouter from './v1/routes/cardRoutes';

config();


const app:Application = express();
const port:Number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//name the end points in plural make sense
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/users",v1UserRouter);
app.use("/api/v1/products",v1ProductRouter);
app.use('/api/v1/cards',v1CardRouter);

const server:Server = app.listen(port,()=> console.log(`server is running on port: ${port}`));

