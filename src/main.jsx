import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home.jsx'
import SignIn from './Components/SignIn.jsx'
import VideoPage from './Components/VideoPage.jsx'
import Channel from './Components/Channel.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
      path: "/",
      element: <Home/>
      },{
        path: "/signin",
        element: <SignIn/>
      },{
        path: "/videopage/:id",
        element: <VideoPage/>
      },{
        path: "/channelpage",
        element: <Channel/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
