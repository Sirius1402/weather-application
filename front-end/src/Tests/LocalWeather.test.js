import React from 'react'
import { render } from '@testing-library/react'
import LocalWeather from '../pages/LocalWeather'



describe("LocalWeather component", ()=>{
    window.alert = jest.fn();    
    test('fetch and display', async ()=>{
        window.alert.mockClear();
        const {findByText} = render(<LocalWeather />)
        expect(await findByText(/london/i)).toBeInTheDocument()
        })
})
