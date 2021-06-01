import React from "react";
import "../../../Styles/Components/Product.scss";

export default function Product({product}) {

  return (
    <div className="row space-between product-card">
      <div className="product-info">
        <div className="product-title">{product.name}</div>
        <div className="product-detail">
          <span className="detail-style">{product.description}</span>
          <div className="product-price">
            <span className="price-style">{product.price}</span>
          </div>
        </div>
      </div>
      <div className="product-image">
          <div className="image-container">
          <img
          src={product.imgProduct}
          style={{
            borderRadius: "10px",
          }}
          alt={product.name}
          className="image"
        />
          </div>        
      </div>
    </div>
  );
}
