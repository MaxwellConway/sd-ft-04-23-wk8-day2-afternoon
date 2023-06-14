import React from "react";

export default function FoodCard({ name, image, description, price }) {
  return (
    <div className="container">
      <div className="food-card">
        <div className="image-container">
          <img className="image" src={image} alt={name} />
        </div>
        <div className="below-picture">
          <div className="food-name">
            <h3>{name}</h3>
          </div>
          <div className="description-price-container">
            <div className="description-container">
              <p>{description}</p>
            </div>
            <div className="price-container">
              <p>${price.toFixed(2)}</p>
            </div>
          </div>
          <div className="button-container">
            <button className="buy-button">Buy</button>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
