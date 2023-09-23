import React from "react";
import { useState } from "react";

function Addform({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity || !price) {
      alert("Please fill in all the details");
      return;
    }
    if (quantity > 100) {
      alert("the quantity entered is too high");
      return;
    }

    onAdd({ name, quantity, price });

    setName("");
    setQuantity("");
    setPrice("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="form-group">
          <label htmlFor="ProductName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="ProductName"
            value={name}
            placeholder="Enter Product Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ProductPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="ProductPrice"
            value={price}
            placeholder="Enter Product Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ProductQuantity">Product Quantity</label>
          <input
            type="number"
            className="form-control"
            id="ProductQuantity"
            value={quantity}
            placeholder="Enter Product Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <input type="submit" className="btn btn-dark" />
      </div>
    </form>
  );
}

export default Addform;
