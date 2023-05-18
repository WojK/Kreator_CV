import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar} from "../components";
import classes from "./MainLayoutPage.module.css";
import { useLocation } from "react-router-dom";
import MainPageContent from "./MainPageContent";

const MainLayoutPage = () => {
  const location = useLocation();
  return (
    <>
      <div className={classes["div-content"]}>
        <Navbar />
        <Outlet />
        {location.pathname === "/" ? <MainPageContent /> : ""}
      </div>
      <Footer />
    </>
  );
};

export default MainLayoutPage;
