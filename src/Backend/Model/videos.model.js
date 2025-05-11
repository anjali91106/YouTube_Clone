import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  commentId: String,
  userId: String,
  text: String,
  timestamp: String
});

const videoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  thumbnailUrl: String,
  videoUrl: String,
  description: String,
  channelId: String,
  uploader: String,
  views: Number,
  likes: Number,
  dislikes: Number,
  uploadDate: String,
  comments: [commentSchema]
});

const SampleVideo = mongoose.model('sample_videos', videoSchema);

export default SampleVideo;
