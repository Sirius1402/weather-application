import React from 'react'
import { render } from '@testing-library/react'
import PresWeather from '../pages/PresWeather'



describe("PresWeather component", ()=>{
    window.alert = jest.fn();    
    test('fetch and display', async ()=>{
        window.alert.mockClear();
        const {findByText} = render(<PresWeather />)
        expect(await findByText(/london/i)).toBeInTheDocument()
        })
})
