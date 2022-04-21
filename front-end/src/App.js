import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorldWeather from "./pages/WorldWeather";
import Home from "./pages/Home";
import LocalWeather from "./pages/LocalWeather";
import Forecast from "./pages/Forecast";
import "./App.css";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from "react";
import CookieConsent, {
  Cookies,
} from "react-cookie-consent";

function App() {
  const [isLoading, setIsLoading] = useState(true);


  return (
    <HashRouter>
      <div className="App">
        <div data-testid="navbar">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/local-weather">
            <LocalWeather
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Route>
          <Route exact path="/forecast">
            <Forecast
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Route>
          <Route exact path="/world-weather">
            <WorldWeather
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </Route>
        </Switch>
      </div>
      <div data-testid="footer">
        <Footer />
      </div>
      <CookieConsent 
      enableDeclineButton
      flipButtons
      debug={true}>
        This website uses cookies to enhance the user
        experience.
      </CookieConsent>
    </HashRouter>
  );
}

export default App;
