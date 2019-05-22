import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../haskey.svg"
import "./reset.css";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <header>
      <div className="header_left">
        <Link to="/" className="home_link">
          <div className="header_logo">
            <img src={logo} alt="logo" className="header_logo_img" />
          </div>
        </Link>
      </div>
      <div className="header_nav">
        <ul className="nav_bar">
          <li className="nav_bar_item">
            <Link to="/" className="nav_bar_item_link" activeClassName="nav_bar_item_link_active">
              HOME
            </Link>
          </li>
          <li className="nav_bar_item">
            <Link to="/trainingen" className="nav_bar_item_link" activeClassName="nav_bar_item_link_active">
              TRAININGEN
            </Link>
          </li>
          <li className="nav_bar_item">
            <Link to="/inschrijvingen" className="nav_bar_item_link" activeClassName="nav_bar_item_link_active">
              INSCHRIJVEN
            </Link>
          </li>
        </ul>
      </div>
    </header>
    <nav>
      <ul className="social_bar">
        <li className="social_bar_item">
          <a className="social_bar_item_link" href="/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="social_bar_item">
          <a className="social_bar_item_link" href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social_bar_item">
          <a className="social_bar_item_link" href="/">
            <FontAwesomeIcon icon={faSnapchat} />
          </a>
        </li>
        <li className="social_bar_item">
          <a className="social_bar_item_link" href="/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
    </nav>
    <main>
      <div className="page">{children}</div>
    </main>
    <footer>
      <div className="footer_text">© 2019 Haskey</div>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
