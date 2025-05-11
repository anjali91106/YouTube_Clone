import express from "express";
// import SampleVideo from "./Model/videos.model.js";

import dbConnect from "./Config/dbConnect.js";
import dotenv from "dotenv"
dotenv.config();

console.log("Hello from server");
dbConnect();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS CONNECTED AT PORT : ${process.env.PORT}`);
})

//checking if the data is getiing fetched or not 
// const videos = await SampleVideo.find();
// console.log(videos);












