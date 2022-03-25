const express = require("express");
require("dotenv").config();
const fetch = require("isomorphic-fetch");

const router = express.Router();
const key = "d2f438b9e782484b96471500212708";

router.get("/local/:lat/:long", async (req, res) => {
  console.log("params: ", req.params)
  const lat = req.params.lat;
  const long = req.params.long
  const local_url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${long}&aqi=no`;
  const local_response = await fetch(local_url);
  const local_data = await local_response.json();
  res.json(local_data);
});

router.get("/location/:city", async (req, res) => {
  const city = req.params.city;
  const location_url = `https://api.weatherapi.com/v1/search.json?key=${key}&q=${city}`;
  const location_response = await fetch(location_url);
  const location_data = await location_response.json();
  res.json(location_data);
});

router.get("/world/:city", async (req, res) => {
  const city = req.params.city;
  const location_url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  const location_response = await fetch(location_url);
  const location_data = await location_response.json();
  res.json(location_data);
});

router.get("/forecast/:city", async (req, res) => {
    const city = req.params.city
    const location_url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=yes`
    const location_response = await fetch(location_url);
    const location_data = await location_response.json();
    res.json(location_data);
})

module.exports = router;
