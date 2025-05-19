import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from "../utils";


const SignIn = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Api = 'http://localhost:8080/user/signup';

  // form subbmission 
  async function handleSubmit(e) {
    e.preventDefault(); 

    // making new user
    const newUser = {
      email: email,
      username: usernameInput,
      password: password,
    };

    // ck=hecking all the important fileds are ther

    if(!email || !usernameInput || !password){
      return handleError('username, email and password is required to signUp!')
    }

    try {
      // sending the new user into database using api
      const res = await axios.post(Api, newUser);
      // console.log(res.data)
      handleSuccess(res.data.message)

      setTimeout(() => {
        navigate("/login")
      }, 2000);
    } catch (err) {
      handleError(err);
    }
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
            <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            <p className="text-sm text-gray-600 mb-6">to continue to YouTube</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email or phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="User-Name"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
              >
                signUp
              </button>
              <h1 className="m-2">If Already have an Account login</h1>
              <Link to="/login" className="p-2 mr-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition">login</Link>
          </form>

          <ToastContainer/>

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
