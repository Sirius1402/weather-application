import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';

const Forecast = () => {

    const [city, setCity] = useState('')
    const [locations, setLocations] = useState([])
    const [yourCity, setYourCity] = useState('')
    const [forecast, setForecast] = useState()

    useEffect(() => {
        for (let i = 0; i < locations.length; i++) {
            if (locations[i].name.split(",")[0] === city) {
                setYourCity(locations[i].name.split(",")[0])
            }
        }
    }, [locations])

    console.log(yourCity)

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
    console.log(locations)

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
    console.log(forecast)

    return (
        <>
            <div className="ww-card">
                <label htmlFor="city">Search city name: {' '}</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); getLocations(e.target.value) }}
                />
                <button
                    onClick={() => getForecast(yourCity)}
                    className="ww-button">Show Forecast</button>
            </div>
            {forecast &&
                <div className="my-card">
                    <h4 className="my-card-title">Location: {forecast.location.name}</h4>
                    <div className="day-grid">
                        {forecast.forecast.forecastday.map(day=>
                            <div key={day.date} className="dgrid-item">
                            <p>Day: <Moment format="ddd, Do-MMM-YYYY">{day.date}</Moment></p>
                            <p>Condition: {day.day.condition.text}</p>
                            <img src={day.day.condition.icon} alt="" width="64px" height="64px"/>
                            {day.alerts && <p className="alert">Alerts: {day.alerts.alert[alert.length-1].event}</p> }
                            <p>Min. temperature: {day.day.mintemp_c} {'\u2103'}</p>
                            <p>Max. temperature: {day.day.maxtemp_c} {'\u2103'}</p>
                            <p>Max. wind speed: {day.day.maxwind_kph} km/h</p>
                            <p>Average humidity: {day.day.avghumidity} %</p>
                            <p>UV index: {day.day.uv}</p>
                            {day.daily_will_it_rain && <p> Rain chances: {day.daily_chance_of_rain}</p>}
                            {day.daily_will_it_snow && <p>Snow chances: {day.daily_chance_of_snow}</p>}
                            </div>)}
                    </div>
                </div>}
        </>
    )
}

export default Forecast
