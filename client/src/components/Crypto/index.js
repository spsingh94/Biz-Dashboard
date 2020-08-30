import React from "react";
import "./style.css";
import $ from "jquery";

function Crypto() {

$("#search-crypto").on("click", function(event) {
    event.preventDefault();
    var crypto = $("#crypto-input").val().toUpperCase();
    var queryURL = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + crypto + "&tsyms=USD,CAD";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(cryptoValue) {
        //How to get the USD/CAD value, for different types of crypto currency?
        //ORDER: Ex: BTC:{BTC:{USD:0.00, CAD:00.00}}
        console.log(cryptoValue[crypto]); //for object within object, put second one in array of FIRST one

        $("#crypto-output").html("Price Per 1 " + crypto + ": $" + cryptoValue[crypto].USD + "(USD)");

    });
});



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
