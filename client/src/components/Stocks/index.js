import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";
import "./style.css";

function Stocks(props) {
  const [symbol, setSymbol] = useState();
  const [stock, setStock] = useState();
  const [stockSymbol, setStockSymbol] = useState();
  const [open, setOpen] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
  const [close, setClose] = useState();
  const [previousClose, setPreviousClose] = useState();

  console.log(stock);
  console.log(stockSymbol);

  const inputRef = useRef();

  //set up api key
  const apiKey = process.env.REACT_APP_STOCKS;

  var today = new Date();

  var currentDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    today.getDate();
  var previousDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    (today.getDate() - 1);

  console.log(currentDate);
  console.log(previousDate);

  useEffect(() => {
    if (symbol != null) {
      fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            // throw new Error(setStockError("Please Enter Valid Stock Symbol"))
            throw new Error(alert("Please Enter Valid Stock Symbol"));
          }
        })
        .then((data) => setStock([data]))
        .catch((error) => console.log(error));
    }
  }, [symbol, apiKey]);

  useEffect(() => {
    if (stock != null) {
      setStockSymbol(stock[0]["Meta Data"]["2. Symbol"]);
      setOpen(stock[0]["Time Series (Daily)"][currentDate]["1. open"]);
      setHigh(stock[0]["Time Series (Daily)"][currentDate]["2. high"]);
      setLow(stock[0]["Time Series (Daily)"][currentDate]["3. low"]);
      setClose(stock[0]["Time Series (Daily)"][currentDate]["4. close"]);
      setPreviousClose(
        stock[0]["Time Series (Daily)"][previousDate]["1. open"]
      );
    }
  }, [stock, currentDate, previousDate]);

  function updateSymbol() {
    setSymbol(inputRef.current.value);
  }

  return (
    <div className="container" id="stock">
      <div className="card">
        <div className="header">
          <h1> Stock Search</h1>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="stock-input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter Symbol to Search"
              ref={inputRef}
            />
          </div>
          <button className="btn" id="stock-search" onClick={updateSymbol}>
            Display Stock Information
          </button>
          <table className="table" id="stock-table">
            <thead>
              <tr>
                <th scope="col">Symbol &emsp;</th>
                <th scope="col">Open &emsp;</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Close</th>
                <th scope="col">Previous Close</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="symbol">{stockSymbol}</td>
                <td id="price" value="">
                  {open}
                </td>
                <td id="high" value="">
                  {high}
                </td>
                <td id="low" value="">
                  {low}
                </td>
                <td id="y-close" value="">
                  {close}
                </td>
                <td id="y-close" value="">
                  {previousClose}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p id="p-tag"></p>
    </div>
  );
}

export default Stocks;
