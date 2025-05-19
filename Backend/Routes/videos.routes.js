import { addData, allStaticData, deleteVideo, updateVideo } from "../Controller/staticVideo.controller.js";
import { allVideosData, videoById } from "../Controller/videos.controller.js";
import verifyAuthentication from "../Middleware/verify.middleware.js";


export function routes(app){
    // jwt token check
    app.get("/videos",verifyAuthentication, allVideosData); //can not video yt video before login 
    app.get("/videopage/:id", videoById);

    //to add the static side videos
    app.post("/staticVideo", addData);
    app.get("/staticVideo", allStaticData)
    app.put('/staticVideo/:id', updateVideo);
    app.delete('/staticVideo/:id', deleteVideo)
}

