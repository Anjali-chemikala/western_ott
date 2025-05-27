import React, { useEffect, useState } from 'react';
import './SaloonDoors.scss';

const SaloonDoors = ({ onAnimationEnd }) => {
  const [bulletHits, setBulletHits] = useState([]);

  useEffect(() => {
    const hits = Array.from({ length: 3 }).map(() => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }));
    setBulletHits(hits);

    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="saloon-door-container">
      <div className="saloon-door left"></div>

      <div className="saloon-title">Western OTT</div>

      <div className="saloon-door right"></div>

      {bulletHits.map((pos, idx) => (
        <span
          key={idx}
          className="bullet-hit"
          style={{ top: pos.top, left: pos.left }}
        />
      ))}
    </div>
  );
};

export default SaloonDoors;
