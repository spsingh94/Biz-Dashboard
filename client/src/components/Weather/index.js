import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import $ from "jquery";

function Weather() {
  // var mainWeatherDisplay = $("#chosenCity");
  // var cityTemp = $("#cityTemp");
  // var cityHumidity = $("#cityHumid");
  // var cityWind = $("#cityWindSpeed");
  // var uvIndex = $("cityUV");
  // var userZipCode = "";

  const [weather, setWeather] = useState();
  const [zipCode, setZipCode] = useState(null);
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [city, setCity] = useState();
  const [condition, setCondition] = useState();
  const [conditionIcon, setConditionIcon] = useState();

  console.log(zipCode);

  const inputRef = useRef();

  const apiKey = process.env.REACT_APP_WEATHER;

  useEffect(() => {
    if (zipCode != null) {
      // const aiKey= process.env.REACT_APP_WEATHER;
      var apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
      // +
      // `${zipCode}` +
      // ",us" +
      // apiKey2;
      $.ajax({
        url: apiUrl,
        type: "GET",
      })
        // .then((res) => console.log(res))
        .then((data) => setWeather([data]));
    }
  }, [weather, zipCode, apiKey]);

  useEffect(() => {
    if (weather != null) {
      setTemp(Math.floor((weather[0].main.temp - 273.15) * 1.8) + 32);
      setHumidity(weather[0].main.humidity);
      setWind(weather[0].wind.speed);
      //   setWind(Math.floor(weather[0].wind.speed / 1.609344));
      setWind(
        Math.floor(Math.round(((weather[0].wind.speed * 3600) / 1610.3) * 1000) / 1000
      ));
      //   Math.round(meterspersecond * 3600 / 1610.3*1000)/1000
      setCity(weather[0].name);
      setCondition(weather[0].weather[0].description);
      setConditionIcon(weather[0].weather[0].icon);
      setZipCode(null);
    }
  }, [weather]);

  function referenceZipCode() {
    setZipCode(inputRef.current.value);
  }

  return (
    <Container>
      <Row>
        {/* <form id="search" className="container container-fluid form-group"> */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="crypto-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter Zip Code"
            ref={inputRef}
          />
          <div className="button_holder">
            <input
              onClick={referenceZipCode}
              id="search-zip"
              type="submit"
              value="Search"
              className="btn btn-primary"
            />
          </div>
        </div>
        {/* </form> */}
        <Col lg="9">
          <Row id="weatherDisplay">
            <ul>
              <h2>{city}</h2>
              <h5>{condition} <img href={conditionIcon} alt="condition-icon"/></h5>
              <ol id="cityTemp">Temperature: {temp}°F</ol>
              <ol id="cityHumid">Humidity: {humidity}%</ol>
              <ol id="cityWindSpeed">Wind Speed: {wind} MPH</ol>
              {/* <ol id="cityUV">UV Index:</ol> */}
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
