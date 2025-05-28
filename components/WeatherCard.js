import React from "react";
import sunny from "url:../assets/Sunny.svg";
import rainy from "url:../assets/Rainy.svg";
import cloudy from "url:../assets/Cloudy.svg";
import partlyCloudy from "url:../assets/PartlyCloudy.svg";

function WeatherCard({ city }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={
            city.forecast === "Sunny"
              ? sunny
              : city.forecast === "Rainy"
              ? rainy
              : city.forecast === "Cloudy"
              ? cloudy
              : partlyCloudy
          }
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{city.name}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

export default WeatherCard;
