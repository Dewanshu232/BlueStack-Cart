import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import mockData from '../data/mockData.json';
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const item = mockData.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="item-detail-image-container">
          <img src={item.image} alt={item.title} className="item-detail-image" />
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="item-detail-actions">
          <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetail;