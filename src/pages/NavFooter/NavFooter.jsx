import React from "react";
import Nav from "../../component/nav bar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/footer";

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
