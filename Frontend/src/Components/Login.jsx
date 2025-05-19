import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleSuccess, handleError } from "../utils";
import {ToastContainer} from 'react-toastify'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Api = "http://localhost:8080/user/login";

  async function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    if(!email || !password){
          return handleError('username, email and password is required to signUp!')
        }

    try {
      const res = await axios.post(Api, newUser);
      //taking the token from the response 
      const jwtToken = res.data.token;
      const username = res.data.username;
      handleSuccess(res.data.message)
      
      //saving the token and username into localstorage 
      localStorage.setItem('token', jwtToken);
      localStorage.setItem('loggedInUser', username)
      
      //navigating to home page after successfully login
      setTimeout(() => {
        navigate("/")
      }, 1000);
    } catch (err) {
      console.error("Login error", err);
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
            <h2 className="text-2xl font-semibold mb-2">Log In</h2>
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
                login
              </button>

              <h1 className="m-2">If Dosen't have an Account login</h1>
              <Link to="/signup" className="p-2 mr-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition">signUp</Link>
           
          </form>

          <ToastContainer/>

        </div>
      </div>
    </Fragment>
  );
};

export default Login;
