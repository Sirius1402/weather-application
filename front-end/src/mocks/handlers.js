import { rest } from "msw";

export const handlers = [
  rest.get("https://api.weatherapi.com/v1/current.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        location: {
          name: "London",
          country: "United Kingdom",
        },
        current: {
          temp_c: 20.0,
          condition: {
            text: "Overcast",
            icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
          },
        },
      })
    );
  }),
  rest.get("https://api.weatherapi.com/v1/search.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 2801268,
          name: "London, City of London, Greater London, United Kingdom",
        },
        {
          id: 2796590,
          name: "Holborn, Camden, Greater London, United Kingdom",
        },
      ])
    );
  }),
  rest.get("https://api.weatherapi.com/v1/forecast.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        location: {
          name: "London",
          country: "United Kingdom",
        },
        current: {
          temp_c: 22.0,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
          },
        },
        forecast: {
          forecastday: [
            {
              date: "2021-09-24",
              day: {
                maxtemp_c: 24.2,
              },

              hour: [
                {
                  time: "2021-09-24 00:00",
                  temp_c: 15.5,
                },
              ],
            },
          ],
        },
      })
    );
  }),
];
