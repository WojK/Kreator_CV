import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import classes from "./MainLayoutPage.module.css";

const MainLayoutPage = () => {
  return (
    <>
      <div className={classes["div-content"]}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayoutPage;
