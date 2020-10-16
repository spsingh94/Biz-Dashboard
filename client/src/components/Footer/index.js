import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../images/bizdash.png";
import "./style.css";

function Footer() {
  return (
    <div className="card text-center footer-div">
      <Row>
        <Col md="4">
        <img src={logo} className="logo-image" alt="logo" style={{marginTop:"60px"}}/>
        </Col>
        <Col md="3">
        </Col>
        <Col md="2">
          {/* <div className="card-body">
            <p className="footer-text webpage-links">Home</p>
            <p className="footer-text webpage-links">Finance Tools</p>
            <p className="footer-text webpage-links">Contact Us</p>
          </div>
           */}
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
              <p className="foot-loc">Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/stocks"
              className={
                window.location.pathname === "/stocks"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="foot-loc">Stocks</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/crypto"
              className={
                window.location.pathname === "/crypto"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="foot-loc">Crypto Currency</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/converter"
              className={
                window.location.pathname === "/converter"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="foot-loc">Currency Exchange</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <p className="foot-loc">Contact Us</p>
            </Link>
          </li>
        </ul>
        </Col>
        <Col md="1">
        </Col>
      </Row>
      <div className="card-footer text-muted">
        ©2020 Biz-Dash All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
