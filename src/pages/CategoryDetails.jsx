import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CategoryDetails.scss";

const mockMovies = {
  "Classic Westerns": [
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
     { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Modern Westerns": [
    { title: "Hell or High Water", image: "/pictures/ep11.jpg" },
    { title: "No Country for Old Men", image: "/pictures/ep14.jpg" },
    { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Spaghetti Westerns": [
    { title: "Django", image: "/pictures/ep21.jpg" },
    { title: "A Fistful of Dollars", image: "/pictures/ep23.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Western Series": [
    { title: "Deadwood", image: "/pictures/ep24.jpg" },
    { title: "1883", image: "/pictures/ep27.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Outlaw Chronicles": [
    { title: "The Outlaw Josey Wales", image: "/pictures/ep29.png" },
    { title: "Young Guns", image: "/pictures/ep30.png" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Cowboy Legends": [
    { title: "Tombstone", image: "/pictures/ep1.jpg" },
    { title: "Wyatt Earp", image: "/pictures/ep3.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Western Sci-Fi & Fantasy": [
    { title: "Westworld", image: "/pictures/ep4.jpg" },
    { title: "Cowboys & Aliens", image: "/pictures/ep7.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Native Stories": [
    { title: "Wind River", image: "/pictures/ep8.jpg" },
    { title: "The New World", image: "/pictures/ep9.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Wild West Action": [
    { title: "The Magnificent Seven", image: "/pictures/ep11.jpg" },
    { title: "3:10 to Yuma", image: "/pictures/ep14.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Western Comedy": [
    { title: "Blazing Saddles", image: "/pictures/ep15.png" },
    { title: "Shanghai Noon", image: "/pictures/ep16.png" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" }
  ],
  "Western Romance": [
    { title: "Legends of the Fall", image: "/pictures/ep18.jpg" },
    { title: "The Longest Ride", image: "/pictures/ep19.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Frontier Survival": [
    { title: "The Revenant", image: "/pictures/ep20.jpg" },
    { title: "Meek's Cutoff", image: "/pictures/ep21.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" }
  ],
  "Western Horror": [
    { title: "Bone Tomahawk", image: "/pictures/ep24.jpg" },
    { title: "Dead Birds", image: "/pictures/ep27.jpg" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Gunslingers & Duels": [
    { title: "Unforgiven", image: "/pictures/ep29.png" },
    { title: "Open Range", image: "/pictures/ep30.png" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ],
  "Western Documentaries": [
    { title: "The West (Ken Burns)", image: "/pictures/ep1.jpg" },
    { title: "The Real West", image: "/pictures/ep2.png" },
      { title: "Shane", image: "/pictures/ep3.jpg" },
    { title: "Stagecoach", image: "/pictures/ep4.jpg" },
    { title: "The Searchers", image: "/pictures/ep7.jpg" },
    { title: "Red River", image: "/pictures/ep8.jpg" },
    { title: "Butch Cassidy and the Sundance Kid", image: "/pictures/ep9.jpg" },
    { title: "True Grit", image: "/pictures/ep10.jpg" },
    { title: "The Good, The Bad and The Ugly", image: "/pictures/ep1.jpg" },
    { title: "High Noon", image: "/pictures/ep2.png" },
  ]
};

const CategoryDetails = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const movies = mockMovies[decodedCategory] || [];

  return (
    <div className="category-container">
    <div className="hee">
      <h2 className="category-title">{decodedCategory}</h2>
      <Link to="/category" className="back-button">← Back to Categories</Link>
      </div>

      {movies.length > 0 ? (
        <div className="movie-grid">
                {movies.map((movie, index) => (
                <div className="movie-card" key={index}>
                <Link to="/video">
                <img
                src={movie.image}
                className="movie-image"
                alt={movie.title}
                />
            </Link>
              <div className="movie-info">
                <h5 className="movie-title">{movie.title}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found for this category.</p>
      )}
    </div>
  );
};

export default CategoryDetails;
