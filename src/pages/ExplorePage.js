// src/pages/ExplorePage.js

import React, { useState, useEffect } from 'react';
import SearchBar from '/components/SearchBar';
import ItemGrid from '/components/ItemGrid';
import mockData from '../data/mockData.json';

const ExplorePage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load data from mockData.json
    setItems(mockData);
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ItemGrid items={filteredItems} />
    </div>
  );
};

export default ExplorePage;