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
  const [searchZip, setSearchZip] = useState(null);
  const [searchCity, setSearchCity] = useState(null);
  const [searchState, setSearchState] = useState(null);
  //   const [citySearch, setCitySearch] = useState(null);
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [city, setCity] = useState();
  const [condition, setCondition] = useState();
  const [conditionIcon, setConditionIcon] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
  );

  console.log(searchZip);
  console.log(searchCity);
  console.log(searchState);
  console.log(conditionIcon);

  const zipInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();

  const apiKey = process.env.REACT_APP_WEATHER;

  useEffect(() => {
    if (searchZip != null) {
      var apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${searchZip}&appid=${apiKey}`;
      $.ajax({
        url: apiUrl,
        type: "GET",
      })
        // .then((res) => console.log(res))
        .then((data) => setWeather([data]));
    }
  }, [weather, searchCity, searchState, searchZip, apiKey]);

  useEffect(() => {
    if (searchCity != null && searchState != null) {
      var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity},${searchState}&appid=${apiKey}`;
      $.ajax({
        url: apiUrl,
        type: "GET",
      })
        // .then((res) => console.log(res))
        .then((data) => setWeather([data]));
    }
  }, [weather, searchCity, searchState, searchZip, apiKey]);

  useEffect(() => {
    if (weather != null) {
      setTemp(Math.floor((weather[0].main.temp - 273.15) * 1.8) + 32);
      setHumidity(weather[0].main.humidity);
      setWind(weather[0].wind.speed);
      setWind(
        Math.floor(
          Math.round(((weather[0].wind.speed * 3600) / 1610.3) * 1000) / 1000
        )
      );
      setCity(weather[0].name);
      setCondition(weather[0].weather[0].description);
      setConditionIcon(
        "http://openweathermap.org/img/wn/" +
          weather[0].weather[0].icon +
          "@2x.png"
      );
      setSearchZip(null);
      setSearchCity(null);
      setSearchState(null);
    }
  }, [weather]);

  function referenceZipCode() {
    setSearchZip(zipInputRef.current.value);
  }

  function referenceCityState() {
    setSearchCity(cityInputRef.current.value);
    setSearchState(stateInputRef.current.value);
  }

  return (
    <Container style={{ width: "95%" }}>
      <Row className="search-holder">
        <div className="input-group weather-bar">
          {/* input field */}
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Enter Zip"
            ref={zipInputRef}
          />
        </div>
        <button
          onClick={referenceZipCode}
          id="search-zip"
          type="submit"
          value="Search"
          className="btn weather-search"
        >
          <i class="fa fa-search"></i>
        </button>
        <p className="input-or">|</p>
        <div className="input-group weather-bar">
          {/* input field */}
          <input
            type="text"
            className="form-control"
            id="search-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter City"
            ref={cityInputRef}
          />
        </div>
        <div className="input-group weather-bar">
          {/* input field */}
          <input
            type="text"
            className="form-control"
            id="search-input"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter State"
            ref={stateInputRef}
          />
        </div>
        {/* button */}
        <button
          onClick={referenceCityState}
          id="search-zip"
          type="submit"
          value="Search"
          className="btn weather-search"
        >
          <i class="fa fa-search"></i>
        </button>
      </Row>
      <Row id="weatherDisplay">
        <ul>
          <h2 style={{ paddingTop: "30px" }}>{city}</h2>
          <h5>
            {condition}{" "}
            <img
              src={conditionIcon}
              alt="condition-icon"
              className="condition-icon"
            />
          </h5>
          <ol className="temp-results" id="cityTemp">Temperature: {temp}°F</ol>
          <ol className="temp-results" id="cityHumid">Humidity: {humidity}%</ol>
          <ol className="temp-results" id="cityWindSpeed">Wind Speed: {wind} MPH</ol>
          {/* <ol id="cityUV">UV Index:</ol> */}
        </ul>
      </Row>
    </Container>
  );
}

export default Weather;
