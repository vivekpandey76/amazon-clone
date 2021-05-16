import React from "react";
import "./Product.css";

function Product({ title, image, prize, rating }) {
  return (
    <div className="product">
      <div className="product__title">
        <p className="product__info">{title}</p>
        <p className="product__prize">
          <small>₹ </small>
          <strong>{prize}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product1_img" className="P" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
