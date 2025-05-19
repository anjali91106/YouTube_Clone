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
                  onChange={()=>{setIsClicked(true)}}
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
                onClick={()=>{setIsClicked(true)}}
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

  const fetchVideo = async () => {
  try {
    const response = await axios.get(Api);
    setStaticVideo(response.data);
    console.log(response.data[0]._id, "staticVideo")
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
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
        <h1>{name}</h1>
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
              <div className="flex gap-2 mt-2">
                <UpdateVideo videoId={video._id} video={video} onUpdate={fetchVideo}/>
                <DeleteVideo videoId={video._id} onDelete={fetchVideo} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//updating a video 

export const UpdateVideo = ({ videoId, onUpdate, video }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(video.title);
  const updateApi = `http://localhost:8080/staticVideo/${videoId}`;

  const handleSave = async () => {
    try {
      await axios.put(updateApi, { ...video, title: updatedTitle });
      console.log("Updated successfully");
      setIsUpdate(false);
      onUpdate(); // re-fetch videos
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return isUpdate ? (
    <>
      <input
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        className="border p-1 rounded text-sm"
      />
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700"
      >
        Save
      </button>
    </>
  ) : (
    <button
      onClick={() => setIsUpdate(true)}
      className="bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700"
    >
      Edit
    </button>
  );
}; 

//deleting a video

export const DeleteVideo = ({ videoId, onDelete }) => {
  const deleteApi = `http://localhost:8080/staticVideo/${videoId}`;

  const handleDelete = async () => {
    try {
      await axios.delete(deleteApi);
      console.log("Deleted successfully");
      onDelete(); // re-fetch videos
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-2 py-1 rounded text-sm hover:bg-red-700"
    >
      Delete
    </button>
  );
};


export default Channel;
