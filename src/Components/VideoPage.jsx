import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const VideoPage = () => {
    const { id } = useParams()
    const [video, setVideo] = useState([]);
   const Api = `http://localhost:8080/videopage/${id}`
   console.log(Api)

   useEffect(() => {
    async function fetchVideoById(){
        try {
        const response = await axios.get(Api);
        setVideo(response.data)
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

  console.log(id)


  return (
   <>
    <h1>{video}</h1>
   </>
  )
}

export default VideoPage
