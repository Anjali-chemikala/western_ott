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
];

const imageTitles = [
  ' The Beginning',
  ' Showdown',
  ' Allies',
  ' Ambush',
  ' Dust Storm',
  ' The Duel',
  ' Midnight Chase',
  'Reckoning',
  'The Last Stand',
  ' Showdown',
  ' Allies',
  ' Ambush',
  ' Dust Storm',
];

const Viewall = () => {
  const navigate = useNavigate();
  const [images] = useState(initialImages);

  return (
    <div>
      <Navbar/>
    <div className="download-page">
      <div className="download-header">
        <div className="button-group">
          <button className="back-button" onClick={() => { navigate('/home'); }}>
            Back
          </button>
        </div>
      </div>

      {images.length === 0 ? (
        <p className="no-downloads">No downloads available.</p>
      ) : (
        <div className="download-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="download-card"
              onClick={() => navigate('/video')}
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

export default Viewall;
