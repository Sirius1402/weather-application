import React, { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/forecast components/Input";
import DailyForecast from "../components/forecast components/DailyForecast";
import HourlyForecast from "../components/forecast components/HourlyForecast";
import Loader from "../components/Loader";
import { regEX } from "../utils";
import { useInput } from "../hooks/useInput";
import { loader, showLoader } from "../redux/slices/loaderSlice";

const Forecast = () => {
  const [searchedCity, resetCity] = useInput("");
  const [forecast, setForecast] = useState();
  const [showDailyForecast, setShowDailyForecast] = useState(true);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const loaderVisible = useSelector(loader);
  const { value: city, onChange } = searchedCity;
  const { forecast: { forecastday } = {} } = forecast || {};

  useEffect(() => {
    valiadateInput(city);
  }, [city]);

  useEffect(() => {
    dispatch(showLoader(false));
  }, []);

  const getForecast = async (city) => {
    const res = await fetch(`/api/forecast/${city}`);
    if (res.status === 200) {
      const forecast = await res.json();
      setForecast(forecast);
      dispatch(showLoader(false));
    } else {
      alert("Wrong request!");
    }
  };

  const getHourlyForecast = (date) => {
    for (let i = 0; i < forecastday.length; i++) {
      if (date === forecastday[i].date) {
        setHourlyForecast(forecastday[i].hour);
      }
    }
    return hourlyForecast;
  };

  const valiadateInput = (text) => {
    if (regEX.test(text)) setDisabled(false);
    else setDisabled(true);
  };

  const displayLoader = () => {
    dispatch(showLoader(true));
  };

  const handleChange = (e) => {
    onChange(e);
  };

  const handleClick = () => {
    displayLoader();
    getForecast(city);
    resetCity();
  };

  const handleForecast = () => {
    setShowDailyForecast(false);
    setShowHourlyForecast(true);
  };

  const handleMouseMv = () => {
    setShowDailyForecast(true);
    setShowHourlyForecast(false);
  };

  return loaderVisible ? (
    <Loader />
  ) : (
    <section>
      <Input
        handleChange={handleChange}
        searchedCity={city}
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
