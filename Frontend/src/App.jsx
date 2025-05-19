import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { Home } from "lucide-react";

const App = () => {
  return (
    <>
     <Header/>
     <Routes>
      <Route element={<Home/>} path="/"/>
     </Routes>
     <Outlet/>
    </>
  )
}

export default App;
