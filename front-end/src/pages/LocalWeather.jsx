import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
// import { loader, showLoader } from "../redux/slices/loaderSlice";
import { LoaderVisible } from "../context/LoaderVisible";

const LocalWeather = () => {
  const dispatch = useDispatch()
  const [weather, setWeather] = useState();
  const { isLoading, setIsLoading, lat, long } = useContext(LoaderVisible);

  // useEffect(() => {
  //   getWeather(lat, long);
  // }, [lat, long]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getWeather = async (lat, long) => {
    if (lat && long) {
      const res = await fetch(`http://localhost:3003/api/local/${lat}&${long}`);
      if (res.status === 200) {
        const weather = await res.json();
        setWeather(weather);
        setIsLoading(false);
      } else {
        return;
      }
    } else {
      const res = await fetch("http://localhost:3003/api/local/london");
      if (res.status === 200) {
        const weather = await res.json();
        setWeather(weather);
        setIsLoading(false);
      } else {
        return;
      }
    }
  };
  console.log("Weather :", weather);

  return isLoading ? (
    <Loader />
  ) : (
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
