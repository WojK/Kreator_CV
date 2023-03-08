import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, Login, Register } from "../components";
import classes from "./MainLayoutPage.module.css";
import { useLocation } from "react-router-dom";

const MainLayoutPage = () => {
  const location = useLocation();
  return (
    <>
      <div className={classes["div-content"]}>
        <Navbar />
        <Outlet />
        {location.pathname === "/my_account" ? <Login /> : ""}
        {location.pathname === "/my_account" ? <Register /> : ""}
      </div>
      <Footer />
    </>
  );
};

export default MainLayoutPage;
