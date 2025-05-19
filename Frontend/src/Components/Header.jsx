import { useEffect, useState } from "react";
import { Search, User, Menu, BadgePlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");

  //authenticating after user is logged in
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
    console.log(loggedInUser);
  }, []);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  //handle logout user
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    handleSuccess("User logged out");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-60 z-40 shadow-lg bg-white transition-all duration-300">
          <Sidebar />
        </div>
      )}

      <header className="flex flex-col md:flex-row md:items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50 gap-2">
        {/* Top Row: Menu + Logo */}
        <div className="flex items-center justify-between md:justify-start space-x-2 w-full md:w-auto">
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-200 rounded-full p-1"
          >
            <Menu className="h-7 cursor-pointer" />
          </button>

          <Link to="/" className="flex items-center space-x-1">
            <div className="w-[32px] h-[24px] bg-red-600 rounded-[4px] flex items-center justify-center">
              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white ml-[1px]" />
            </div>
            <span className="text-xl font-bold text-gray-800 font-sans">
              YouTube
            </span>
          </Link>
        </div>

        {/* Middle Row: Search bar (takes full width on small screens) */}
        <div className="w-full md:w-auto">
          <SearchBar />
        </div>

        {/* Right Row: User options */}
        <div className="flex flex-col md:flex-row md:items-center justify-end space-y-2 md:space-y-0 md:space-x-4 text-gray-600 w-full md:w-auto">
          {!loggedInUser && (
            <button
              onClick={() => navigate("/signin")}
              className="hover:underline"
            >
              Sign Up
            </button>
          )}

          {loggedInUser && (
            <div className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-1 md:space-y-0">
              <Link
                className="flex items-center space-x-1 hover:underline"
                to="/channelpage"
              >
                <h2>Create</h2>
                <BadgePlus />
              </Link>
              <button onClick={handleLogout} className="hover:underline">
                LogOut
              </button>
            </div>
          )}

          <div className="flex items-center space-x-1">
            <User size={20} className="cursor-pointer" />
            <h1 className="text-sm break-all">{loggedInUser}</h1>
          </div>
        </div>
      </header>

      <ToastContainer />
    </>
  );
};

//search bar but its not working right now !!

const SearchBar = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Something is searched");
  }, [search]);

  return (
    <div className="w-full md:max-w-xl">
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
  );
};


export default Header;
