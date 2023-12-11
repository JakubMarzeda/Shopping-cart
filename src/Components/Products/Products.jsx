import React from 'react';
import productsData from '../../products-data.json';
import "./Products.css"
import { useDispatch } from 'react-redux';
import { addProduct } from '../Reducer/Shopping-cart-reducer';

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  }

  return (
    <div className="container">
          <div className="product-container">
        {productsData.map((product) => (
        <div className="product" key={product.id}>
            <div className="img-container">
              <img src={product.image} />
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <span>{product.price} zł</span>
              <div className="add-btn-container">
                <button onClick={() => handleAddToCart(product)}>Dodaj do koszyka</button>
              </div>
            </div>
        </div>
        ))}
    </div>
    </div>
  );
};

export default ProductList;
