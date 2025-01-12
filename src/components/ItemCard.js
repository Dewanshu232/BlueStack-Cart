import React from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import './ItemCard.css';

const ItemCard = ({ item, addToCart }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={item.image} alt={item.title} className="card-image" />
        <button className="cart-icon" onClick={() => addToCart(item)}>
          <FaShoppingCart />
        </button>
      </div>
      <div className="card-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="card-actions">
          <a href={`/item/${item.id}`} className="view-button">View</a>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemCard;