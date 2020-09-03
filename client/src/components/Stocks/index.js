import React, { useState, useEffect, useRef } from "react";
import fetch from "node-fetch";
import "./style.css";

function Stocks(props) {
//   const { onChangeSymbol, setReference } = props;
  //set up state for symbol because that will change based on user input
  const [symbol, setSymbol] = useState();
  const [stock, setStock] = useState();
  console.log(stock);
  console.log(symbol);

  const inputRef = useRef();

  //set up api key
  const apiKey = process.env.REACT_APP_STOCKS;

  //set up dataurl
  const dataURL = `http://api.marketstack.com/v1/eod?access_key=${apiKey}`;

  //useeffect to update symbols as needed
  useEffect(() => {
    if (symbol != null) {
      fetch(`${dataURL}&symbols=${symbol}`)
      .then((res) => res.json())
        .then((data) => setStock([data]));
    }
  }, [dataURL, symbol]);

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
                <th scope="col">Name &emsp;</th>
                <th scope="col">Price &emsp;</th>
                <th scope="col">Today's Change</th>
                <th scope="col">At Close Yesterday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="td1"></td>
                <td id="td2"></td>
                <td id="td3"></td>
                <td id="td4"></td>
                <td id="td5"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
