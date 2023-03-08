import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";
import classes from "./MainLayoutPage.module.css";
import { useLocation } from "react-router-dom";
import MainPageContent from "../components/mainPage/MainPageContent";

const MainLayoutPage = () => {
  const location = useLocation();

  return (
    <>
      <div className={classes["div-content"]}>
        <Navbar />
        {/* <p>location: {location.pathname}</p> */}
        {location.pathname === "/" ? <MainPageContent /> : ""}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayoutPage;
