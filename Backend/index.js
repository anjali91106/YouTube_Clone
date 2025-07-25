import express from "express";
import { routes } from "./Routes/videos.routes.js";
import cors from "cors"
import dbConnect from "./Config/dbConnect.js";
import dotenv from "dotenv"
import { commentRoute } from "./Routes/comments.route.js";
import { userRoutes } from "./Routes/user.routes.js";
import channelRoutes from "./Routes/channel.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to DB first, then seed, then start server
const startServer = async () => {
  try {
    await dbConnect();       // Wait for MongoDB connection   

    // Register API routes
    routes(app);
    commentRoute(app);
    userRoutes(app);
    channelRoutes(app);

    const PORT = process.env.PORT || 7000;
    app.listen(PORT, () => {
      console.log(`SERVER IS CONNECTED AT PORT : ${PORT}`);
    });
  } catch (err) {
    console.error("Startup error:", err);
  }
};

startServer(); 


