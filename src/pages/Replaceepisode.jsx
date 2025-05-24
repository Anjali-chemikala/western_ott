import React, { useState, useEffect } from "react";
import "./Replaceepisode.scss";
import Navbar from '../pages/Navbar';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "./Footer";




const arcs = [
  { id: 1, name: "Outlaw Ridge", episodes: [1, 2, 3], icon: "🏔️" },
  { id: 2, name: "Silver Creek Heist", episodes: [4, 5, 6], icon: "💰" },
  { id: 3, name: "Bounty Warfront", episodes: [7, 8, 9], icon: "⚔️" },
  { id: 4, name: "Deadman’s Gulch", episodes: [10], icon: "☠️" },
];

export default function TrailMapNavigation() {
  const [currentArc, setCurrentArc] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArc((prev) => (prev < arcs.length ? prev + 1 : prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const positions = [
    { x: 80, y: 100 },
    { x: 200, y: 100 },
    { x: 350, y: 70 },
    { x: 500, y: 120 },
  ];

  return (
    <div className="bbbb">
      <Navbar />
      <button className="mt-2" onClick={() => navigate(-1)}>
  <FaArrowLeft />
</button>

    <div className="trail-map-container">
    <h2 className="wes"> Western Anime Trail Map </h2>

      <div className="map">
        <svg width="600" height="200" className="trail-path">
          <line x1="80" y1="100" x2="200" y2="100" 
          stroke="#8B4513" stroke-width="6" stroke-dasharray="12,8" stroke-linecap="round" />
          <line x1="200" y1="100" x2="350" y2="70" 
          stroke="#8B4513" stroke-width="6" stroke-dasharray="12,8" stroke-linecap="round" />
          <line x1="350" y1="70" x2="500" y2="120" 
          stroke="#8B4513" stroke-width="6" stroke-dasharray="12,8" stroke-linecap="round" />
          {arcs.map((arc, i) => {
            const pos = positions[i];
            return (
              <g key={arc.id} className="arc-point" onClick={() => setCurrentArc(arc.id)}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={30}
                  className={arc.id === currentArc ? "active" : ""}
                />
                <text x={pos.x} y={pos.y + 10} fontSize="30" textAnchor="middle" pointerEvents="none">
                  {arc.icon}
                </text>
              </g>
            );
          })}

          {(() => {
            const pos = positions[currentArc - 1];
            return (
                  <foreignObject x={pos.x - 25} y={pos.y - 60} width="50" height="50">
                    <div className="rider-icon">
                    <img src="/pictures/hhhh.png" alt="Rider Icon" className="rider-image" />
                  </div>
                  </foreignObject>
            );
          })()}
        </svg>
      </div>

      <div className="arc-info">
        <h3>{arcs[currentArc - 1].name}</h3>
        <p>
          Episodes: {arcs[currentArc - 1].episodes.join(", ")} <br />
          Progress Marker: <strong>{currentArc} / {arcs.length}</strong>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}


