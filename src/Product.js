import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, image, prize, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        prize: prize,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
