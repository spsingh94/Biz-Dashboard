import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

function Footer() {
  return (
    <div className="card text-center footer-div">
      <Row>
        <Col md="4">
          <div className="card-body">
            <p className="footer-text webpage-links">Home</p>
            <p className="footer-text webpage-links">About</p>
            <p className="footer-text webpage-links">Finance Tools</p>
            <p className="footer-text webpage-links">Contact Us</p>
          </div>
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
