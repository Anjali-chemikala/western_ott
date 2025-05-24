import React, { useState } from 'react';
import './Downloads.scss';
import { FaDownload, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

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
  'Dust Storm'
];

const Download = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState(initialImages);

  const handleClearAll = () => {
    setImages([]);
  };

  const goBack = () => {
    window.scrollTo(0, 0);
    navigate(-1);
  };

  return (
    <div>
      <Navbar/>
    <div className="download-page">
      <div className="download-header">
        <h2>Downloads</h2>
        <div className="button-group">
          <button className="clear-all" onClick={handleClearAll}>
            <FaTrash /> Clear All
          </button>
          <button className="back-button" onClick={goBack}>
            Back
          </button>
        </div>
      </div>

      {images.length === 0 ? (
        <p className="no-downloads">No downloads available.</p>
      ) : (
        <div className="download-grid">
          {images.map((src, index) => (
            <div key={index} className="download-card">
              <img
                src={src}
                alt={imageTitles[index]}
                onClick={() => navigate('/video')}
                className="clickable-image"
                style={{ cursor: 'pointer' }}
              />
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

export default Download;
