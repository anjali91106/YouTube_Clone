import express from "express";
// import SampleVideo from "./Model/videos.model.js";
import { routes } from "./Routes/videos.routes.js";
import cors from "cors"

import dbConnect from "./Config/dbConnect.js";
import dotenv from "dotenv"
dotenv.config();

console.log("Hello from server");
dbConnect();

const app = express();
app.use(express.json());

//using cors for different localhost ports 
app.use(cors());

routes(app);

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS CONNECTED AT PORT : ${process.env.PORT}`);
})

//checking if the data is getiing fetched or not 
// const videos = await SampleVideo.find();
// console.log(videos);












