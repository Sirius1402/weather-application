import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../components/ww components/Input";
import Weather from "../components/ww components/Weather";
import Loader from "../components/Loader";
import { regEX } from "../utils";
import { useInput } from "../hooks/useInput";
import { loader, showLoader } from "../redux/slices/loaderSlice";

const WorldWeather = () => {
  const [searchedCity, resetCity] = useInput("");
  const [weather, setWeather] = useState();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch()
  const loaderVisible = useSelector(loader)
  const {value:city, onChange} = searchedCity

  useEffect(() => {
    dispatch(showLoader(false));
  }, []);

  useEffect(() => {
    valiadateInput(city);
  }, [city]);

  const getWeather = async (city) => {
    const res = await fetch(`/api/world/${city}`);
    if (res.status === 200) {
      const weather = await res.json();
      setWeather(weather);
      dispatch(showLoader(false));
    } else {
      alert("Wrong request!");
    }
  };

  const valiadateInput = (text) => {
    if (regEX.test(text)) setDisabled(false);
    else setDisabled(true);
  };

  const handleChange = (e) => {
    onChange(e);
  };

  const displayLoader = () => {
    dispatch(showLoader(true));
  };

  const handleClick = () => {
    displayLoader();
    getWeather(city);
    resetCity()
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
      {weather && <Weather weather={weather} />}
    </section>
  );
};

export default WorldWeather;
