# Weather Application - My Weatther

This is a weather website made with ReactJS and powered by [WeatherAPI.com](https://www.weatherapi.com/). It provides data for local weather, daily and hourly forecast and world-wide weather.

It is served by an ExpressJS backend build by me.

The website is responsive at 401 pixels, break point. 

For testing the application I have used React Testing Library and Mock Service Worker, to mock API calls.

After you clone the project, to start it, follow the instructions:
- To start the backend, write in the terminal: `cd back-end`, `npm install`, `node server`
- To start the front end: open in a new window "front-end" folder and write in the terminal:`npm install` and `npm start`.

The website has four pages: Home, Local Weather, Forecast and World-Wide Weather.


## Home Page
It is a short description of the website

![ Home Page ](https://raw.github.com/Sirius1402/weather-application/main/front-end/printscreens/home.jpg)   

---

## Local Weather
To get the local weather, I used the user IP as query selector, to call the API.

![Local Weather](https://raw.github.com/Sirius1402/weather-application/main/front-end/printscreens/localWeather.jpg) 

---
## Forecast
On this page the user can search for a location and he will get the forecast for 3 days and hourly for each day. The hourly forecast is displayed only after the 'Show hourly forecast' button is pushed.
![Daily Forecast](https://raw.github.com/Sirius1402/weather-application/main/front-end/printscreens/dailyForecast.jpg)

---
![Hourly Forecast](https://raw.github.com/Sirius1402/weather-application/main/front-end/printscreens/hourlyForecast.jpg)

---

## World-Wide Weather
On this page the user can search for a location and get the present weather at that location.

![World-Wide Weather](https://raw.github.com/Sirius1402/weather-application/main/front-end/printscreens/worldWideWeather.jpg)