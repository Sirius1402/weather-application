const express = require("express");
require("dotenv").config();
const fetch = require("isomorphic-fetch");

const router = express.Router();
const weatherKey = "36fd80f87b924f1dbf4204838220704";

router.get("/local/:lat&:long", async (req, res) => {
  const lat = req.params.lat;
  const long = req.params.long;
  const local_url = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${lat},${long}&aqi=no`;
  const local_response = await fetch(local_url);
  const local_data = await local_response.json();
  res.json(local_data);
});

router.get("/world/:city", async (req, res) => {
  const city = req.params.city;
  const location_url = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}&aqi=no`;
  const location_response = await fetch(location_url);
  const location_data = await location_response.json();
  res.json(location_data);
});

router.get("/forecast/:city", async (req, res) => {
  const city = req.params.city;
  const forecast_url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${city}&days=7&aqi=no&alerts=yes`;
  const forecast_response = await fetch(forecast_url);
  const forecast_data = await forecast_response.json();
  res.json(forecast_data);
});

module.exports = router;
