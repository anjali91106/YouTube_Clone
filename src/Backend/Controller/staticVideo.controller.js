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
