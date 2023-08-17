import React, { useEffect, useState, useContext } from "react";
import Input from "../components/ww components/Input";
import Weather from "../components/ww components/Weather";
import Loader from "../components/Loader";
import { LoaderVisible } from "../context/LoaderVisible";
import { regEX } from "../utils";

const WorldWeather = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [weather, setWeather] = useState();
  const { isLoading, setIsLoading } = useContext(LoaderVisible);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    valiadateInput(searchedCity);
  }, [searchedCity]);

  const getWeather = async (city) => {
    const res = await fetch(`http://localhost:3003/api/world/${city}`);
    if (res.status === 200) {
      const weather = await res.json();
      setWeather(weather);
      setIsLoading(false);
    } else {
      alert("Wrong request!");
    }
  };

  const valiadateInput = (text) => {
    if (regEX.test(text)) setDisabled(false);
    else setDisabled(true);
  };

  const handleChange = (e) => {
    setSearchedCity(e.target.value);
  };

  const displayLoader = () => {
    setIsLoading(true);
  };

  const handleClick = () => {
    displayLoader();
    getWeather(searchedCity);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <section>
      <Input
        handleChange={handleChange}
        searchedCity={searchedCity}
        handleClick={handleClick}
        disabled={disabled}
      />
      {weather && <Weather weather={weather} />}
    </section>
  );
};

export default WorldWeather;
