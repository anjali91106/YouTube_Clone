import { addData, allStaticData, deleteVideo, updateVideo } from "../Controller/staticVideo.controller.js";
import { allVideosData, videoById } from "../Controller/videos.controller.js";


export function routes(app){
    app.get("/videos", allVideosData);
    app.get("/videopage/:id", videoById);

    //to add the static side videos
    app.post("/staticVideo", addData);
    app.get("/staticVideo", allStaticData)
    app.put('/staticVideo/:id', updateVideo);
    app.delete('/staticVideo/:id', deleteVideo)
}

