import express from "express";
import { routes } from "./Routes/videos.routes.js";
import cors from "cors"
import dbConnect from "./Config/dbConnect.js";
import dotenv from "dotenv"
import { commentRoute } from "./Routes/comments.route.js";
import { userRoutes } from "./Routes/user.routes.js";
import channelRoutes from "./Routes/channel.routes.js";
dotenv.config();

console.log("Hello from server");
dbConnect();

const app = express();
app.use(express.json());

//using cors for different localhost ports 
app.use(cors());

//adding api routes
routes(app);
commentRoute(app);
userRoutes(app);
channelRoutes(app);

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    console.log(`SERVER IS CONNECTED AT PORT : ${PORT}`);
})

//checking if the data is getiing fetched or not 
// const videos = await SampleVideo.find();
// console.log(videos);












