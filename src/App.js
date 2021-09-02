import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WorldWeather from './pages/WorldWeather';
import Home from './pages/Home';
import PresWeather from './pages/PresWeather';
import Forecast from './pages/Forecast';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Footer />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/present-weather">
            <PresWeather />
          </Route>
          <Route exact path="/forecast">
            <Forecast />
          </Route>
          <Route exact path="/world-weather">
            <WorldWeather />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
