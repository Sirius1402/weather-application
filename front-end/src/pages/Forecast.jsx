import React, { useEffect, useState, useContext } from "react";

import Input from "../components/forecast components/Input";
import DailyForecast from "../components/forecast components/DailyForecast";
import HourlyForecast from "../components/forecast components/HourlyForecast";
import Loader from "../components/Loader";
import { LoaderVisible } from "../context/LoaderVisible";
import { regEX } from "../utils";
import { useInput } from "../hooks/useInput";

const Forecast = () => {
  const [searchedCity, resetCity] = useInput("");
  const [forecast, setForecast] = useState();
  const [showDailyForecast, setShowDailyForecast] = useState(true);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoaderVisible);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    valiadateInput(searchedCity.value);
  }, [searchedCity.value]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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

  const valiadateInput = (text) => {
    if (regEX.test(text)) setDisabled(false);
    else setDisabled(true);
  };

  const displayLoader = () => {
    setIsLoading(true);
  };

  const handleChange = (e) => {
    searchedCity.onChange(e)
  };

  const handleClick = () => {
    displayLoader();
    getForecast(searchedCity.value)
    resetCity()
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
        searchedCity={searchedCity.value}
        handleClick={handleClick}
        disabled={disabled}

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
