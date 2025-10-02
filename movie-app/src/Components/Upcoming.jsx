import React, { useEffect } from 'react';
import './Upcoming.css';

const Upcoming = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  return (
    <div className="upcoming-container">
      <h1 className="upcoming-title">Upcoming Movies?</h1>
      <p className="upcoming-text">
        Come on, it's just a personal project to showcase my skills! 😄
        <br /><br />
        I'm not <strong>Eiichiro Oda</strong> to know what the next One Piece movie is!
      </p>
      <img 
        src={`${process.env.PUBLIC_URL}/image-source/luffy-laugh.gif`} 
        alt="Luffy Laughing"
        className="luffy-gif"
      />
    </div>
  );
};

export default Upcoming;
