import React, { useState, useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import cvnavbar from "../../assets/images/cv-navbar.png";


const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
    {/* <img
            src={cvnavbar}
            className="navbar-icon"
            alt="cv-navbar"
          /> */}
      <p
        onClick={(e) => {
          navigate("/creator");
        }}
      >
        <AiFillCaretDown color="#fff" size={20} />
        Creator
      </p>
      <p
        onClick={(e) => {
          navigate("/advices");
        }}
      >
        <AiFillCaretDown color="#fff" size={20} />
        Advices
      </p>
      <p
        onClick={(e) => {
          navigate("/about_us");
        }}
      >
        <AiFillCaretDown color="#fff" size={20} />
        About us
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className="cv__navbar">
      <div
        className="cv__navbar-logo"
        onClick={(e) => {
          navigate("/");
        }}
      >
        <p>
          <img
            src={cvnavbar}
            className="navbar-icon"
            alt="cv-navbar"
          />&nbsp;
          CV CREATOR</p>
      </div>
      <div className="cv__navbar-links">
        <div className="cv__navbar-links_container">
          <Menu />
        </div>

        {isLoggedIn && (
          <div>
            <div className="cv__navbar-account">
              <button
                type="button"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                My account
              </button>
            </div>
          </div>
        )}

        {!isLoggedIn && (
          <div className="cv__navbar-account">
            <button
              type="button"
              onClick={(e) => {
                navigate("/register"); // DODAĆ PÓŹNIEJ
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      <div className="cv__navbar_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="cv__navbar_menu_container scale-up-center">
            <div className="cv__navbar_menu_container-links">
              <Menu />
            </div>

            <div className="cv__navbar_menu_container-account">
              <button type="button">My account</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
