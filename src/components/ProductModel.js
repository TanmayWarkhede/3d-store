// src/components/ProductModel.js

import React from 'react';
import '@google/model-viewer';
import '../styles/productmodel.scss';

const ProductModel = ({ model }) => {
  return (
    <model-viewer
      src={model}
      alt="3D model"
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '500px' }}
    ></model-viewer>
  );
};

export default ProductModel;
