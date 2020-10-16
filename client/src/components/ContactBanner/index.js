import React from "react";
import banner from "../../images/bizdashimage.jpg";
import { Container, Col, Row } from "reactstrap";
import "./style.css";

function ContactBanner() {
  return (
      <Container>
        <div className="banner-holder">
          <img src={banner} alt="banner" className="banner"></img>
        </div>
        <h1
          className="webpage-links"
          style={{ color: "white", textAlign: "center" }}
        >
          Contact Us
        </h1>
        <Row style={{justifyContent:"center"}}>
          <i className="fa fa-facebook contact-icons"></i>
          <i className="fa fa-instagram contact-icons"></i>
          <i className="fa fa-google contact-icons"></i>
        </Row>
      </Container>
  );
}

export default ContactBanner;
