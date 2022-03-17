import React from "react";
import Forecast from "../pages/Forecast";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Forecast component", () => {
  window.alert = jest.fn();
  test("Input render", () => {
    window.alert.mockClear();
    const { queryByTestId } = render(<Forecast />);
    const input = queryByTestId("input-fcast");
    expect(input).toBeTruthy();
  });

  test("Type city name", () => {
    const { queryByTestId } = render(<Forecast />);
    const input = queryByTestId("input-fcast");
    fireEvent.change(input, { target: { value: "London" } });
    expect(input.value).toBe("London");
  });

  //     window.alert = jest.fn();
  //     test('fetch and display', async ()=>{
  //         await act( async ()=>{
  //         window.alert.mockClear();
  //         const {findByText, queryAllByTestId} = render(<Forecast/>)
  //         const button = queryAllByTestId("btn-fcast")[0]
  //         fireEvent.click(button)
  //         expect(await findByText(/United Kingdom/ig)).toBeInTheDocument()
  // })})
  // render(<Forecast/>).debug()
});
