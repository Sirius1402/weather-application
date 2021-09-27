import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('Reanders application', () => {
    test('renders navbar', () => {
        const { queryByTestId } = render(<App />);
        const navbar = queryByTestId("navbar");
        expect(navbar).toBeVisible();
    });
    test('renders footer', () => {
        const { queryByTestId } = render(<App />);
        const footer = queryByTestId("footer")
        expect(footer).toBeVisible()
    })
})