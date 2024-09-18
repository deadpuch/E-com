import React from "react";
import Login from "../component/login page/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/home page/Home";
import NavFooter from "../pages/NavFooter/NavFooter";
import Cart from "../component/cart/cart";
import Singlepage from "../pages/single/singlepage";
import Catpage from "../pages/CatPage/Catpage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path="/*" element={<NavFooter />}>
        
          <Route path="Home" element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Singlepage/:id" element={<Singlepage />} />
          <Route path="Catpage/:category" element={<Catpage />} />

         

          </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
