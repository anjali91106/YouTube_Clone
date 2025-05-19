import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
    imageUrl : String,
    title : String,
    uploader: String,
    uploaddate: String ,
    timestamp: String
})

const channelSchema = mongoose.Schema({
    channelId: {
        type: String,
        required: true,
        unique: true
    },
    channelName:{
        type: String,
        required: true
    },
    Owner: {
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    channelBanner:{
        type: String,
    },
    subscribers:{
        type: String
    },
    videos: [videoSchema]
})

const channelModel = mongoose.model("channel_samples", channelSchema);
export default channelModel;

