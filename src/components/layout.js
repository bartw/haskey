import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-royal-900${expanded ? " overflow-hidden" : ""}`}>
      <div className="relative max-w-screen-xl min-h-screen mx-auto bg-royal-100 text-royal-900">
        <nav className="overflow-x-hidden">
          {expanded && (
            <div className="absolute z-10 w-full h-screen bg-royal-500 text-royal-100">
              <button
                type="button"
                aria-label="close-menu-button"
                className="absolute text-4xl right-0 top-0"
                onClick={() => setExpanded(false)}
              >
                <FontAwesomeIcon icon={faTimes} fixedWidth />
              </button>
              <ul className="flex flex-col h-full items-center justify-center text-lg">
                <li className="mb-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/trainingen">Trainingen</Link>
                </li>
                <li className="mb-4">
                  <Link to="/proberen">Proberen</Link>
                </li>
                <li className="mb-4">
                  <Link to="/inschrijven">Inschrijven</Link>
                </li>
                <li className="mb-4">
                  <Link to="/club">Club</Link>
                </li>
              </ul>
            </div>
          )}
          {!expanded && (
            <div
              className="absolute right-0 top-0 bg-royal-500 text-royal-100"
              style={{
                width: "75px",
                height: "75px",
                borderRadius: "0 0 0 75px",
              }}
            >
              <button
                type="button"
                aria-label="open-menu-button"
                className="absolute right-0 top-0 text-4xl"
                onClick={() => setExpanded(true)}
              >
                <FontAwesomeIcon icon={faBars} fixedWidth />
              </button>
            </div>
          )}
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Layout;
