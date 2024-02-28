import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
    <Header/>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
