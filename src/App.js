import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import FeaturedMovies from './Components/FeaturedMovies';
import BookingPage from './Components/BookingPage';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <Router basename="/moviebookingapp"> {/* 👈 IMPORTANT FIX */}
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedMovies />
                </>
              }
            />
            <Route path="/book/:title" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
