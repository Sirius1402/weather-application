import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('Reanders application', () => {
    window.alert = jest.fn();
    test('renders navbar', () => {
        const { queryByTestId } = render(<App />);
        const navbar = queryByTestId("navbar");
        expect(navbar).toBeVisible();
    });

    test('renders footer', () => {
        const { queryByTestId } = render(<App />);
        const footer = queryByTestId("footer")
        expect(footer).toBeVisible()
    });

    test("Full app rendering/navigating", ()=>{
        window.alert.mockClear();
        const history = createMemoryHistory()
        const {queryByTestId} = render(
            <Router history={history}>
                <App />
            </Router>
        )
        expect(screen.getByText(/welcome/i)).toBeInTheDocument()

        fireEvent.click(screen.getAllByText("Local Weather")[0])
        const weather = queryByTestId("weather")
        expect(weather).toBeInTheDocument()

        fireEvent.click(screen.getAllByText("Local Weather")[1])
        expect(weather).toBeInTheDocument()

        fireEvent.click(screen.getAllByText("Forecast")[0])
        const forecast = queryByTestId("forecast")
        expect(forecast).toBeInTheDocument()

        fireEvent.click(screen.getAllByText("Forecast")[1])    
        expect(forecast).toBeInTheDocument()
        
        fireEvent.click(screen.getAllByText("World-Wide Weather")[0])
        const wWeather = queryByTestId("wWeather")
        expect(wWeather).toBeInTheDocument()

        fireEvent.click(screen.getAllByText("World-Wide Weather")[1])
        expect(wWeather).toBeInTheDocument()

        const email = screen.getByText("Contact")
        expect(email).toHaveAttribute("href", "mailto:razvanciobanel@protonmail.com")

        const aTag = queryByTestId("anchor-tag")
        expect(aTag).toHaveAttribute("href", "https://www.weatherapi.com/")
    })
})

