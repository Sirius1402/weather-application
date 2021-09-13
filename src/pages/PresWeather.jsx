import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position';

const PresWeather = () => {

    const [weather, setWeather] = useState()
    const [lat, setLat] = useState()
    const [long, setLong] = useState()
    const {
        latitude,
        longitude,
        error,
    } = usePosition();

    useEffect(() => {
        if (error) {
            alert('Location not available!')
        } else {
            setLat(latitude)
            setLong(longitude)
        }
    }, [latitude, longitude, error])

   

    const getWeather = async (Latitude, Longitude) => {
        const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=d2f438b9e782484b96471500212708&q=${Latitude},${Longitude}&aqi=no`)
        if (res.status === 200) {
            const weather = await res.json()
            setWeather(weather)
        } else {
            alert('Wrong request!')
        }
    }
    console.log(weather)

    return (
        <section>
            <button className="my-btn"
            onClick={() => getWeather(lat, long)}
            >Show present weather</button>
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
        </section>
    )
}

export default PresWeather
