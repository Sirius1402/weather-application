import React from "react";

function Weather({ weather }) {
  const {
    location: { name, country },
    current: {
      condition: { text, icon },
      temp_c,
      feelslike_c,
      pressure_mb,
      wind_dir,
      wind_kph,
      gust_kph,
      vis_km,
      precip_mm,
      humidity,
      uv,
    },
  } = weather;
  return (
    <div className="my-card">
      <h4 className="my-card-title">
        Location: {name}, {country}
      </h4>
      <div className="my-card-body">
        <p>
          Condition: {text} <img src={icon} alt="" className="image" />
        </p>
        <p>
          Temperature: {temp_c} {"\u2103"}
        </p>
        <p>
          Feels like: {feelslike_c} {"\u2103"}
        </p>
        <p>Air pressure: {pressure_mb} mb</p>
        <p>Wind direction: {wind_dir}</p>
        <p>Wind speed: {wind_kph} km/h</p>
        <p>Gusting speed: {gust_kph} km/h</p>
        <p>Visibility: {vis_km} km</p>
        <p>Precipitations: {precip_mm} mm</p>
        <p>Relative Humidity: {humidity} %</p>
        <p>UV index: {uv}</p>
      </div>
    </div>
  );
}

export default Weather;
