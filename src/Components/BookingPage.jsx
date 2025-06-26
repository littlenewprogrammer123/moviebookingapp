import React, { useState, useEffect } from 'react';
import './BookingPage.css';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Spinner from './Spinner'; // Ensure this is a valid component

const ROWS = 5;
const COLUMNS = 8;

const generateRandomBookedSeats = () => {
  const totalSeats = ROWS * COLUMNS;
  const randomSet = new Set();
  while (randomSet.size < 10) {
    const seat = Math.floor(Math.random() * totalSeats) + 1;
    randomSet.add(seat);
  }
  return Array.from(randomSet);
};

const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(() => generateRandomBookedSeats());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { title } = useParams();
  const location = useLocation();
  const movie = location.state?.movie;

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 2500); // force spinner at least 2.5s
    return () => clearTimeout(timer);
  }, []);

  const toggleSeat = (seatNum) => {
    if (bookedSeats.includes(seatNum)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatNum)
        ? prev.filter((s) => s !== seatNum)
        : [...prev, seatNum]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
    setShowModal(true);
  };

  const confirmBooking = () => {
    if (!name || !email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid name and email.');
      return;
    }

    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    setShowModal(false);
    alert(`Booking confirmed for ${name}!`);
    navigate('/');
  };

  const handleVideoLoaded = () => {
    // Wait minimum time (already handled by setTimeout)
    setIsLoading(false);
  };

  return (
    <div className="booking-container">
      {/* Back button */}
      <button className="back-btn" onClick={() => navigate(-1)} title="Go Back">
        ← Back
      </button>

      {movie && (
        <div className="teaser-section" style={{ position: 'relative' }}>
          {isLoading && <Spinner />}

          {movie.teaser.includes('youtube.com') || movie.teaser.includes('youtu.be') ? (
            <iframe
              src={movie.teaser}
              title={movie.title}
              width="100%"
              height="400"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoaded}
              style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}
            />
          ) : (
            <video
              className="teaser-video-bg"
              autoPlay
              loop
              playsInline
              onLoadedData={handleVideoLoaded}
              style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}
            >
              <source src={movie.teaser} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {!isLoading && (
            <div className="teaser-overlay">
              <div className="overlay-content">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <span>⭐ {movie.rating}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {!isLoading && (
        <>
          <div className="seat-grid">
            {Array.from({ length: ROWS * COLUMNS }, (_, i) => {
              const seatNum = i + 1;
              let status = '';
              if (bookedSeats.includes(seatNum)) status = 'booked';
              else if (selectedSeats.includes(seatNum)) status = 'selected';

              return (
                <div
                  key={seatNum}
                  className={`seat ${status}`}
                  onClick={() => toggleSeat(seatNum)}
                >
                  {seatNum}
                </div>
              );
            })}
          </div>

          <button className="confirm-button" onClick={handleProceed}>
            Confirm Booking
          </button>
        </>
      )}

      {showModal && (
        <div className="booking-modal">
          <div className="modal-content">
            <h3>Enter Your Details</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={confirmBooking}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
