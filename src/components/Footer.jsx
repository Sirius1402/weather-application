import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:StyledLink, &:active {
        text-decoration: none;
    }
`;

const MyLink = styled.a`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:StyledLink, &:active {
        text-decoration: none;
    }
`

const Footer = () => {

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <MyLink href={`mailto:${email}${params}`}>{children}</MyLink>;
    };

    return (
        <footer>
            <div>
                <ul className="footer-nav">
                    <li className="footer-li">
                        <StyledLink to="/" replace>Home</StyledLink>
                    </li>
                    <li className="footer-li">
                        <StyledLink to="/present-weather" replace>Present Weather</StyledLink>
                    </li>
                    <li className="footer-li">
                        <StyledLink to="/forecast" replace>Forecast</StyledLink>
                    </li>
                    <li className="footer-li">
                        <StyledLink to="/world-weather" replace>World-wide weathher</StyledLink>
                    </li>
                    <li className="footer-li">
                        <Mailto email="razvanciobanel@protonmail.com" title="razvanciobanel@protonmail.com" subject="" body="" >
                            Contact
                        </Mailto>
                    </li>
                </ul>
            </div>
            <div className="footer-2nd">
           <p style={{color:"white"}}> Powered by <MyLink 
            href="https://www.weatherapi.com/"  
            target="_blank" title="Free Weather API" 
            rel="noopener noreferrer">WeatherAPI.com</MyLink></p>
            <p style={{color:"white"}}>&copy; Designed by Razvan-Cosmin Ciobanel</p>
            </div>

        </footer>
    )
}

export default Footer
