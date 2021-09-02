import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-li">
                    <Link to="/home" replace>Home</Link>
                </li>
                <li className="nav-li">
                    <Link to="/present-weather" replace>Present Weather</Link>
                </li>
                <li className="nav-li">
                    <Link to="/forecast" replace>Forecast</Link>
                </li>
                <li className="nav-li">
                    <Link to="/world-weather" replace>World-wide weathher</Link>
                </li>
            </ul>            
        </nav>
    )
}

export default Navbar
