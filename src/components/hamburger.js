import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Hamburger = ({ children }) => (
  <label className="hamburger_toggle">
    <input type="checkbox" style={{ display: "none" }} />
    <div
      className="hamburger_bars"
      style={{ fontSize: "3em", padding: "10px" }}
    >
      <FontAwesomeIcon icon={faBars} />
    </div>
    <div className="hamburger_menu">
      <div className="hamburger_menu_visible">
        <div style={{ fontSize: "3em", padding: "10px" }}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  </label>
);

export default Hamburger;
