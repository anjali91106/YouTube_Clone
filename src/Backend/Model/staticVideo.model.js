import mongoose from "mongoose";

const staticVideoSchema = mongoose.Schema({
    imageUrl : String,
    title : String,
    uploader: String,
    uploaddate: String 
})

const staticVideo = mongoose.model('static_video', staticVideoSchema);
export default staticVideo;









