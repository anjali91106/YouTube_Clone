import { allVideosData } from "../Controller/videos.controller.js";


export function routes(app){
    app.get("/videos", allVideosData);
}

