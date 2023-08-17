import React from "react";

function Input({ handleChange, searchedCity, handleClick, disabled, handleEnter }) {
  return (
    <div className="ww-card">
      <h1 data-testid="forecast">Forecast</h1>
      <br />
      <label htmlFor="location">Search location: </label>
      <input
        data-testid="input-fcast"
        placeholder="Location Name"
        type="text"
        value={searchedCity}
        onChange={(e) => handleChange(e)}
      />
      <button
        data-testid="btn-fcast"
        onClick={handleClick}
        className="ww-button"
        disabled={disabled}
      >
        Show forecast
      </button>
    </div>
  );
}

export default Input;
