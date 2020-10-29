import React from "react";
import banner from "../../images/bizdashimage.jpg";
import { Container, Row } from "reactstrap";
import "./style.css";

function ContactBanner() {
  return (
      <Container>
        <div className="banner-holder">
          <img src={banner} alt="banner" className="banner"></img>
        </div>
        <h1
          className="main-headers"
          style={{ fontSize:"70px", color: "white", textAlign: "center" }}
        >
          Contact Us
        </h1>
        <Row style={{justifyContent:"center"}}>
          <a href="https://www.hello.com">
          <i className="fa fa-facebook contact-icons"></i>
          </a>
          <a href="https://www.hello.com">
          <i className="fa fa-instagram contact-icons"></i>
          </a>
          <a href="https://www.hello.com">
          <i className="fa fa-google contact-icons"></i>
          </a>
        </Row>
      </Container>
  );
}

export default ContactBanner;
