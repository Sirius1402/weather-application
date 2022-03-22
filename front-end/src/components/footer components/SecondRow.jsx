import React from "react";
import styled from "styled-components";

const MyLink = styled.a`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:styledlink,
  &:active {
    text-decoration: none;
  }
`;

function SecondRow() {
  return (
    <div className="footer-2nd">
      <p>
        {" "}
        Powered by{" "}
        <MyLink
          data-testid="anchor-tag"
          href="https://www.weatherapi.com/"
          target="_blank"
          title="Free Weather API"
          rel="noopener noreferrer"
        >
          WeatherAPI.com
        </MyLink>
      </p>
      <p>&copy; Designed by Razvan-Cosmin Ciobanel</p>
    </div>
  );
}

export default SecondRow;
