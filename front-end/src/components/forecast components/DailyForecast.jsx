import React from "react";
import Moment from "react-moment";

function DailyForecast({
  getHourlyForecast,
  handleForecast,
  forecast,
  showDailyForecast,
}) {
  return (
    <div className="my-card">
      <h4 className="my-card-title">
        Location: {forecast.location.name}, {forecast.location.country}
      </h4>
      <div className="day-grid">
        {forecast.forecast.forecastday?.map((day) => (
          <div key={day.date} className="dgrid-item">
            <p>
              Day: <Moment format="ddd, Do-MMM-YYYY">{day.date}</Moment>
            </p>
            <button
              onClick={() => {
                getHourlyForecast(day.date);
                handleForecast();
              }}
              className="ww-button forecast-btn"
            >
              Show hourly forecast
            </button>
            {showDailyForecast && (
              <>
                <p>Condition: {day.day.condition.text}</p>
                <img
                  className="forecast-img"
                  src={day.day.condition.icon}
                  alt=""
                  width="64px"
                  height="64px"
                />
                {day.alerts && (
                  <p className="alert">
                    Alerts: {day.alerts.alert[alert.length - 1].event}
                  </p>
                )}
                <p>
                  Min. temperature: {day.day.mintemp_c} {"\u2103"}
                </p>
                <p>
                  Max. temperature: {day.day.maxtemp_c} {"\u2103"}
                </p>
                <p>Max. wind speed: {day.day.maxwind_kph} km/h</p>
                <p>Average humidity: {day.day.avghumidity} %</p>
                <p>UV index: {day.day.uv}</p>
                {day.day.daily_will_it_rain === 1 ? (
                  <>
                    <p>Rain chances: {day.day.daily_chance_of_rain} %</p>
                    <p>Precipations: {day.day.totalprecip_mm} mm</p>
                  </>
                ) : undefined}
                {day.day.daily_will_it_snow === 1 ? (
                  <>
                    <p>Snow chances: {day.day.daily_chance_of_snow} %</p>
                    <p>Precipations: {day.day.totalprecip_mm} mm</p>
                  </>
                ) : undefined}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
