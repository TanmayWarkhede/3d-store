// src/pages/ProductPage.js

import React from 'react';
import ProductModel from '../components/ProductModel';
import '../styles/productpage.scss';
import smartphoneModel from '../models/smartphone.glb';

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Smartphone</h1>
      <ProductModel model={smartphoneModel} />
    </div>
  );
};

export default ProductPage;
