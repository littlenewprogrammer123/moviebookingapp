import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { movies } from './FeaturedMovies';

const Hero = () => {
  const sliderRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleMouseEnter = () => (isPaused.current = true);
    const handleMouseLeave = () => (isPaused.current = false);

    if (slider) {
      slider.addEventListener('mouseenter', handleMouseEnter);
      slider.addEventListener('mouseleave', handleMouseLeave);
    }

    const interval = setInterval(() => {
      if (!isPaused.current && slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    }, 20);

    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener('mouseenter', handleMouseEnter);
        slider.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="hero-carousel">
      <h2>Now Streaming</h2>
      <div className="carousel" ref={sliderRef}>
        {[...movies, ...movies].map((movie, index) => (
          <Link
            key={index}
            to={`/book/${encodeURIComponent(movie.title)}`}
            state={{ movie }}
            className="carousel-link"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="carousel-image"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
