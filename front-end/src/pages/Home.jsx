import React from "react";

const Home = () => {
  return (
    <section>
      <div className="ww-card">
        <h1>Hello and welcome to "My weather" !</h1>
        <br />
        <br />
        <p>
          It is not only my weather, but it is also your weather, and her
          weather.
        </p>
        <p>Most important, it is our weather.</p>
        <p>
          Here you can get:
          <ul className="home-list">
            <li>- local weather based on your location;</li>
            <li>
               - 3 days forecasts for any location and hourly forescasts for each
              day;
            </li>
            <li>- and present weather for any location.</li>
          </ul>
        </p>
        <p>Thank you very much, because you are here and please enjoy it!</p>
      </div>
    </section>
  );
};

export default Home;
