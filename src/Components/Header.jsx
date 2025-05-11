import { Fragment, useState } from 'react';
import { Search, User, Menu} from 'lucide-react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default function YouTubeHeader() {
  const [search, setSearch] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isUser, setIsUser] = useState("hello");

  function handleClick() {
    setIsClicked(prev => !prev);
    console.log("Button is Clicked")
  }

  return (
    <Fragment>
       {/* Sidebar */}
          {isClicked && (
            <div className="fixed top-0 left-0 h-full w-60 z-40 shadow-lg bg-white">
              <Sidebar />
            </div>
          )}

      <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        {/* Menu bar start */}
        <span onClick={handleClick}>
          <Menu className="h-7 rounded-full hover:bg-gray-200 cursor-pointer" />
        </span>
        {/* Menu bar start End */}

        {/* Logo start here */}
        <div className="w-[32px] h-[24px] bg-red-600 rounded-[4px] flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-[1px]"></div>
        </div>

        <span className="text-xl font-bold text-gray-800 font-sans">YouTube</span>
      </div>

      {/* Logo start here */}

      {/* Search start */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="flex border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-1 outline-none text-sm"
          />
          <button className="bg-gray-100 px-4 flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>
      </div>

       {/* Search End */}

      {/* Icons */}
      <div className="flex items-center space-x-4 text-gray-600">
         <Link to="/signin" setIsUser={setIsUser}>SignIn <h2>{isUser}</h2></Link>
        <User size={20} className="cursor-pointer" />
      </div>
    </header>
    </Fragment>

    
  );
}
