import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";
import "./style.css";

function Stocks(props) {
  const [symbol, setSymbol] = useState();
  const [stock, setStock] = useState();
  const [stockSymbol, setStockSymbol] = useState();
  const [lastRefreshDate, setLastRefreshDate] = useState();
  const [open, setOpen] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
  const [close, setClose] = useState();
  const [error, setError] = useState("");
  // const [previousClose, setPreviousClose] = useState();

  console.log(stock);
  console.log(stockSymbol);
  console.log(lastRefreshDate);
  console.log(error);

  const inputRef = useRef();

  //set up api key
  const apiKey = process.env.REACT_APP_STOCKS;

  var today = new Date();

  var previousDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + (today.getDate() - 1)).slice(-2);

  console.log(previousDate);

  useEffect(() => {
    if (symbol != null) {
      fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
      )
        .then((response) => response.json())
        // .then((data) => {
        //   if(data !== error) {
        //     setStock([data])
        //   }
        //   else {
        //     setStock("error")
        //   }
        // })
        // .then((data) => {
        //   if (!data.ok) {
        //     setError(true);
        //   } else {
        //     setStock([data]);
        //   }
        // })
        .then((data) => {
          if(data["Error Message"]) {
            setError("Error! Please Enter Valid Stock Symbol.")
          } else {
            setStock([data])
          }
        });
    }
  }, [symbol, apiKey]);

  useEffect(() => {
    if (stock != null) {
      setLastRefreshDate(stock[0]["Meta Data"]["3. Last Refreshed"]);
      setError("");
    } 
  }, [stock, error]);
  
  useEffect(() => {
    if (lastRefreshDate != null) {
      setStockSymbol(stock[0]["Meta Data"]["2. Symbol"]);
      setOpen(stock[0]["Time Series (Daily)"][lastRefreshDate]["1. open"]);
      setHigh(stock[0]["Time Series (Daily)"][lastRefreshDate]["2. high"]);
      setLow(stock[0]["Time Series (Daily)"][lastRefreshDate]["3. low"]);
      setClose(stock[0]["Time Series (Daily)"][lastRefreshDate]["4. close"]);
      setStock(null);
      setLastRefreshDate(null);
      setError("");
    }
  }, [lastRefreshDate, stock]);

  function updateSymbol() {
    setSymbol(inputRef.current.value);
  }

  return (
    <div className="container" id="stock">
      <h1
        className="main-headers"
        style={{ color: "white", textAlign: "center" }}
      >
        {" "}
        Stock Search
      </h1>
      <div className="card">
        <div className="header"></div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="search-input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter Symbol to Search"
              ref={inputRef}
            />
            <button
              onClick={updateSymbol}
              id="search-zip"
              type="submit"
              value="Search"
              className="btn tool-search"
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
          Display Stock Information
          <table className="table" id="stock-table">
            <thead>
              <tr>
                <th scope="col">Symbol &emsp;</th>
                <th scope="col">Open &emsp;</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Close</th>
                {/* <th scope="col">Previous Close</th> */}
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
                {/* <td id="y-close" value="">
                  {previousClose}
                </td> */}
              </tr>
            </tbody>
          </table>
      <p id="p-tag">{error}</p>
          <p className="common">
            Common Stocks: Microsoft (MSFT), Nvidia (NVDA), Apple (AAPL), Intel
            (INTC), PayPal (PYPL), Adobe (ADBE), AT&amp;T (T), Visa (V), Etsy
            (ETSY), Ford (F)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
