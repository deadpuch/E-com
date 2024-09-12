import React from "react";
import Login from "../component/login page/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/home page/Home";
import NavFooter from "../pages/NavFooter/NavFooter";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path="/*" element={<NavFooter />}>
          <Route path="Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
