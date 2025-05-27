import React from "react";
import sunny from "../assets/Sunny.svg";

function Location({ data, location, setLocation }) {
  const cityData = data.find((city) => city.city === location);

  if (!cityData) return null;

  const icon =
    cityData.forecast === "Sunny"
      ? sunny
      : cityData.forecast === "Rainy"
      ? rainy
      : cityData.forecast === "Cloudy"
      ? cloudy
      : partlyCloudy;

  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img-top" src={icon} alt="Weather icon" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{cityData.city}</h3>
        <h5 className="card-text">{cityData.temperature}°C</h5>
        <h5 className="card-text">{cityData.forecast}</h5>
      </div>
    </div>
  );
}

export default Location;
