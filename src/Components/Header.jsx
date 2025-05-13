import { useEffect, useState } from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName] = useState('Hello'); // If this won't change, no need for setState

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-60 z-40 shadow-lg bg-white transition-all duration-300">
          <Sidebar />
        </div>
      )}

      <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
        {/* Left section: Menu + Logo */}
        <div className="flex items-center space-x-2">
          <button onClick={toggleSidebar} className="hover:bg-gray-200 rounded-full p-1">
            <Menu className="h-7 cursor-pointer" />
          </button>

          <Link to="/" className="flex items-center space-x-1">
            <div className="w-[32px] h-[24px] bg-red-600 rounded-[4px] flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-[1px]" />
            </div>
            <span className="text-xl font-bold text-gray-800 font-sans">YouTube</span>
          </Link>
        </div>

        {/* Center section: Search */}
        <SearchBar/>

        <div className="flex items-center space-x-4 text-gray-600">
          <Link to="/signin" className="flex items-center space-x-1 hover:underline">
            <span>Sign In</span>
            <span>{userName}</span>
          </Link>
          <User size={20} className="cursor-pointer" />
        </div>
      </header>
    </>
  );
}

const SearchBar = () => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log("Something is searched")
  },[search])

  return (
    <>
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
    </>
  )
}


export default Header;
