import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import FyndLogo from "../images/FyndLogo.png";

function Navbar({ showAdd, onShow }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={FyndLogo}
            style={{ width: "80px", height: "30px" }}
            alt="Navbar"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <a type="button" className="nav-link" onClick={onShow}>
                {showAdd ? <FaMinus /> : <FaPlus />}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
