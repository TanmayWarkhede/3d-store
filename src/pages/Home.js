// src/pages/Home.js

import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/home.scss';
import smartphoneModel from '../models/smartphone.glb';
import laptopModel from '../models/laptop.glb';
import televisionModel from '../models/television.glb';
import headphonesModel from '../models/headphones.glb';
import cameraModel from '../models/camera.glb';

const products = [
  { name: 'Smartphone', model: smartphoneModel },
  { name: 'Laptop', model: laptopModel },
  { name: 'Television', model: televisionModel },
  { name: 'Headphones', model: headphonesModel },
  { name: 'Camera', model: cameraModel },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to 3D Electronics Store</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
