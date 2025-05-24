import React, { useState } from "react";
import { motion } from "framer-motion";
import "./EpisodeTimeline.scss"; 
import Navbar from '../pages/Navbar';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const episodes = [
  {
    id: 1,
    title: "The First Shot",
    bounty: 500,
    reputation: 10,
    isClimactic: false,
    media: "/pictures/video1.mp4", 
  },
  {
    id: 2,
    title: "Ambush at Red Gulch",
    bounty: 1200,
    reputation: 30,
    isClimactic: true,
    media: "pictures/video3.mp4",
  },
  {
    id: 3,
    title: "Tracks of Treachery",
    bounty: 2000,
    reputation: 45,
    isClimactic: false,
    media: "pictures/video4.mp4",
  },
  {
    id: 4,
    title: "High Noon Showdown",
    bounty: 5000,
    reputation: 90,
    isClimactic: true,
    media: "pictures/video1.mp4",
  },
  {
    id: 5,
    title: "The Final Reckoning",
    bounty: 10000,
    reputation: 100,
    isClimactic: true,
    media: "pictures/video4.mp4",
  },
];

export default function ShowdownPath() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[0]);
  const navigate = useNavigate();


  return (
    <div className="anj">
     <Navbar />
    

    <motion.div
      className="showdown-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    <button className="mt-2" onClick={() => navigate(-1)}>
      <FaArrowLeft />
    </button>
      <h2 className="showdown-title">Episode Timeline: The Showdown Path</h2>

      <div className="timeline">
        {episodes.map((ep) => (
          <motion.div
            key={ep.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`episode-bullet ${ep.id === selectedEpisode.id ? "selected" : ""}`}
            onClick={() => setSelectedEpisode(ep)}
          >
            <motion.div
              className={`bullet-icon ${ep.isClimactic ? "climactic" : ""}`}
              animate={ep.isClimactic ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.5, repeat: ep.isClimactic ? Infinity : 0, repeatDelay: 2 }}
            >
              🔫
            </motion.div>
            <span className="bullet-label">Ep. {ep.id}</span>
          </motion.div>
        ))}
        <div className="timeline-rail"></div>
      </div>

      <motion.div
        key={selectedEpisode.id}
        className="episode-details"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="episode-title">{selectedEpisode.title}</h3>
        <p className="episode-info">Bounty: ${selectedEpisode.bounty.toLocaleString()}</p>
        <p className="episode-info">Reputation: ⭐ {selectedEpisode.reputation}</p>

        {selectedEpisode.media.includes(".mp4") ? (
          <video className="episode-media" controls>
            <source src={selectedEpisode.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={selectedEpisode.media} alt={selectedEpisode.title} className="episode-media" />
        )}

        {selectedEpisode.isClimactic && (
          <motion.div
            className="climactic-banner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="climactic-icon"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.6 }}
            >
              🌅
            </motion.span>
            <div>
              <p className="climactic-text-main">High Noon Showdown!</p>
              <p className="climactic-text-sub">This episode marks a major duel or heist. Expect silhouette showdowns and revolver echoes!</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
    <Footer/>
    </div>
  );
}
