import React, { useState } from "react";
import mens_shirt from "../images/mens_shirt.avif";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import UpdateForm from "./UpdateForm";

function Products({ product, onDelete, onUpdate }) {
  const [showUpdate, setShowUpdate] = useState({});
  const [minimize, setMinimize] = useState({});

  const stylehere = {
    width: "18rem",
    margin: "20px",
  };

  const toggleUpdateForm = (itemId) => {
    console.log(`here the itemid is: ${itemId}`);
    if (minimize[itemId] === undefined) {
      setMinimize((prevMinimize) => ({
        ...prevMinimize,
        [itemId]: true, // Set it to false initially to show details
      }));
    } else {
      setMinimize((prevMinimize) => ({
        ...prevMinimize,
        [itemId]: !prevMinimize[itemId],
      }));
    }

    setShowUpdate((prevForms) => ({
      ...prevForms,
      [itemId]: !prevForms[itemId],
    }));
  };

  function handleDelete(itemId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Product?"
    );
    if (confirmDelete) {
      onDelete(itemId);
    } else {
      console.log("Delete Canceled");
    }
  }

  return (
    <>
      {product.map((item) => (
        <div key={item._id} className="card" style={stylehere}>
          <img className="card-img-top" src={mens_shirt} alt="Card image cap" />
          {!minimize[item._id] && (
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6>Stock left: {item.quantity}</h6>
              <h6>MRP: ₹{item.price}</h6>
            </div>
          )}

          <button
            className="btn btn-dark rounded-0"
            type="button"
            onClick={() => {
              toggleUpdateForm(item._id);
            }}
          >
            {minimize[item._id] ? (
              <>
                Hide Details <FaPencilAlt />
              </>
            ) : (
              <>
                Edit Details <FaPencilAlt />
              </>
            )}
          </button>
          {showUpdate[item._id] && (
            <UpdateForm
              pName={item.name}
              pQuantity={item.quantity}
              pPrice={item.price}
              itemId={item._id}
              onUpdate={onUpdate}
              toggle={toggleUpdateForm}
            />
          )}
          <div className="card-footer d-flex justify-content-end">
            <a
              className="nav-link hover-effect"
              type="button"
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              <FaTrash />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
