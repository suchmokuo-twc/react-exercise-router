import React, { Component } from "react";
import "./ProductDetails.css";

export class ProductDetails extends Component {
  render() {
    // BUG: state is undefined if it's not coming from /products.
    // consider using state management library like Redux/MobX or just fetch api again.
    const {
      id,
      name,
      price,
      quantity,
      desc,
    } = this.props.location.state.product;

    return (
      <div className="product-details">
        <p className="product-details-title">Product Details:</p>
        <p className="product-details-data">
          Name: {name}
          {"\n"}
          Id: {id}
          {"\n"}
          Price: {price}
          {"\n"}
          Quantity: {quantity}
          {"\n"}
          Desc: {desc}
          {"\n"}
          URL: /products/{id}
          {"\n"}
        </p>
      </div>
    );
  }
}
