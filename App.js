import React, { useState } from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import cities from "./data.js";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("New York");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} />
      <div className="app">
        {cities.map((city, index) => (
          <WeatherCard key={index} city={city} />
        ))}
        <Location data={cities} location={location} setLocation={setLocation} />
      </div>
    </>
  );
}

export default App;
