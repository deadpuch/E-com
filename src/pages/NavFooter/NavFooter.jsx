import React from "react";
import Nav from "../../component/nav bar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footerBar/Footer";

function NavBar() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default NavBar;
