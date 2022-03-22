import React from "react";
import moment from "moment";

function HourlyForecast({ handleMouseMv, hourlyForecast }) {
  return (
    <div className="h-forecast" onMouseLeave={handleMouseMv}>
      {hourlyForecast.map((hour) =>
        moment().isAfter(hour.time) ? undefined : (
          <div key={hour.time} className="hgrid-item">
            <p>Time: {hour.time.split(" ")[1]}</p>
            <p>Condition: {hour.condition.text}</p>
            <img src={hour.condition.icon} alt="" />
            <p>
              Temperature: {hour.temp_c} {"\u2103"}
            </p>
            <p>
              Feels like: {hour.feelslike_c} {"\u2103"}
            </p>
            <p>
              Wind: {hour.wind_kph} km/h {hour.wind_dir}
            </p>
            {hour.chance_of_rain > 0 ? (
              <>
                <p>Rain chances: {hour.chance_of_rain} %</p>
              </>
            ) : undefined}
            {hour.chance_of_snow > 0 ? (
              <>
                <p>Snow chances: {hour.chance_of_snow} %</p>
              </>
            ) : undefined}
          </div>
        )
      )}
    </div>
  );
}

export default HourlyForecast;
