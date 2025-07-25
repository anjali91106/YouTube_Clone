import staticVideo from "./Model/staticVideo.model.js";
import commentModel from "./Model/comments.model.js";
import SampleVideo from "./Model/videos.model.js";
import dbConnect from "./Config/dbConnect.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

//sample datas
const staticVideosData = 
[{
  imageUrl: "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
  title: "video02",
  uploader: "uploader02",
  uploaddate: "3-1-2011",
},
{
  imageUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  title: "video01",
  uploader: "uploader01",
  uploaddate: "2-5-2010",
},
{
  imageUrl: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  title: "video02",
  uploader: "uploader02",
  uploaddate: "3-1-2011",
},
{
  imageUrl: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  title: "video03",
  uploader: "uploader03",
  uploaddate: "8-11-2013",
},
{
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s",
  title: "video04",
  uploader: "uploader04",
  uploaddate: "1-7-2015",
}];

const sampleVideosData = [{
  videoId: "video01",
  title: "Learn React in 30 Minutes",
  thumbnailUrl: "https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8",
  description: "A quick tutorial to get started with React.",
  channelId: "channel01",
  uploader: "user01",
  views: 15200,
  likes: 1023,
  disLikes: 45,
  uploaddate: "2024-09-20",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video02",
  title: "JavaScript in 1 Hour",
  thumbnailUrl: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
  description: "Complete JavaScript tutorial for beginners.",
  channelId: "channel02",
  uploader: "user02",
  views: 45000,
  likes: 3200,
  disLikes: 89,
  uploaddate: "2024-08-10",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video03",
  title: "Build a YouTube Clone with React",
  thumbnailUrl: "https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=NT299zIk2JY",
  description: "Step-by-step guide to creating a YouTube UI.",
  channelId: "channel03",
  uploader: "user03",
  views: 8700,
  likes: 600,
  disLikes: 12,
  uploaddate: "2024-07-25",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video04",
  title: "React Redux Tutorial",
  thumbnailUrl: "https://i.ytimg.com/vi/zrs7u6bdbUw/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=zrs7u6bdbUw",
  description: "Learn how Redux works with React apps.",
  channelId: "channel04",
  uploader: "user04",
  views: 29000,
  likes: 1800,
  disLikes: 60,
  uploaddate: "2024-06-18",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video05",
  title: "Tailwind CSS Crash Course",
  thumbnailUrl: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=dFgzHOX84xQ",
  description: "Master Tailwind CSS for frontend styling.",
  channelId: "channel05",
  uploader: "user05",
  views: 19800,
  likes: 1400,
  disLikes: 30,
  uploaddate: "2024-05-05",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video06",
  title: "Node.js Crash Course",
  thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
  description: "Beginner-friendly intro to Node.js.",
  channelId: "channel06",
  uploader: "user06",
  views: 65000,
  likes: 5100,
  disLikes: 110,
  uploaddate: "2024-04-22",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video07",
  title: "MongoDB Tutorial for Beginners",
  thumbnailUrl: "https://i.ytimg.com/vi/Of1XgA1jjyI/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=Of1XgA1jjyI",
  description: "Understand MongoDB for full stack development.",
  channelId: "channel07",
  uploader: "user07",
  views: 12000,
  likes: 950,
  disLikes: 15,
  uploaddate: "2024-03-19",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video08",
  title: "VS Code Tips and Tricks",
  thumbnailUrl: "https://i.ytimg.com/vi/VqCgcpAypFQ/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=VqCgcpAypFQ",
  description: "Boost your productivity in Visual Studio Code.",
  channelId: "channel08",
  uploader: "user08",
  views: 22300,
  likes: 1650,
  disLikes: 42,
  uploaddate: "2024-02-28",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video09",
  title: "Understanding Flexbox in CSS",
  thumbnailUrl: "https://i.ytimg.com/vi/fYq5PXgSsbE/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=fYq5PXgSsbE",
  description: "Master CSS Flexbox layout with ease.",
  channelId: "channel09",
  uploader: "user09",
  views: 39000,
  likes: 2400,
  disLikes: 77,
  uploaddate: "2024-01-15",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video10",
  title: "Build a Weather App using React",
  thumbnailUrl: "https://i.ytimg.com/vi/K5lQ74p0Krk/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=K5lQ74p0Krk",
  description: "Simple React project to build your portfolio.",
  channelId: "channel10",
  uploader: "user10",
  views: 11000,
  likes: 970,
  disLikes: 22,
  uploaddate: "2023-12-10",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video11",
  title: "React Router DOM v6 Tutorial",
  thumbnailUrl: "https://i.ytimg.com/vi/GD6qtc2_AQA/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=GD6qtc2_AQA",
  description: "Understand how routing works in React apps.",
  channelId: "channel11",
  uploader: "user11",
  views: 17000,
  likes: 1400,
  disLikes: 19,
  uploaddate: "2023-11-08",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
},
{
  videoId: "video12",
  title: "Git & GitHub Full Course",
  thumbnailUrl: "https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
  description: "Everything you need to know about Git and GitHub.",
  channelId: "channel12",
  uploader: "user12",
  views: 88000,
  likes: 6700,
  disLikes: 140,
  uploaddate: "2023-10-01",
  comments: [
    {
      commentId: "commentId1",
      userId: "user01",
      text: "Awesome tutorial!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId2",
      userId: "user02",
      text: "Very helpful, thanks!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId3",
      userId: "user03",
      text: "I love Tailwind now!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId4",
      userId: "user04",
      text: "Clear explanation!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId5",
      userId: "user05",
      text: "You earned a sub!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId6",
      userId: "user06",
      text: "Waiting for more content.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId7",
      userId: "user07",
      text: "Exactly what I needed!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId8",
      userId: "user08",
      text: "Amazing visuals and code.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId9",
      userId: "user09",
      text: "Tailwind is powerful!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId10",
      userId: "user10",
      text: "Simple and easy to follow.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId11",
      userId: "user11",
      text: "Liked & shared 🔥",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId12",
      userId: "user12",
      text: "Can you make one on Grid?",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId13",
      userId: "user13",
      text: "Great pacing throughout.",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId14",
      userId: "user14",
      text: "I've bookmarked this!",
      timestamp: "2025-05-13T11:25:39.085Z"
    },
    {
      commentId: "commentId15",
      userId: "user15",
      text: "Thanks a lot, really helped.",
      timestamp: "2025-05-13T11:25:39.085Z"
    }
  ]
}];

