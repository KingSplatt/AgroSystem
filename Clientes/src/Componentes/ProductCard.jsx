import React from 'react';
import '../Estilos/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <Link to={`/Producto${product.id}`} className="view-product-button">
        Ver producto
      </Link>
    </div>
  );
};

export default ProductCard;