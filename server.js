const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const router = express.Router();

const app = express();
const PORT = 3001;
mongoose
  .connect("mongodb://127.0.0.1:27017/FyndProducts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database."))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema(
  {
    name: String,
    quantity: Number,
    price: Number,
  },
  {
    collection: "Products",
    versionKey: false,
  }
);

const Product = mongoose.model("Products", productSchema);

app.use(express.static(path.join(__dirname, "public")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());

app.get("/api/products", async (req, res) => {
  try {
    console.log("in backend");
    const products = await Product.find();
    if (products) {
      console.log(products);
      res.json(products);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/products", async (req, res) => {
  const { name, quantity, price } = req.body;

  try {
    const newProduct = new Product({ name, quantity, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/api/products/:id", async (req, res) => {
  const productId = req.params.id;
  const { name, quantity, price } = req.body;

  console.log("Received productId:", productId);
  console.log("Received data:", { name, quantity, price });

  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        quantity,
        price,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndRemove(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
