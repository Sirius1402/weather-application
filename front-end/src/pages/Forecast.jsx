import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import moment from 'moment';

const Forecast = () => {

    const [searchedCity, setSearchedCity] = useState('')
    const [locations, setLocations] = useState([])
    const [yourCity, setYourCity] = useState('')
    const [forecast, setForecast] = useState()
    const [showDailyForecast, setShowDailyForecast] = useState(true)
    const [hourlyForecast, setHourlyForecast] = useState([])
    const [showHourlyForecast, setShowHourlyForecast] = useState(false)

    useEffect(() => {
        
        for (let i = 0; i < locations.length; i++) {
            if (locations[i].name.split(",")[0] === searchedCity) {
                setYourCity(locations[i].name.split(",")[0])
            }
        }
       
    }, [locations])

    // console.log(yourCity)

    const getLocations = async (city) => {
        const res = await fetch(
            `https://api.weatherapi.com/v1/search.json?key=d2f438b9e782484b96471500212708&q=${city}`)
        if (res.status === 200) {
            const locations = await res.json()
            setLocations(locations)
        } else {
            alert('Please, try another city!')
        }
    }
    // console.log(locations)

    const getForecast = async (city) => {
        const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=d2f438b9e782484b96471500212708&q=${city}&days=7&aqi=no&alerts=yes`)
        if (res.status === 200) {
            const forecast = await res.json()
            setForecast(forecast)
        } else {
            alert('Wrong request!')
        }
    }
    // console.log(forecast)
    const getHourlyForecast = (date) => {
        for (let i = 0; i < forecast.forecast.forecastday.length; i++) {
            if (date === forecast.forecast.forecastday[i].date) {
                setHourlyForecast(forecast.forecast.forecastday[i].hour)
            }
        }
        return hourlyForecast
    }


    // console.log(hourlyForecast)

    return (
        <section>
            <div className="ww-card">
                <label htmlFor="city">Search city name: {' '}</label>
                <input
                    data-testid="input-fcast"
                    placeholder="City Name"
                    type="text"
                    value={searchedCity}
                    onChange={(e) => { setSearchedCity(e.target.value);
                                       getLocations(e.target.value) }}
                />
                <button
                    data-testid="btn-fcast"
                    onClick={() => getForecast(yourCity)}
                    className="ww-button">Show forecast</button>
            </div>
            {forecast &&
                <div className="my-card">
                    <h4 className="my-card-title">Location: {forecast.location.name}, {forecast.location.country}</h4>
                    <div className="day-grid">
                        {forecast.forecast.forecastday?.map(day =>
                            <div key={day.date} className="dgrid-item">
                                <p>Day: <Moment format="ddd, Do-MMM-YYYY">{day.date}</Moment></p>
                                <button onClick={() => {getHourlyForecast(day.date); 
                                                        setShowDailyForecast(false); 
                                                        setShowHourlyForecast(true)}}
                                    className="ww-button forecast-btn">Show hourly forecast</button>
                                {showDailyForecast &&
                                    <>
                                        <p>Condition: {day.day.condition.text}</p>
                                        <img className="forecast-img" src={day.day.condition.icon} alt="" width="64px" height="64px" />
                                        {day.alerts && <p className="alert">Alerts: {day.alerts.alert[alert.length - 1].event}</p>}
                                        <p>Min. temperature: {day.day.mintemp_c} {'\u2103'}</p>
                                        <p>Max. temperature: {day.day.maxtemp_c} {'\u2103'}</p>
                                        <p>Max. wind speed: {day.day.maxwind_kph} km/h</p>
                                        <p>Average humidity: {day.day.avghumidity} %</p>
                                        <p>UV index: {day.day.uv}</p>
                                        {day.day.daily_will_it_rain === 1 ?
                                            <>
                                                <p>Rain chances: {day.day.daily_chance_of_rain} %</p>
                                                <p>Precipations: {day.day.totalprecip_mm} mm</p>
                                            </>
                                            : undefined}
                                        {day.day.daily_will_it_snow === 1 ?
                                            <>
                                                <p>Snow chances: {day.day.daily_chance_of_snow} %</p>
                                                <p>Precipations: {day.day.totalprecip_mm} mm</p>
                                            </>
                                            : undefined}
                                    </>}
                            </div>)}
                    </div>

                </div>}

            {showHourlyForecast &&
                <div className="h-forecast"
                onMouseLeave={()=>{setShowDailyForecast(true); setShowHourlyForecast(false)}}
                >
                    {hourlyForecast.map((hour) =>
                        moment().isAfter(hour.time) ? undefined : 
                        <div key={hour.time} className="hgrid-item">
                            <p>Time: {hour.time.split(" ")[1]}</p>
                            <p>Condition: {hour.condition.text}</p>
                            <img src={hour.condition.icon} alt="" />
                            <p>Temperature: {hour.temp_c} {'\u2103'}</p>
                            <p>Feels like: {hour.feelslike_c} {'\u2103'}</p>
                            <p>Wind: {hour.wind_kph} km/h {hour.wind_dir}</p>
                            {hour.chance_of_rain > 0 ?
                                <>
                                    <p>Rain chances: {hour.chance_of_rain} %</p>
                                </> : undefined}
                            {hour.chance_of_snow > 0 ?
                                <>
                                    <p>Snow chances: {hour.chance_of_snow} %</p>
                                </> : undefined}
                        </div>)}
                </div>}
        </section>
    )
}

export default Forecast
