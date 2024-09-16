// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/productcard.scss';  // Ensure this path is correct

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <Link to={`/product/${product.id}`} className="view-details-button">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
