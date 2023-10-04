import React from "react";
import moment from "moment";

function HourlyForecast({ handleMouseMv, hourlyForecast }) {
  return (
    <div className="h-forecast" onMouseLeave={handleMouseMv}>
      {hourlyForecast.map((hour) => {
        const {
          time,
          condition: { text, icon },
          temp_c,
          feelslike_c,
          wind_kph,
          wind_dir,
          chance_of_rain,
          chance_of_snow,
        } = hour;
        if (moment().isBefore(time)) {
          return (
            <div key={time} className="hgrid-item">
              <p>Time: {time.split(" ")[1]}</p>
              <p>Condition: {text}</p>
              <img src={icon} alt="" />
              <p>
                Temperature: {temp_c} {"\u2103"}
              </p>
              <p>
                Feels like: {feelslike_c} {"\u2103"}
              </p>
              <p>
                Wind: {wind_kph} km/h {wind_dir}
              </p>
              {chance_of_rain > 0 ? (
                <>
                  <p>Rain chances: {chance_of_rain} %</p>
                </>
              ) : undefined}
              {chance_of_snow > 0 ? (
                <>
                  <p>Snow chances: {chance_of_snow} %</p>
                </>
              ) : undefined}
            </div>
          );
        } else return undefined;
      })}
    </div>
  );
}

export default HourlyForecast;
