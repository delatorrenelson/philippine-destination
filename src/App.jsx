import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route path={`/`} element={<Home />} />
          <Route path={`/destinations`} element={<Destinations />} />
          <Route path={`/travel-info`} element={<TravelInfo />} />
          <Route path={`/booking`} element={<Booking />} />
          <Route path={`/hotels`} element={<Hotels />} />
          <Route path={`/my-account`} element={<MyAccount />} />
          <Route path={`/services`} element={<Services />} />
          <Route path={`/contact`} element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;