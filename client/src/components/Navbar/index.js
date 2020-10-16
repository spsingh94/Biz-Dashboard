import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/bizdash.png";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home">
        <img src={logo} className="logo-image" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="locName">Home</p>
            </Link>
          </li>
          <li className="nav-item">
          <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="locName">About</p>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="..."
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <a className="dropdown-item nav-link" href="/stocks">
                Stocks
              </a> */}
              <Link
              to="/stocks"
              className={
                window.location.pathname === "/stocks"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="locName">Stocks</p>
            </Link>
              {/* <a className="dropdown-item nav-link" href="/crypto">
                Crypto Currency
              </a> */}
              <Link
              to="/crypto"
              className={
                window.location.pathname === "/crypto"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="locName">Crypto Currency</p>
            </Link>
              {/* <a className="dropdown-item nav-link" href="/converter">
                Currency Exchange
              </a> */}
              <Link
              to="/converter"
              className={
                window.location.pathname === "/converter"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="locName">Currency Exchange</p>
            </Link>
            </div>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/contact">
              Contact Us
            </a>           */}
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="locName">Contact Us</p>
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
}

export default Navbar;
