import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import TravelInfo from "./pages/TravelInfo";
import Booking from "./pages/Booking";
import Hotels from "./pages/Hotels";
import MyAccount from "./pages/MyAccount";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// COMPONENTS
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App md:w-[90%] mx-auto w-full max-w-screen-2xl">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path={`/`} element={<Home />} />
          <Route exact path={`/destinations`} element={<Destinations />} />
          <Route exact path={`/travel-info`} element={<TravelInfo />} />
          <Route exact path={`/booking`} element={<Navigate to="/destinations" replace />} />
          <Route exact path={`/booking/:destination`} element={<Booking />} />
          <Route exact path={`/hotels`} element={<Hotels />} />
          <Route exact path={`/my-account`} element={<MyAccount />} />
          <Route exact path={`/services`} element={<Services />} />
          <Route exact path={`/contact`} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
