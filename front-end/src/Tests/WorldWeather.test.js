import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WorldWeather from "../pages/WorldWeather"
import { act } from "react-dom/test-utils";

describe('WorldWeather component', ()=>{
    window.alert = jest.fn()
    test('Input render', ()=>{
        window.alert.mockClear();
        const {queryByTestId} = render(<WorldWeather/>)
        const input = queryByTestId("input")
        expect(input).toBeTruthy()

    });

    test('Type city name', ()=>{
        const {queryByTestId} = render(<WorldWeather/>)
        const input = queryByTestId("input")
        fireEvent.change(input,{target:{value:'London'}})
        expect(input.value).toBe('London')
    });

    // window.alert = jest.fn();    
    // test('fetch and display', async ()=>{
    //    await act( async()=>{
    //     window.alert.mockClear();
    //     const {findByText, queryAllByTestId} = render(<WorldWeather />)
    //     const button = queryAllByTestId("ww-button")[0]
    //     fireEvent.click(button)
    //     expect(await findByText(/United Kingdom/ig)).toBeInTheDocument()
    // })})    
})