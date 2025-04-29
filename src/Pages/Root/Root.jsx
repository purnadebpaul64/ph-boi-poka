import React from "react";
import NavBar from "../../Components/Header/NavBar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
