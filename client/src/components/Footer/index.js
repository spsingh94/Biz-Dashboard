import React from "react";
import { Row, Col } from "reactstrap";
import logo from "../../images/bizdash.png";
import "./style.css";

function Footer() {
  return (
    <div className="card text-center footer-div">
      <Row>
        <Col md="4">
        <img src={logo} className="logo-image" alt="logo" style={{marginTop:"60px"}}/>
        </Col>
        <Col md="8">
          <div className="card-body">
            <p className="footer-text webpage-links">Home</p>
            <p className="footer-text webpage-links">About</p>
            <p className="footer-text webpage-links">Finance Tools</p>
            <p className="footer-text webpage-links">Contact Us</p>
          </div>
        </Col>
      </Row>
      <div className="card-footer text-muted">
        ©2020 Biz-Dash All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
