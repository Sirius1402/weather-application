import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import LoaderProvider from "./context/LoaderVisible";

function App() {
  return (
    <>
      <LoaderProvider>
        <div className="App">
          <Navbar />
          <Outlet />
        </div>
      </LoaderProvider>

      <div data-testid="footer">
        <Footer />
      </div>
      <CookieConsent enableDeclineButton flipButtons debug={true}>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default App;
