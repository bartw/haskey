import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default ({ children }) => (
  <label className="hamburger_toggle">
    <input type="checkbox" style={{ display: "none" }} />
    <div
      className="hamburger_bars"
      style={{ fontSize: "3em", padding: "10px" }}
    >
      <FontAwesomeIcon icon={faBars} fixedWidth />
    </div>
    <div className="hamburger_menu">
      <div className="hamburger_menu_visible">
        <div style={{ fontSize: "3em", padding: "10px" }}>
          <FontAwesomeIcon icon={faTimes} fixedWidth />
        </div>
        <div>{children}</div>
      </div>
    </div>
  </label>
);
