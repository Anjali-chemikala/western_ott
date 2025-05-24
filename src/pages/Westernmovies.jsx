import React, { useState } from 'react';
import './Downloads.scss';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const initialImages = [
  '/pictures/ep1.jpg',
  '/pictures/ep2.png',
  '/pictures/ep3.jpg',
  '/pictures/ep4.jpg',
  '/pictures/ep7.jpg',
  '/pictures/ep8.jpg',
  '/pictures/ep9.jpg',
  '/pictures/ep10.jpg',
  '/pictures/ep11.jpg',
  '/pictures/ep14.jpg',
  '/pictures/ep15.png',
  '/pictures/ep16.png',
   '/pictures/ep8.jpg',
  '/pictures/ep19.jpg',
  '/pictures/ep20.jpg',
  '/pictures/ep21.jpg',
  '/pictures/ep9.jpg',
  '/pictures/ep24.jpg',
];

const imageTitles = [
  'The Beginning',
  'Showdown',
  'Allies',
  'Ambush',
  'Dust Storm',
  'The Duel',
  'Midnight Chase',
  'Reckoning',
  'The Last Stand',
  'Showdown',
  'Allies',
  'Ambush',
  'Ambush',
  'Dust Storm',
  'The Duel',
  'Midnight Chase',
  'The Beginning',
  'Showdown',
];

const Westernmovies = () => {
  const navigate = useNavigate();
  const [images] = useState(initialImages);
  const goBack = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };

  const handleImageClick = () => {
    navigate('/video');  
  };

  return (
    <div>
      <Navbar/>
    <div className="download-page">
      <div className="download-header">
        <h2>Western Movies</h2>
        <button className="back-button" onClick={goBack}>
            Back
          </button>
      </div>

      {images.length === 0 ? (
        <p className="no-downloads">No downloads available.</p>
      ) : (
        <div className="download-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="download-card"
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            >
              <img src={src} alt={imageTitles[index]} />
              <p className="image-title">{imageTitles[index]}</p>
            </div>
          ))}
        </div>
      )}
     
    </div>
     <Footer/>
     </div>
  );
};

export default Westernmovies;
