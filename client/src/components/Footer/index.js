import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

function Footer() {
  return (
    <div class="card text-center footer-div">
      <Row>
        <Col md="4">
          <div class="card-body">
            <p class="footer-text webpage-links">Home</p>
            <p class="footer-text webpage-links">About</p>
            <p class="footer-text webpage-links">Finance Tools</p>
            <p class="footer-text webpage-links">Contact Us</p>
          </div>
        </Col>
        <Col md="8">
          <div class="card-body">
            <p class="footer-text webpage-links">Home</p>
            <p class="footer-text webpage-links">About</p>
            <p class="footer-text webpage-links">Finance Tools</p>
            <p class="footer-text webpage-links">Contact Us</p>
          </div>
        </Col>
      </Row>
      <div class="card-footer text-muted">
        ©2020 Biz-Dash All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
