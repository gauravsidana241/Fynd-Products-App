import React from "react";
import { useState, useEffect } from "react";

function UpdateForm({ pName, pQuantity, pPrice, onUpdate, itemId, toggle }) {
  const [productName, setProductName] = useState(pName || "");
  const [productQuantity, setProductQuantity] = useState(pQuantity || 0);
  const [productPrice, setProductPrice] = useState(pPrice || 0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!productName || !productQuantity || !productPrice) {
      alert("One or more fiels are empty");
      return;
    }
    const parsedQuantity = parseInt(productQuantity);
    const parsedPrice = parseInt(productPrice);

    onUpdate(itemId, {
      name: productName,
      quantity: parsedQuantity,
      price: parsedPrice,
    });
    toggle(itemId);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control rounded-0"
          id="productName"
          value={productName}
          placeholder="Enter Product Name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control rounded-0"
          id="ProductQuantity"
          value={productQuantity}
          placeholder="Enter Product Quantity"
          onChange={(e) => {
            setProductQuantity(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control rounded-0"
          id="ProductPrice"
          value={productPrice}
          placeholder="Enter Product Price"
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
      </div>
      <input type="submit" className="btn btn-dark rounded-0" />
    </form>
  );
}

export default UpdateForm;
