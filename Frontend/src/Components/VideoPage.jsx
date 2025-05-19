import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState([]);
  const Api = `http://localhost:8080/videopage/${id}`;
 
  // fetching the video that is clicked by its id and showing its data
  useEffect(() => {
    async function fetchVideoById() {
      try {
        const response = await axios.get(Api);
        setVideo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchVideoById();
  }, [id]);

  if (!video) {
    return <p>Loading video...</p>;
  }


  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        {/* Main video and details section */}
        <div className="w-full lg:w-3/4 p-4">
          <div className="w-full aspect-video mb-4">
            <iframe
              className="w-full h-full rounded"
              src={video.videoUrl?.replace("watch?v=", "embed/")}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Uploader:</strong> {video.uploader}
          </p>
          <p className="text-sm text-gray-700 mb-1">
            <strong>Views:</strong> {video.views}
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>Uploaded on:</strong> {video.uploadDate}
          </p>  
        {/* showing all the comments */}

          <Comments/>
          
        </div>

        {/* Sidebar suggested videos */}
        <StaticVideo />
      </div>
    </div>
  );
};

// side videos for better looking UI they are static dose not play

export function StaticVideo() {
  const [staticVideo, setStaticVideo] = useState([]);
  const Api = "http://localhost:8080/staticVideo";

  // fetching the already added video from the database
  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await axios.get(Api);
        setStaticVideo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchVideo();
  }, []);

  return (
    <div className="w-full lg:w-1/4 p-4 space-y-4">
      <h2 className="font-semibold mb-2">Up next</h2>
      {staticVideo.map((vid, index) => (
        <div
          key={index}
          className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
        >
          <img
            src={vid.imageUrl}
            alt={`Video Url`}
            className="w-28 h-16 object-cover rounded"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium line-clamp-2">{vid.title}</p>
            <span className="text-xs text-gray-600">{vid.uploader}</span>
            <span className="text-xs text-gray-600">{vid.uploadDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoPage;
