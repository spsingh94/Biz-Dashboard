import React from "react";
import "./style.css";

function Converter(props) {
  const {
    currencyData,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props;

  // function currencyChange(){

  // }

  return (
    <div className="coverter-table">
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyData.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Converter;
