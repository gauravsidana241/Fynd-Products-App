import React, { useState } from "react";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import UpdateForm from "./UpdateForm";

function Products({ product, onDelete, onUpdate }) {
  const [showUpdate, setShowUpdate] = useState({});

  // const stylehere = {
  //   width: "18rem",
  //   margin: "20px",
  // };

  const toggleUpdateForm = (itemId) => {
    console.log(`here the itemid is: ${itemId}`);
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
        <React.Fragment key={item._id}>
          <tr>
            <>
              <th scope="row">{item.name}</th>
              {/* <td>{item._id}</td> */}
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="nav-link hover-effect"
                  type="button"
                  onClick={() => {
                    toggleUpdateForm(item._id);
                  }}
                >
                  <FaPencilAlt />
                </button>
              </td>
              <td>
                <button
                  className="nav-link hover-effect"
                  type="button"
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  <FaTrash />
                </button>
              </td>
            </>
          </tr>
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
        </React.Fragment>
      ))}
    </>
  );
}

export default Products;
