import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = () => {
  const [sortBy, setSortBy] = useState('best_match');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? styles.active : '';
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching Yelp with ${businessName}, ${location}, ${sortBy}`);
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          placeholder="Search Businesses"
          value={businessName}
          onChange={handleBusinessNameChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a href="#" onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
