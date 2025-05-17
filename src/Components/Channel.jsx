import axios from "axios";
import { useEffect, useState } from "react";

const Channel = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    channelName: "",
    description: "",
    category: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setName(formData.channelName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      {isClicked ? (
        // showing the channel page when the form is subbmited
        <div>
          <ChannelVideos name={name}/>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
              Create Your YouTube Channel
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Channel Name
                </label>
                <input
                  type="text"
                  name="channelName"
                  value={formData.channelName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Education">Education</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Vlogs">Vlogs</option>
                  <option value="Music">Music</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Profile Image
                </label>
                <input
                  type="file"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                onClick={handleClick}
              >
                Create Channel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

//creating a channel page 

export const ChannelVideos = ({name}) => {
  const [staticVideo, setStaticVideo] = useState([]);
  const Api = "http://localhost:8080/staticVideo";

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
    <div className="bg-white min-h-screen p-4">
      {/* Channel Header */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6 border-b pb-4">
        <img
          src="https://yt3.ggpht.com/youtube-channel-placeholder" // optional: channel banner or logo
          alt="Channel Banner"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <div>
        <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-600">896K subscribers</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {staticVideo.map((video, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300"
          >
            <img
              src={video.imageUrl}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="font-semibold text-lg">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.uploader}</p>
              <p className="text-sm text-gray-400">{video.uploaddate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
