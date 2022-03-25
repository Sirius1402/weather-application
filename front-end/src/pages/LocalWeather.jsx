import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";

const LocalWeather = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude, error } = usePosition();

  useEffect(() => {
    if (error) {
      alert("Location not available!");
    } else {
      getWeather(latitude, longitude);
    }
  }, [latitude, longitude, error]);

  const getWeather = async (lat, long) => {
    const res = await fetch(`http://localhost:3003/api/local/${lat}/${long}`);
    if (res.status === 200) {
      const weather = await res.json();
      setWeather(weather);
    } else {
      return;
    }
  };
  // console.log(weather)

  return (
    <section>
      <div className="my-card">
        <h1 data-testid="weather">Local weather</h1>
        <br />
        {weather && (
          <>
            <h4 className="my-card-title">
              Location: {weather.location.name}, {weather.location.country}
            </h4>
            <div className="my-card-body">
              <p>
                Condition: {weather.current.condition.text}{" "}
                <img
                  src={weather.current.condition.icon}
                  alt=""
                  className="image"
                />
              </p>
              <p>
                Temperature: {weather.current.temp_c} {"\u2103"}
              </p>
              <p>
                Feels like: {weather.current.feelslike_c} {"\u2103"}
              </p>
              <p>Air pressure: {weather.current.pressure_mb} mb</p>
              <p>Wind direction: {weather.current.wind_dir}</p>
              <p>Wind speed: {weather.current.wind_kph} km/h</p>
              <p>Gusting speed: {weather.current.gust_kph} km/h</p>
              <p>Visibility: {weather.current.vis_km} km</p>
              <p>Precipitations: {weather.current.precip_mm} mm</p>
              <p>Relative Humidity: {weather.current.humidity} %</p>
              <p>UV index: {weather.current.uv}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LocalWeather;
