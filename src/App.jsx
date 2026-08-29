import React, { useState } from "react";
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
import ArticleDetail from "./pages/ArticleDetail";
import TravelInfo from "./pages/TravelInfo";
import Booking from "./pages/Booking";
import Hotels from "./pages/Hotels";
import MyAccount from "./pages/MyAccount";
import Contact from "./pages/Contact";

// COMPONENTS
import Footer from "./components/Footer";

function App() {
  const [globalSearch, setGlobalSearch] = useState("");

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50/50 dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col font-sans">
        <Header onSearch={setGlobalSearch} />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home searchQuery={globalSearch} onSearchChange={setGlobalSearch} />} />
            <Route path="/post/:id" element={<ArticleDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/travel-info" element={<TravelInfo />} />
            <Route path="/booking" element={<Navigate to="/destinations" replace />} />
            <Route path="/booking/:destination" element={<Booking />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
