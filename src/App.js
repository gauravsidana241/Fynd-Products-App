import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Addform from "./components/addForm";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margineTop: "20px",
  };

  async function fetchProducts() {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        setProducts(data);
        console.log("Fetched products:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function addProduct(product) {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        alert("Products succesfully added!");
        console.log("Product added: ", data);
        setProducts([...products, data]);
        setShowAdd(!showAdd);
      }
    } catch (error) {
      console.error("There was an error");
    }
  }

  async function deleteProduct(productId) {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        alert("Product succesfully deleted!");
        console.log("Product delted succesfully: ", data);
        const newProducts = products.filter(
          (product) => product._id !== productId
        );
        setProducts(newProducts);
      }
    } catch (error) {
      console.log("Error deleting product ", error);
    }
  }

  async function updateProduct(itemId, updatedProducts) {
    console.log("new Product changes: ", updatedProducts);
    try {
      const response = await fetch(`/api/products/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProducts),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        alert("Product succesfully updated!");
        console.log("succesffully updated: ", data);
        setProducts((prevProducts) => {
          return prevProducts.map((product) => {
            if (product._id === itemId) {
              return { ...product, ...updatedProducts };
            }
            return product;
          });
        });
      }
    } catch (error) {
      console.log("Error updating the product: ", error);
    }
  }

  return (
    <div className="App">
      <Navbar showAdd={showAdd} onShow={() => setShowAdd(!showAdd)} />
      {showAdd && <Addform onAdd={addProduct} />}
      <div className="container-md" style={containerStyle}>
        <table className="table table-hover">
          <thead className="thread-dark">
            <tr>
              <th scope="col">Name</th>
              {/* <th scope="col">Product Id</th> */}
              <th scope="col">Stock Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <Products
              product={products}
              onDelete={deleteProduct}
              onUpdate={updateProduct}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
