import React, { useEffect, useState } from 'react'

const WorldWeather = () => {

    const [city, setCity] = useState('')
    const [locations, setLocations] = useState([])
    const [yourCity, setYourCity] = useState('')
    const [weather, setWeather] = useState()
    
    useEffect(()=>{
        for (let i=0; i<locations.length; i++){
            if(locations[i].name.split(",")[0] === city){
                setYourCity(locations[i].name.split(",")[0])
            }
        }
    },[locations])

    console.log(yourCity)

    const getLocations = async (city)=>{
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
    
        const getWeather = async (city) => {
            const res = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=d2f438b9e782484b96471500212708&q=${city}&aqi=no`)
            if (res.status === 200) {
                const weather = await res.json()
                setWeather(weather)
            } else {
                alert('Wrong request!')
            }
        }
        console.log(weather)

    return (
        <>
        <div className="ww-card">
            <label htmlFor="city">Search city name: {' '}</label>
            <input
            type="text"
            value={city}
            onChange={(e)=>{setCity(e.target.value) ; getLocations(e.target.value)}}
            />
            <button 
            onClick={()=>getWeather(yourCity)}
            className="ww-button">Show weather</button>
        </div>
        {weather &&
                <div className="my-card">
                    <h4 className="my-card-title">Location: {weather.location.name}</h4>
                    <div className="my-card-body">
                        <p>Condition: {weather.current.condition.text} {' '}
                            <img src={weather.current.condition.icon} alt="" className="image" />
                        </p>
                        <p>Temperature: {weather.current.temp_c} {'\u2103'}</p>
                        <p>Feels like: {weather.current.feelslike_c} {'\u2103'}</p>
                        <p>Air pressure: {weather.current.pressure_mb} mb</p>
                        <p>Wind direction: {weather.current.wind_dir}</p>
                        <p>Wind speed: {weather.current.wind_kph} km/h</p>
                        <p>Gusting speed: {weather.current.gust_kph} km/h</p>
                        <p>Visibility: {weather.current.vis_km} km</p>
                        <p>Precipitations: {weather.current.precip_mm} mm</p>
                        <p>Relative Humidity: {weather.current.humidity} %</p>
                        <p>UV index: {weather.current.uv}</p>
                    </div>
                </div>}
        </>
    )
}

export default WorldWeather
