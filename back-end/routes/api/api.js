const express = require("express");
require("dotenv").config();
const fetch = require("isomorphic-fetch");

const router = express.Router();
const weatherKey = process.env.W_KEY;
const ipKey =  process.env.IP_KEY

router.get("/ip", async (req, res) => {
  const ip_url = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipKey}`
  const ip_response = await fetch(ip_url)
  const ip_data = await ip_response.json()
  res.json(ip_data)
})

router.get("/local/:ip", async (req, res) => {
  const ip = req.params.ip
  const local_url = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${ip}&aqi=no`;
  const local_response = await fetch(local_url);
  const local_data = await local_response.json();
  res.json(local_data);
});

router.get("/location/:city", async (req, res) => {
  const city = req.params.city;
  const location_url = `https://api.weatherapi.com/v1/search.json?key=${weatherKey}&q=${city}`;
  const location_response = await fetch(location_url);
  const location_data = await location_response.json();
  res.json(location_data);
});

router.get("/world/:city", async (req, res) => {
  const city = req.params.city;
  const location_url = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}&aqi=no`;
  const location_response = await fetch(location_url);
  const location_data = await location_response.json();
  res.json(location_data);
});

router.get("/forecast/:city", async (req, res) => {
    const city = req.params.city
    const location_url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${city}&days=7&aqi=no&alerts=yes`
    const location_response = await fetch(location_url);
    const location_data = await location_response.json();
    res.json(location_data);
})

module.exports = router;
