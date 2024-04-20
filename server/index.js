import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); //this helps us pull our envirment variables from our dotenv file

const app = express();  //initializing express application
//adding middlewares
app.use(cors());
app.use(express.json({limit: '50mb'}));

//creating routes