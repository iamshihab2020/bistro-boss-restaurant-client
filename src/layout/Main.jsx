import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navbar from "../pages/Shared/Navbar/Navbar"

const Main = () => {
  const location = useLocation();
  const isLogSignUp = location.pathname.includes("login") || location.pathname.includes("register");

  return (
    <div>

      { isLogSignUp || <Navbar/>}
      <Outlet />
      {isLogSignUp || <Footer/>}
    </div>
  )
}

export default Main