const commentSectionData = [{
  commentId: "comment12",
  userId: "user1163",
  text: "quite good video",
  timestamp: "2025-05-18T03:51:58.012Z",
},
{
  commentId: "comment265",
  userId: "user5134",
  text: "keep going broo",
  timestamp: "2025-05-19T07:21:42.790Z",
},
{
  commentId: "comment5246",
  userId: "user2806",
  text: "nice video bhIIII",
  timestamp: "2025-05-19T16:36:02.789Z",
},
{
  commentId: "comment3532",
  userId: "user4847",
  text: "boss tussi great ho",
  timestamp: "2025-05-19T16:43:48.849Z",
},
{
  commentId: "comment4587",
  userId: "user68",
  text: "lalalala",
  timestamp: "2025-05-19T16:43:52.954Z",
}];

dotenv.config();

//seeding the data

const seedDb = async () => {
  try {
    // Optional: clean old data
    await staticVideo.deleteMany();
    await SampleVideo.deleteMany();
    await commentModel.deleteMany();

    // Insert all data in parallel
    await Promise.all([
      staticVideo.insertMany(staticVideosData),
      SampleVideo.insertMany(sampleVideosData),
      commentModel.insertMany(commentSectionData)
    ]);

    console.log("Database seeded successfully.");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.connection.close(); // Close DB connection
  }
};

dbConnect().then(seedDb());

export default seedDb;