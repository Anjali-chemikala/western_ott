import React, { useRef, useState } from "react";
import "./Video.scss";
import { FaRedo, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const qualityOptions = {
  "240p": "pictures/video1.mp4",
  "320p": "pictures/video2.mp4",
  "480p": "pictures/video1.mp4",
  "1080p": "pictures/video2.mp4",
};

const CustomPlayer = () => {
  const videoRef = useRef(null);
  const [showRecap, setShowRecap] = useState(false);
  const [brightness, setBrightness] = useState(1);
  const [quality, setQuality] = useState("480p");
  const whipAudio = new Audio("pictures/whipsound.mp3");
  const navigate = useNavigate()
  
  const handleSkip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      whipAudio.play();
    }
  };

  const handleFlashback = () => {
    if (videoRef.current) {
      const targetTime = Math.max(videoRef.current.currentTime - 20, 0);
      videoRef.current.playbackRate = 0.5;
      videoRef.current.currentTime = targetTime;
      videoRef.current.play();
      setTimeout(() => {
        if (videoRef.current) videoRef.current.playbackRate = 1.0;
      }, 20000);
    }
  };

  const toggleRecap = () => {
    setShowRecap((prev) => !prev);
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleBrightness = (e) => {
    const value = parseFloat(e.target.value);
    setBrightness(value);
  };

 const handleQualityChange = (e) => {
  const selectedQuality = e.target.value;
  if (videoRef.current) {
    const currentTime = videoRef.current.currentTime;
    const isPaused = videoRef.current.paused;
    setQuality(selectedQuality);

    const newSrc = qualityOptions[selectedQuality];
    videoRef.current.src = newSrc;
    videoRef.current.load();
    videoRef.current.onloadedmetadata = () => {
      videoRef.current.currentTime = currentTime;
      if (!isPaused) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Playback error after quality change:", error);
          });
        }
      }
    };
  }
};


  return (
    <div className="anjali">
      <button onClick={()=>{navigate(-1)}}>Back</button>
    <div className="frontier-player">
      <video
        ref={videoRef}
        src={qualityOptions[quality]}
        controls
        className="video"
        style={{ filter: `brightness(${brightness})` }}
      />

      <div className="controls">
        <button className="btn" onClick={() => handleSkip(-10)}>⏪ Quick Draw Back</button>
        <button className="btn flashback" onClick={handleFlashback}>🔫 Wanted Flashback</button>
        <button className="btn" onClick={() => handleSkip(10)}>⏩ Quick Draw Forward</button>
        <button className="btn recap" onClick={toggleRecap}>🔥 Campfire Recap</button>
      </div>

      <div className="extras">
        <button className="btn icon-btn" onClick={handleReplay}>
          <FaRedo /> Replay
        </button>

        <div className="dropdown-quality">
          <label htmlFor="quality">🎥 Quality:</label>
          <select id="quality" value={quality} onChange={handleQualityChange}>
            {Object.keys(qualityOptions).map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="brightness-control">
          <FaSun />
          <input
            type="range"
            min="0.5"
            max="1.5"
            step="0.1"
            value={brightness}
            onChange={handleBrightness}
          />
        </div>
      </div>

      {showRecap && (
        <div className="recap">
          <h3>🔥 Campfire Recap</h3>
          <ul>
            <li>“He who rides alone, rides fastest.”</li>
            <li>Key Scene: Showdown at Red Rock Saloon</li>
            <li>Clue: Look for the scar on the bounty poster.</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default CustomPlayer;
