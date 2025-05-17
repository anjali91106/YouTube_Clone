
import { useState } from 'react'

const Channel = () => {
  const [isClicked, setIsClicked] = useState(false);
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    
  };

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <div>
       {isClicked ?
        <div>
            <h1>Show Channel alyouts </h1>
       </div> 
       : 
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
       }
    </div>
  );
}

export default Channel
