import SampleVideo from "../Model/videos.model.js";

//fetching all the video data 
export const allVideosData = (req, res) => {
  SampleVideo.find().then((data) => {
    if(!data){
        res.status(400).json({message: "Something went wrong while fetching all the data"});
    }

    res.send(data);
  }).catch(err => res.status(500)
  .json({message: "Internal server Error" || console.log(err.message) }));
}






