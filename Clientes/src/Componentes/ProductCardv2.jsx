/*import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="container">
      <img src={product.imageUrl} alt={product.name} className="image" />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <input 
          type="number" 
          value={quantity} 
          onChange={handleQuantityChange} 
          className="input" 
          min="1"
        />
        <button onClick={handleAddToCart} className="button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
*/