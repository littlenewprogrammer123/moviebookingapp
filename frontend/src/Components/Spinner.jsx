import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p style={{ color: '#ccc', marginTop: '10px', fontSize: '14px' }}></p>
  </div>
);


export default Spinner;
