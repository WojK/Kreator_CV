import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const MainLayoutPage = () => {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
};

export default MainLayoutPage;
