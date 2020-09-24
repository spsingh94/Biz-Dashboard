import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";
import "./style.css";

function Stocks(props) {
  //   const { onChangeSymbol, setReference } = props;
  //set up state for symbol because that will change based on user input
  const [symbol, setSymbol] = useState();
  const [stock, setStock] = useState();
  const [stockSymbol, setStockSymbol] = useState();
  // const [stockError, setStockError] = useState();
  const [stockPrice, setStockPrice] = useState();
  const [stockTodayHigh, setStockTodayHigh] = useState();
  const [stockTodayLow, setStockTodayLow] = useState();
  const [stockClose, setStockClose] = useState();


  console.log(stock);
  // console.log(symbol);
  // console.log(stock);

  const inputRef = useRef();

  //set up api key
  const apiKey = process.env.REACT_APP_STOCKS;

  //set up dataurl
  const dataURL = `http://api.marketstack.com/v1/eod?access_key=${apiKey}`;

  //useeffect to update symbols as needed
  useEffect(() => {
    if (symbol != null) {
      fetch(`${dataURL}&symbols=${symbol}`)
        .then((response) => {  
          if (response.ok) {
          return response.json();
        } else {
          // throw new Error(setStockError("Please Enter Valid Stock Symbol"))
          throw new Error(alert("Please Enter Valid Stock Symbol"))
        }
      })
        .then((data) => setStock([data]))
        .catch((error) => console.log(error))
    }
  }, [dataURL, symbol]);

  useEffect(() => {
    if (stock != null) {
      setStockSymbol(stock[0].data[0].symbol);
      setStockPrice(stock[0].data[0].close);
      setStockTodayHigh(stock[0].data[0].adj_high);
      setStockTodayLow(stock[0].data[0].adj_low);
      setStockClose(stock[0].data[1].close);
    }
  }, [stock]);

  // useEffect(() => {
  //   if (stockSymbol[0].error) {
  //     setStockPrice("hi");
  //   }
  // }, [stockSymbol]);

  //if stock equals valid stock

  //set up function that sets symbol based off of user input
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
                {/* <th scope="col">Name &emsp;</th> */}
                <th scope="col">Price &emsp;</th>
                <th scope="col">Today's High</th>
                <th scope="col">Today's Low</th>
                <th scope="col">At Close Yesterday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="symbol">{stockSymbol}</td>
                {/* <td id="name"></td> */}
                <td id="price" value="">
                  {stockPrice}
                </td>
                <td id="high" value="">
                  {stockTodayHigh}
                </td>
                <td id="low" value="">
                  {stockTodayLow}
                </td>
                <td id="y-close" value="">
                  {stockClose}
                </td>
              </tr>
              {/* <tr>
                <td id="y-close" value="">
                  {stockError}
                </td>            
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <p id="p-tag"></p>
    </div>
  );
}

export default Stocks;
