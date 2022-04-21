import React, { useEffect, useState } from "react";
import Input from "../components/forecast components/Input";
import DailyForecast from "../components/forecast components/DailyForecast";
import HourlyForecast from "../components/forecast components/HourlyForecast";
import Loader from "../components/Loader";

const Forecast = ({ isLoading, setIsLoading }) => {
  const [searchedCity, setSearchedCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [yourCity, setYourCity] = useState("");
  const [forecast, setForecast] = useState();
  const [showDailyForecast, setShowDailyForecast] = useState(true);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);

  useEffect(() => {
    for (let i = 0; i < locations.length; i++) {
      if (
        locations[i].name.toLowerCase() ===
        searchedCity.toLowerCase()
      ) {
        setYourCity(locations[i].name);
      }
    }
  }, [locations]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getLocations = async (city) => {
    const res = await fetch(`http://localhost:3003/api/location/${city}`);
    if (res.status === 200) {
      const locations = await res.json();
      setLocations(locations);
    }
  };

  const getForecast = async (city) => {
    const res = await fetch(`http://localhost:3003/api/forecast/${city}`);
    if (res.status === 200) {
      const forecast = await res.json();
      setForecast(forecast);
      setIsLoading(false);
    } else {
      alert("Wrong request!");
    }
  };

  const getHourlyForecast = (date) => {
    for (let i = 0; i < forecast.forecast.forecastday.length; i++) {
      if (date === forecast.forecast.forecastday[i].date) {
        setHourlyForecast(forecast.forecast.forecastday[i].hour);
      }
    }
    return hourlyForecast;
  };

  const displayLoader = () => {
    setIsLoading(true);
  };

  const handleChange = (e) => {
    setSearchedCity(e.target.value);
    getLocations(e.target.value);
  };

  const handleClick = () => {
    displayLoader();
    getForecast(yourCity);
  };

  const handleForecast = () => {
    setShowDailyForecast(false);
    setShowHourlyForecast(true);
  };

  const handleMouseMv = () => {
    setShowDailyForecast(true);
    setShowHourlyForecast(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <section>
      <Input
        handleChange={handleChange}
        searchedCity={searchedCity}
        handleClick={handleClick}
      />
      {forecast && (
        <DailyForecast
          getHourlyForecast={getHourlyForecast}
          handleForecast={handleForecast}
          forecast={forecast}
          showDailyForecast={showDailyForecast}
        />
      )}

      {showHourlyForecast && (
        <HourlyForecast
          handleMouseMv={handleMouseMv}
          hourlyForecast={hourlyForecast}
        />
      )}
    </section>
  );
};

export default Forecast;
