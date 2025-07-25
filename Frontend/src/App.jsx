import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = () => {

  const Header = lazy(() => import('./Components/Header'))
  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
       <Header/>
        <Outlet/>
    </Suspense>
    
    </>
  )
}

export default App;
