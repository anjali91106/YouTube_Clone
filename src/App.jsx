import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import VideoPage from "./Components/VideoPage";

const App = () => {
  return (
    <>
     <Header/>
     <Routes>
      {/* <Route element={<VideoPage/>} path="/videopage/:id"/> */}
     </Routes>
     <Outlet/>
    </>
  )
}

export default App;
