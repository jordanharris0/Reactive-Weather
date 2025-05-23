import React from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import cities from "./data.js";

function App() {
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((city, index) => (
          <WeatherCard key={index} city={city} />
        ))}
      </div>
    </>
  );
}

export default App;
