import { Fragment, useEffect, useState } from "react";
import axios from "axios";

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

  console.log("Api", Api);
  return (
    <Fragment>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
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
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
            <div style={{ padding: "10px" }}>
              <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
                {video.title}
              </h3>
              <p style={{ fontSize: "14px", margin: "5px 0", color: "#555" }}>
                <strong>Uploader:</strong> {video.uploader}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0", color: "#555" }}>
                <strong>Views:</strong> {video.views.toLocaleString()}
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
