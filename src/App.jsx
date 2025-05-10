import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
     <Header/>
     <Routes>
      {/* <Route element={<Sidebar/>} path="/"/> */}
     </Routes>
     <Outlet/>
    </>
  )
}

export default App;
