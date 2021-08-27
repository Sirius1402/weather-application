import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import PresWeather from './pages/PresWeather';

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
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
