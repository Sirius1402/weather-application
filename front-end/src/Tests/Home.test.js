import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home component", () => {
  test("render home page", () => {
    render(<Home />);
    const weatherWord = screen.queryAllByText(/\bweather\b/g);
    expect(weatherWord).toHaveLength(3);
  });
});
