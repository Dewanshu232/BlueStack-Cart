import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import mockData from '../data/mockData.json';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredSuggestions = mockData
        .filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 6); // Limit to 6 items
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (item) => {
    setSearchTerm(item.title);
    setSuggestions([]);
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && (
          <button className="clear-button" onClick={handleClear}>
            <FaTimes />
          </button>
        )}
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSuggestionClick(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;