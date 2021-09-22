import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:StyledLink, &:active {
        text-decoration: none;
    }
`;

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-li">
                    <StyledLink to="/" replace>Home</StyledLink>
                </li>
                <li className="nav-li">
                    <StyledLink to="/present-weather" replace>Present Weather</StyledLink>
                </li>
                <li className="nav-li">
                    <StyledLink to="/forecast" replace>Forecast</StyledLink>
                </li>
                <li className="nav-li">
                    <StyledLink to="/world-weather" replace>World-wide weathher</StyledLink>
                </li>
            </ul>            
        </nav>
    )
}

export default Navbar
