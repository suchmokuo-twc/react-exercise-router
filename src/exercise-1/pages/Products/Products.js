import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiData from "../../../exercise-2/mockups/data.json";
import "./Products.css";

export class Products extends Component {
  constructor() {
    super();

    this.data = Object.values(apiData);
  }

  render() {
    const { data } = this;
    const { url } = this.props.match;

    return (
      <div className="products">
        <p>All Products:</p>

        {data.map(({ name, id }) => (
          <Link
            key={name}
            to={{
              pathname: `${url}/${id}`,
              state: { product: this.getProductById(id) },
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    );
  }

  getProductById(id) {
    const { data } = this;

    return data.find((d) => d.id === id);
  }
}
