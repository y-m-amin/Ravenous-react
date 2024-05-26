import React, { useState } from 'react';
import './SearchBar.css';

const sortOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

function SearchBar() {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  function renderSortOptions() {
    return Object.keys(sortOptions).map(option => {
      let sortOptionValue = sortOptions[option];
      return (
        <li
          key={sortOptionValue}
          className={sortBy === sortOptionValue ? 'active' : ''}
          onClick={() => setSortBy(sortOptionValue)}
        >
          {option}
        </li>
      );
    });
  }

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    // To be implemented: pass search parameters to the Yelp API
    console.log(`Searching for ${term} in ${location} sorted by ${sortBy}`);
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
}

export default SearchBar;
