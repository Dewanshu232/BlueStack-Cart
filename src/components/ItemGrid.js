import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import { useCart } from '../context/CartContext';
import './ItemGrid.css';

const ItemGrid = ({ items }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid">
      {items.map((item, index) => (
        <ItemCard key={index} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

ItemGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemGrid;