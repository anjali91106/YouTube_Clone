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

// fetching one video by id

export const videoById = (req, res) => {
  try {
    const id = req.params.id; 

    SampleVideo.findById(id).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Video with the given id not found" });
      }

      res.json(data);
    }).catch((err) => {
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};




