import React, { useState } from "react";
import "./Ranking.scss";
import Navbar from '../pages/Navbar';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";



const gunslingers = [
  { icon: "⭐", name: "Carson", points: 95 },
  { icon: "👢", name: "Linda", points: 90 },
  { icon: "🔫", name: "Jesse", points: 85 },
  { icon: "🥾", name: "Grant", points: 80 },
];

const reviewers = [
  { icon: "🎯", name: "Sally", reviews: 52 },
  { icon: "📜", name: "Mike", reviews: 47 },
  { icon: "📝", name: "Joe", reviews: 39 },
  { icon: "📖", name: "Bex", reviews: 34 },
];

const posses = [
  { icon: "⭐", name: "GOLD RUSH GANG" },
  { icon: "⭐", name: "LONE STAR REBELS" },
  { icon: "🦅", name: "DESERT VULTURES" },
];

const initialMessages = [
  { sender: "Jesse", text: "Howdy, everyone!" },
  { sender: "Grant", text: "Got some intel on a bounty." },
  { sender: "Mae", text: "Let’s hear it, partner." },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("gunslingers");
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [joinedPosse, setJoinedPosse] = useState("");
  const [leaderboard, setLeaderboard] = useState(gunslingers);
  const navigate = useNavigate();
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "gunslingers") {
      setLeaderboard(gunslingers);
    } else {
      setLeaderboard(reviewers);
    }
  };
  const sendMessage = () => {
    if (input.trim()) {
      const newMsg = { sender: "You", text: input };
      setMessages((prev) => [...prev, newMsg]);
      setInput("");
    }
  };

  const handleJoinPosse = (name) => {
    setJoinedPosse(name);
  };

  return (
    <div className="ran">
      <Navbar />
      <button className="mt-2" onClick={() => navigate(-1)}>
  <FaArrowLeft />
</button>

    <div className="container">
      <div className="left-panel">
        <h1>Outlaw Rankings</h1>
        <div className="tabs">
          <button
            className={activeTab === "gunslingers" ? "active" : ""}
            onClick={() => handleTabClick("gunslingers")}
          >
            TOP GUNSLINGERS
          </button>
          <button
            className={activeTab === "reviewers" ? "active" : ""}
            onClick={() => handleTabClick("reviewers")}
          >
            MOST-WANTED REVIEWERS
          </button>
        </div>

        <ol className="leaderboard">
          {leaderboard.map((user, index) => (
            <li key={index}>
              <span>{user.icon}</span> {user.name}{" "}
              {activeTab === "gunslingers"
                ? `(${user.points} pts)`
                : `(${user.reviews} reviews)`}
            </li>
          ))}
        </ol>

        <button className="posse-button">POSSE SYSTEM</button>
        <div className="user-info">
          <span>⭐</span> Ausorn
        </div>
      </div>

      <div className="right-panel">
        <h1>Posse System</h1>
        <div className="posse-list">
          {posses.map((posse, index) => (
            <button key={index} onClick={() => handleJoinPosse(posse.name)}>
              <span>{posse.icon}</span> {posse.name}
            </button>
          ))}
        </div>

        {joinedPosse && (
          <p className="joined-msg">✅ You joined the {joinedPosse}!</p>
        )}

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div className="message" key={idx}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default App;



