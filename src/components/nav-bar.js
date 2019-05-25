import React from "react";
import { Link } from "gatsby";

const NavBar = () => (
  <ul className="nav_bar">
    <li className="nav_bar_item">
      <Link
        to="/"
        className="nav_bar_item_link"
        activeClassName="nav_bar_item_link_active"
      >
        HOME
      </Link>
    </li>
    <li className="nav_bar_item">
      <Link
        to="/trainingen/"
        className="nav_bar_item_link"
        activeClassName="nav_bar_item_link_active"
      >
        TRAININGEN
      </Link>
    </li>
    <li className="nav_bar_item">
      <Link
        to="/proberen/"
        className="nav_bar_item_link"
        activeClassName="nav_bar_item_link_active"
      >
        PROBEREN
      </Link>
    </li>
    <li className="nav_bar_item">
      <Link
        to="/inschrijvingen/"
        className="nav_bar_item_link"
        activeClassName="nav_bar_item_link_active"
      >
        INSCHRIJVEN
      </Link>
    </li>
  </ul>
);

export default NavBar;
