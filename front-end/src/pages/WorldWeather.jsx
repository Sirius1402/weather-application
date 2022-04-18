import React, { useEffect, useState } from "react";
import Input from "../components/ww components/Input";
import Weather from "../components/ww components/Weather";
import Loader from "../components/Loader";

const WorldWeather = ({ isLoading, setIsLoading }) => {
  const [searchedCity, setSearchedCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [yourCity, setYourCity] = useState("");
  const [weather, setWeather] = useState();

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

  const handleChange = (e) => {
    setSearchedCity(e.target.value);
    getLocations(e.target.value);
  };

  const displayLoader = () => {
    setIsLoading(true);
  };

  const handleClick = () => {
    displayLoader();
    getWeather(yourCity);
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
      {weather && <Weather weather={weather} />}
    </section>
  );
};

export default WorldWeather;
