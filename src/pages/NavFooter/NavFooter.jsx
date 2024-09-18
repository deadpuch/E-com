import React from "react";
import Nav from "../../component/nav bar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footerBar/Footer";
import './NFContainer.css'

function NavBar() {
  return (
    <>
      <div className="NFContainer ">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default NavBar;
