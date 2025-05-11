import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const SignIn = ({setIsUser}) => {
    const [user, setUser] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        setIsUser(user);
    }
  return (
    <Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube Logo"
              className="h-10 mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
            <p className="text-sm text-gray-600 mb-6">to continue to YouTube</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email or phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="User-Name"
              onChange={(e) => {setUser(e.target.value)}}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Link to="/">
               <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Sign in
            </button>
            </Link>
          </form>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Need help?
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Create account
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
