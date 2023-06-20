import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarMd.css";
import Contact from "../Contact/Contact";
import { Icon } from "../../Constant/iconPath";
import { FaBeer } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(true);
  const HandleClose = () => {
    setOpenNavbar(true);
  };
  return (
    <>
      <div className="Navbar">
        <div className="navbar_left_logo">
          <img src={Icon.MAIN_LOGO} alt="" className="Main_logo" />
        </div>
        <div className="navbar_Right_item">
          <div className="navbar_Right_item_top">
            <Contact />
          </div>
          <div className={openNavbar ? "NavBar_links" : "Mobile_Navbar"}>
            <ul className="Navigation_links">
              <li>
                <Link to="home" spy={true} onClick={HandleClose}>
                  HOME
                </Link>
              </li>

              <li>
                <Link to="about" spy={true} onClick={HandleClose}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="shop" spy={true} onClick={HandleClose}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link to="Contact" spy={true} onClick={HandleClose}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="faq" spy={true} onClick={HandleClose}>
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="search-icon-container">
              <svg
                id="search"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  id="Rectangle_12"
                  data-name="Rectangle 12"
                  width="24"
                  height="24"
                  fill="#202020"
                  opacity="0"
                />
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M20.71,19.29l-3.4-3.39A7.92,7.92,0,0,0,19,11a8,8,0,1,0-8,8,7.92,7.92,0,0,0,4.9-1.69l3.39,3.4a1,1,0,1,0,1.42-1.42ZM5,11a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z"
                  fill="#202020"
                />
              </svg>
            </div>
            {/* <div className=" Hamburger_Navbar_white">
              <img src={Icon.Navbar_logo} alt="" className="Three_line_white" />
            </div> */}
          </div>
          <div className="Menu_button_container">
            <div
              className="Open_Bar"
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              {openNavbar ? (
                <img
                  src={Icon.Navbar_logo2}
                  alt=""
                  className=" Hamburger_Menu"
                />
              ) : (
                <img src={Icon.Close_Logo} alt="" className="Hamburger_Menu close_Menu" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
