import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import fetch from "node-fetch";

function Crypto() {
  const [cryptoCurrency, setCryptoCurrency] = useState();
  const [cryptoData, setCryptoData] = useState();
  const [usd, setUsd] = useState();
  const [coinId, setCoinId] = useState();
  const [name, setName] = useState();
  const [error, setError] = useState("");

  console.log(cryptoData);

  const inputRef = useRef();

  const apiKey = process.env.REACT_APP_CRYPTO;

  useEffect(() => {
    if (cryptoCurrency != null) {
      fetch(
        `https://rest.coinapi.io/v1/assets/${cryptoCurrency}/?apikey=${apiKey}`
      )
        .then((res) => res.json())
        // .then((data) => setCryptoData([data]))

        .then((data) => {
          if (data.length < 1) {
            setError("Error! Please Enter Valid Coin Symbol.");
          } else {
            setCryptoData([data]);
          }
        });
    }
  }, [cryptoCurrency, apiKey]);

  useEffect(() => {
    if (cryptoData != null) {
      setUsd(cryptoData[0][0].price_usd);
      setCoinId(cryptoData[0][0].asset_id);
      setName(cryptoData[0][0].name);
      setError("");
    }
  }, [cryptoData]);

  function cryptoInput() {
    setCryptoCurrency(inputRef.current.value);
  }

  return (
    <div className="container" id="crypto">
      <div className="header">
        <h1
          className="main-headers"
          style={{ color: "white", textAlign: "center" }}
        >
          Coin Value Search
        </h1>
      </div>
      <div className="card">
        <div className="card-body">
          {/* <form id="search" className="container container-fluid form-group"> */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="search-input"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="BTC, ETH, LTC, etc..."
              ref={inputRef}
            />
            <div className="button_holder">
              <button
                onClick={cryptoInput}
                id="search-zip"
                type="submit"
                value="Search"
                className="btn tool-search"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          {/* </form> */}
          <div className="input-group mb-3"></div>
          <label for="crypto-input">Search for a Cryptocurrency</label>
          <table className="table" id="stock-table">
            <thead>
              <tr>
                <th scope="col">Coin ID &emsp; {coinId}</th>
              </tr>
              <tr>
                <th scope="col">Coin Name &emsp; {name}</th>
              </tr>
              <tr>
                <th scope="col">Price in USD &emsp; {usd}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="td1">
                  <div id="crypto-output"></div>
                </td>
              </tr>
          <p id="p-tag">{error}</p>
              <br />
              <p className="common">
                Common Coins: BTC, ETH, LTC, NMC, PPC, AUR, NXT, XEM
              </p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
