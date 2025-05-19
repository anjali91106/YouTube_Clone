import { FaHome, FaRegCompass, FaYoutube, FaBookmark, FaHistory } from 'react-icons/fa';
import { MdOutlineVideoLibrary, MdSubscriptions } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: 'Home', isLink: true, to: '/' },
    { icon: <FaRegCompass />, label: 'Explore' },
    { icon: <MdSubscriptions />, label: 'Subscriptions' },
    { icon: <MdOutlineVideoLibrary />, label: 'Library' },
    { icon: <FaHistory />, label: 'History' },
    { icon: <FaBookmark />, label: 'Watch Later' },
    { icon: <FaYoutube />, label: 'Your Videos' },
  ];

  return (
    <aside className="w-60 bg-white h-screen shadow-lg p-4 mt-14">
      <div className="flex flex-col space-y-4">
        {menuItems.map((item, index) =>
          item.isLink ? (
            <Link
              key={index}
              to={item.to}
              className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-lg transition"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ) : (
            <div
              key={index}
              className="flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-lg transition cursor-default"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          )
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
