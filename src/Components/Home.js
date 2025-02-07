import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchPosts = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    );
    setResults(data.hits);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Hacker News Search</h1>
      <form onSubmit={searchPosts} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Hacker News"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ul className="results-list">
        {results.map((post) => (
          <li key={post.objectID} className="result-item">
            <Link to={`/post/${post.objectID}`} className="result-link">
              {post.title || "Untitled"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
