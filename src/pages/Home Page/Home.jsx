import React, { useState } from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './Home.css';

const Home = () => {
  const [searchInput, setSearchInput] = useState(
    'Title, companies, expertise or benefits',
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="home-search-background">
        <form onSubmit={handleSubmit} className="home-search-form">
          <WorkOutlineIcon className="home-search-icon" />
          <input
            className="home-search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
          />
          <button className="home-search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
