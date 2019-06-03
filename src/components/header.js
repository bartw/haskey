import React from "react";
import { Link } from "gatsby";
import NavBar from "./nav-bar";
import Hamburger from "./hamburger";
import logo from "../haskey.svg";

const Header = () => (
  <header>
    <div className="header_left">
      <Link to="/" className="home_link">
        <div className="header_logo">
          <img src={logo} alt="logo" className="header_logo_img" />
        </div>
      </Link>
    </div>
    <div className="header_nav">
      <div className="desktop_only">
        <NavBar />
      </div>
      <div className="mobile_only">
        <Hamburger>
          <NavBar />
        </Hamburger>
      </div>
    </div>
  </header>
);

export default Header;
