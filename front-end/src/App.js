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
    <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/present-weather" component={PresWeather} />
          <Route exact path="/forecast" component={Forecast} />
          <Route exact path="/world-weather" component={WorldWeather} />
        </Switch></div>
        <Footer />
      
    </HashRouter>
  );
}

export default App;
