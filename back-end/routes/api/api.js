import config from 'dotenv';
import { Router } from 'express';
import _fetch from 'isomorphic-fetch';

const router = Router();
const weatherKey = "36fd80f87b924f1dbf4204838220704";

router.get("/local/:lat&:long", async (req, res) => {
  const {params:{lat, long}} = req
  const local_url = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${lat},${long}&aqi=no`;
  const local_response = await _fetch(local_url);
  const local_data = await local_response.json();
  res.json(local_data);
});

router.get("/world/:city", async (req, res) => {
  const {params:{city}} = req
  const location_url = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}&aqi=no`;
  const location_response = await _fetch(location_url);
  const location_data = await location_response.json();
  res.json(location_data);
});

router.get("/forecast/:city", async (req, res) => {
  const {params:{city}} = req
  const forecast_url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${city}&days=7&aqi=no&alerts=yes`;
  const forecast_response = await _fetch(forecast_url);
  const forecast_data = await forecast_response.json();
  res.json(forecast_data);
});

export default router
