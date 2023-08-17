import React from "react";

function Input({ handleChange, searchedCity, handleClick, disabled }) {
  return (
    <div className="ww-card">
      <h1 data-testid="wWeather">World-wide weather</h1>
      <br />
      <label htmlFor="location">Search location: </label>
      <input
        data-testid="input"
        placeholder="Location Name"
        type="text"
        value={searchedCity}
        onChange={(e) => handleChange(e)}
      />
      <button
        data-testid="ww-button"
        onClick={handleClick}
        className="ww-button"
        disabled={disabled}
      >
        Show weather
      </button>
    </div>
  );
}

export default Input;
