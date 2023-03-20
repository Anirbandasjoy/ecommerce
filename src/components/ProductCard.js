import React, { useState,useEffect } from "react";
import "./AnotherCard.css";
const ProductList = () => {
  const [likes, setLikes] = useState(0);
  const [showModal, setShowModal] = useState(false);


  //another state  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleModalClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


//data fetching 

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setData(data);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3 style={{textAlign : "center",marginBottom :"1rem"}}>Error: {error.message}</h3>;
  }

  return (
    <div className="product-list">
      {data.map((product) => (
          
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div style={{textAlign : "center"}} className="product-info">
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p>{product.price}</p>
      </div>
      <div className="product-actions">
        <div className="like-icon" onClick={handleLikeClick}>
          <i className="fa fa-heart"></i>
          <span>{likes}</span>
        </div>
        <button className="view" onClick={handleModalClick}><i class="fa-solid fa-eye"></i></button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      )}
    </div>
      ))}
    </div>
  );
};

export default ProductList;
