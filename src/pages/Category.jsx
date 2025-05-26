import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

const categories = [
  "Classic Westerns", "Modern Westerns", "Spaghetti Westerns", "Western Series",
  "Outlaw Chronicles", "Cowboy Legends", "Western Sci-Fi & Fantasy", "Native Stories",
  "Wild West Action", "Western Comedy", "Western Romance", "Frontier Survival",
  "Western Horror", "Gunslingers & Duels", "Western Documentaries",
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="kavya">
        <Navbar/>
    <div className="categories-container">
      <h2 className="page-title">Explore Western Genres</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category}
            className="category-card"
            onClick={() => navigate(`/category/${encodeURIComponent(category)}`)}
          >
            <h5 className="category-title">{category}</h5>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CategoriesPage;
