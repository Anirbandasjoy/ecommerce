import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';

function ProductCardData() {
    const [showIcons, setShowIcons] = useState(false);
    const [showModal, setShowModal] = useState(false);

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  const products = [
    // {
    //   id: 1,
    //   name: 'Product 1',
    //   description: 'This is the description of Product 1',
    //   price: 9.99,
    //   image: 'https://picsum.photos/300/200?random=1',
    // },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description of Product 2',
      price: 14.99,
      image: 'https://picsum.photos/300/200?random=2',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description of Product 3',
      price: 19.99,
      image: 'https://picsum.photos/300/200?random=3',
    },
  ];

  return (
  <div className="containers">
    <div className=" ProductCardData">
      {products.map(product => (
        <div
        className="product-card"
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => setShowIcons(false)}
        onClick={handleIconClick}
      >
        <img src={product.image} alt={product.name} />
  
        {showIcons && (
          <div className="icon-container">
            {/* <div className="icon">
              <i className="fa fa-search"></i>
            </div> */}
            <div className="icon">
              <i className="fa fa-heart"></i>
            </div>
            <div className="icon">
              <i className="fa fa-shopping-cart"></i>
            </div>
          </div>
        )}
  
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>
                &times;
              </span>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        )}
  
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
      ))}
    </div>
  </div>
  );
}

export default  ProductCardData;
