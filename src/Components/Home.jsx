import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import FilterButtons from "./FilterButtons";
import { Link } from 'react-router-dom';

const Home = () => {
  const [videos, setVideos] = useState([])
  let Api = "http://localhost:8080/videos";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(Api);
        setVideos(response.data)
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  console.log("Videos data:", videos);

  console.log("Api", Api);
  return (
    <Fragment>
      <FilterButtons/>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-evenly" }}>
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              fontFamily: "sans-serif",
            }}
          >
           <div className="w-auto h-auto">
             <iframe
              width="100%"
              height="315"
              src={video.videoUrl?.replace("watch?v=", "embed/")}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
           </div>
            <div style={{ padding: "10px" }}>
              <Link to={`/videopage/${video._id}`}>
               <h3 style={{ fontSize: "18px", margin: "10px 0" }} className="hover:text-blue-950 hover:underline">
                {video.title}
              </h3>
              </Link>
              <p style={{ fontSize: "14px", margin: "5px 0", color: "#555" }}>
                <strong>Uploader:</strong> {video.uploader}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0", color: "#555" }}>
                <strong>Views:</strong> {video.views?.toLocaleString()}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0", color: "#555" }}>
                <strong>Uploaded on:</strong> {video.uploadDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
