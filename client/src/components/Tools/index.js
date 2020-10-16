import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import stocks from "../../images/stocksimage.jpg";
import exchange from "../../images/exchangeimage.jpg";
import crypto from "../../images/cryptoimage.jpg";

export function Tools() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Container>
        <h4 className="main-headers" style={{ textAlign: "center" }}>Tools</h4>
        <Row>
          <Col sm="4">
            {/* <div className="card" style={{ width: "160px" }}> */}
            <div className="card">
              <a href="/stocks">
              <img
                src={stocks}
                className="card-img-top tool-image"
                alt="stocks"
                style={{ cursor: "pointer" }}
              />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Stocks - Check daily stock prices by inputting the stock code
                  that you wish to view.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="4">
            {/* <div className="card" style={{ width: "160px" }}> */}
            <div className="card">
              <a href="/converter">
              <img
                src={exchange}
                className="card-img-top tool-image"
                alt="stocks"
                style={{ cursor: "pointer" }}
              />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Currency Converter - Find out what the exhchange rate is of
                  your currency instantly.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="4">
            {/* <div className="card" style={{ width: "160px" }}> */}
            <div className="card">
              <a href="/crypto">
              <img
                src={crypto}
                className="card-img-top tool-image"
                alt="stocks"
                style={{ cursor: "pointer" }}
              />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Crypto Currency - Check the current price of all
                  cryptocurrencies with the currency code.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
