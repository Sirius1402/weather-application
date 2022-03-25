import React, { useEffect, useState } from "react";
import Input from "../components/ww components/Input";
import Weather from "../components/ww components/Weather";

const WorldWeather = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [locations, setLocations] = useState([]);
  const [yourCity, setYourCity] = useState("");
  const [weather, setWeather] = useState();

  useEffect(() => {
    for (let i = 0; i < locations.length; i++) {
      if (
        locations[i].name.split(",")[0].toLowerCase() ===
        searchedCity.toLowerCase()
      ) {
        setYourCity(locations[i].name.split(",")[0]);
      }
    }
  }, [locations]);

  // console.log(yourCity)

  const getLocations = async (city) => {
    const res = await fetch(`http://localhost:3003/api/location/${city}`);
    if (res.status === 200) {
      const locations = await res.json();
      setLocations(locations);
    } else {
      alert("Please, try another city!");
    }
  };
  // console.log(locations)

  const getWeather = async (city) => {
    const res = await fetch(`http://localhost:3003/api/world/${city}`);
    if (res.status === 200) {
      const weather = await res.json();
      setWeather(weather);
    } else {
      alert("Wrong request!");
    }
  };
  // console.log(weather)

  const handleChange = (e) => {
    setSearchedCity(e.target.value);
    getLocations(e.target.value);
  };

  const handleClick = () => {
    getWeather(yourCity);
  };

  return (
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
