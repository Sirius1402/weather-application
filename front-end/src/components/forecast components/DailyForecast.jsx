import React from "react";
import Moment from "react-moment";

function DailyForecast({
  getHourlyForecast,
  handleForecast,
  forecast,
  showDailyForecast,
}) {
  const {
    location: { name, country },
    forecast: { forecastday },
  } = forecast;
  return (
    <div className="my-card">
      <h4 className="my-card-title">
        Location: {name}, {country}
      </h4>
      <div className="day-grid">
        {forecastday?.map((day) => {
          const {
            date,
            day: {
              condition: { text, icon },
              mintemp_c,
              maxtemp_c,
              maxwind_kph,
              avghumidity,
              uv,
              daily_will_it_rain,
              daily_chance_of_rain,
              totalprecip_mm,
              daily_will_it_snow,
              daily_chance_of_snow
            },
            alerts,
            alerts: { alert = [] } = {},
          } = day || {};
          return (
            <div key={date} className="dgrid-item">
              <p>
                Day: <Moment format="ddd, Do-MMM-YYYY">{date}</Moment>
              </p>
              <button
                onClick={() => {
                  getHourlyForecast(date);
                  handleForecast();
                }}
                className="ww-button forecast-btn"
              >
                Show hourly forecast
              </button>
              {showDailyForecast && (
                <>
                  <p>Condition: {text}</p>
                  <img
                    className="forecast-img"
                    src={icon}
                    alt=""
                    width="64px"
                    height="64px"
                  />
                  {alerts && (
                    <p className="alert">
                      Alerts: {alert[alert.length - 1].event}
                    </p>
                  )}
                  <p>
                    Min. temperature: {mintemp_c} {"\u2103"}
                  </p>
                  <p>
                    Max. temperature: {maxtemp_c} {"\u2103"}
                  </p>
                  <p>Max. wind speed: {maxwind_kph} km/h</p>
                  <p>Average humidity: {avghumidity} %</p>
                  <p>UV index: {uv}</p>
                  {daily_will_it_rain === 1 ? (
                    <>
                      <p>Rain chances: {daily_chance_of_rain} %</p>
                      <p>Precipations: {totalprecip_mm} mm</p>
                    </>
                  ) : undefined}
                  {daily_will_it_snow === 1 ? (
                    <>
                      <p>Snow chances: {daily_chance_of_snow} %</p>
                      <p>Precipations: {totalprecip_mm} mm</p>
                    </>
                  ) : undefined}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
