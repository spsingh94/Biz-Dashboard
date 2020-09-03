import React, {useState} from "react";
import "./style.css";
import fetch from "node-fetch";

function Crypto() {
  const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
  const [cryptoData, setCryptoData] = useState([]);
  console.log(cryptoData);


    function getPrice(event){
      event.preventDefault()
      if(event.target.value == null){
        alert("please enter something");
      } else {        
        fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoCurrency}&tsyms=USD,CAD`)
        .then(res => res.json())
        .then(result => console.log(result))
        .then(data => setCryptoData = data)
      }
      };
      
    function getPrice(event){
      event.preventDefault()
      if(event.target.value == null){
        alert("please enter something");
      } else {        
        fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoCurrency}&tsyms=USD,CAD`)
        .then(res => res.json())
        .then(result => console.log(result))
        .then(data => setCryptoData = data)
      }
      };


  return (
    <div className="container" id="crypto">
      <div className="header">
        <h1>Coin Value Search</h1>
      </div>
      <div className="card">
        <div className="card-body">
          <form id="search" className="container container-fluid form-group">
            <label for="crypto-input">Search for a Cryptocurrency</label>
            <input
              type="text"
              id="crypto-input"
              placeholder="BTC, ETH, LTC, etc..."
            />
            <br />
          </form>
          <br />
          <div className="input-group mb-3"></div>
          <table className="table" id="stock-table">
            <thead>
              <tr>
                <th scope="col">Price in USD &emsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="td1">
                  <div id="crypto-output"></div>
                </td>
              </tr>
              <div className="button_holder">
                <input
                  onClick={getPrice}
                  id="search-crypto"
                  type="submit"
                  value="Search Cryptocurrency"
                  className="btn btn-primary"
                />
              </div>
              <br />
              <p>Common Coins: BTC, ETH, LTC, NMC, PPC, AUR, NXT, XEM,</p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
