import staticVideo from "../Model/staticVideo.model.js";


//add data into the static video

export const addData = (req, res) => {
   const {imageUrl, uploaddate, uploader, title} = req.body;

   const newVideo = new staticVideo({
    title : title,
    imageUrl : imageUrl,
    uploader : uploader,
    uploaddate : uploaddate,
    })

    newVideo.save().then(data => {
        if(!data){
            return res.status(400)
            .json({message: "Something went wrong"})
        }

        res.send(data);
    })
}

//fetching all the video data 
export const allStaticData = (req, res) => {
  staticVideo.find().then((data) => {
    if(!data){
        res.status(400).json({message: "Something went wrong while fetching all the data"});
    }

    res.send(data);
  }).catch(err => res.status(500)
  .json({message: "Internal server Error" || console.log(err.message) }));
}

//updating the video

export const updateVideo = async (req, res) => {
  const { id } = req.params; // assuming you're sending the video _id
  const { imageUrl, uploaddate, uploader, title } = req.body;

  try {
    const updatedVideo = await staticVideo.findByIdAndUpdate(
      id,
      { imageUrl, uploaddate, uploader, title },
      { new: true } // return the updated document
    );

    if (!updatedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json({ message: "Video updated successfully", updatedVideo });
  } catch (err) {
    res.status(500).json({ message: "Error updating video", error: err });
  }
};

// deleting a video

export const deleteVideo = async (req, res) => {
  const { id } = req.params; // assuming you're deleting by _id

  try {
    const deletedVideo = await staticVideo.findByIdAndDelete(id);

    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json({ message: "Video deleted successfully", deletedVideo });
  } catch (err) {
    res.status(500).json({ message: "Error deleting video", error: err });
  }
};


