import React from "react";
import { useState } from "react";

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
    <tr>
      <td colSpan="7">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="productName" className="col-1 col-form-label">
              Name:
            </label>
            <div className="col">
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
            <label htmlFor="ProductQuantity" className="col-1 col-form-label">
              Quantity:
            </label>
            <div className="col">
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
            <label htmlFor="ProductPrice" className="col-1 col-form-label">
              Price:
            </label>
            <div className="col">
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
            <div className="col">
              <input type="submit" className="btn btn-dark rounded-0" />
            </div>
          </div>
        </form>
      </td>
    </tr>
  );
}

export default UpdateForm;
