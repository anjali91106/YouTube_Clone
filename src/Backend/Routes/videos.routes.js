import { allVideosData, videoById } from "../Controller/videos.controller.js";


export function routes(app){
    app.get("/videos", allVideosData);
    app.get("/videopage/:id", videoById);
}

