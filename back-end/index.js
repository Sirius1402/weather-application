require('dotenv').config({path:'.env'})
const fetch = require('isomorphic-fetch')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3050
const path = require('path')
      bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 2000,
    max: 1
})

app.use(limiter)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../weather-application/build')))
app.use(cors());

app.get('/api/presentweather/Latitude,Longitude', async (req, res)=>{
    try {
        const response = await fetch(`${presWeatherURL}&q=${req.params.Latitude},${req.params.Longitude}&aqi=no`)
        const data = await response.json()
        return res.json(data)
    }catch (err){
        return { Error: err.stack}
    }
    
})
    


var presWeatherURL =  `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}`

var locationsURL = 
`https://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API_KEY}`

var wwWeatherURL = 
`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}`

var forecastURL = 
`https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}`

app.listen(port, ()=>console.log('Back-end running'))