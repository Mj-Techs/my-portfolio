import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("About");
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/") {
      setActive("About");
    } else if (history.location.pathname === "/resume") {
      setActive("Resume");
    } else if (history.location.pathname === "/projects") {
      setActive("Projects");
    }
  }, [active, history.location.pathname]);

  return (
    <div className="navbar">
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" && (
          <Link to="/resume">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
