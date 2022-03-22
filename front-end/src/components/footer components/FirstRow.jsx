import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
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

function FirstRow() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <MyLink href={`mailto:${email}${params}`}>{children}</MyLink>;
  };
  return (
    <div>
      <ul className="footer-nav">
        <li className="footer-li">
          <StyledLink to="/" replace>
            Home
          </StyledLink>
        </li>
        <li className="footer-li">
          <StyledLink to="/local-weather" replace>
            Local Weather
          </StyledLink>
        </li>
        <li className="footer-li">
          <StyledLink to="/forecast" replace>
            Forecast
          </StyledLink>
        </li>
        <li className="footer-li">
          <StyledLink to="/world-weather" replace>
            World-Wide Weather
          </StyledLink>
        </li>
        <li className="footer-li">
          <Mailto
            data-testid="email"
            email="razvanciobanel@protonmail.com"
            title="razvanciobanel@protonmail.com"
            subject=""
            body=""
          >
            Contact
          </Mailto>
        </li>
      </ul>
    </div>
  );
}

export default FirstRow;
