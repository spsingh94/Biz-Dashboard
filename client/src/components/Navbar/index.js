import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/home">
        Work Books
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link
            to="/home"
            className={
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <p className="nav-link">Home</p>
          </Link>
          <Link
            to="/about"
            className={
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <p className="nav-link">About</p>
          </Link>
          <Link
            to="/tools"
            className={
              window.location.pathname === "/tools"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <p className="nav-link">Tools</p>
          </Link>
          <Link
            to="/crypto"
            className={
              window.location.pathname === "/crypto"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <p className="nav-link">Crypto</p>
          </Link>
          <Link
            to="/stocks"
            className={
              window.location.pathname === "/stocks"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <p className="nav-link">Stocks</p>
          </Link>
          <Link
            to="/converter"
            className={
              window.location.pathname === "/converter"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <p className="nav-link">Converter</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
