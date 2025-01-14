import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { FaRupeeSign } from "react-icons/fa6";
import fssai from "../../assets/img/fssai.png";
import NPOP from "../../assets/img/NPOP-Certification.jpeg";
import '../CSS/App.css'
import { Link } from "react-router-dom";
export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [statusMap, setStatusMap] = useState({}); // To store status for each product

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const url =
        category === "all"
          ? "/api/v0/product/allproducts"
          : `/api/v0/product/products-by-category/${encodeURIComponent(category)}`;
      const response = await axios.get(url, { withCredentials: true });
      setProducts(response.data.data);
      setError(""); // Clear any previous error
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to load products. Please try again later.";
      setError(errorMessage);
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const handleAddToCart = async (productId) => {
    try {
      await axios
        .post(
          `/api/v0/cart/addtocart/${productId}`,
          {},
          { withCredentials: true },
        )
        .then((response) => {
          if (response.data.Message === "Product already in cart") {
            setStatusMap((prevStatusMap) => ({
              ...prevStatusMap,
              [productId]: "Product already in cart",
            }));
          } else {
            setStatusMap((prevStatusMap) => ({
              ...prevStatusMap,
              [productId]: "Product added to cart",
            }));
          }

          // Clear the status message after 3 seconds
          setTimeout(() => {
            setStatusMap((prevStatusMap) => ({
              ...prevStatusMap,
              [productId]: "",
            }));
          }, 2000);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          const message =
            error.response.data.message === "Unauthorized request"
              ? "Login first to add details in cart"
              : error.response.data.message;
          // setStatusMap((prevStatusMap) => ({
          //   ...prevStatusMap,
          //   [productId]: message,
          // }));
          alert(message);
        });
    } catch (error) {
      console.error("Error adding to cart:", error);
      setStatusMap((prevStatusMap) => ({
        ...prevStatusMap,
        [productId]: "Failed to add product to cart",
      }));
    }
  };

  if (loading) {
    return <Spinner message="Loading items..." />;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">All Products</h2>
      <div className="mb-3">
        <label htmlFor="categoryDropdown">Select Category:</label>
        <select
          id="categoryDropdown"
          className="form-select p-2 fs-3"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{
            background: 'transparent',
            borderRadius: ".5em",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            padding: '1em',
            border: "1px solid #90EE90",
            transition: 'transform 0.5s',
          }}
        >
          <option value="all">All</option>
          <option value="Green Vegetable">Green Vegetables</option>
          <option value="Red Vegetable">Red Vegetables</option>
          <option value="fruit">Fruits</option>
          {/* Add more options as needed */}
        </select>
      </div>
      {error ? (
        <div className="text-center">{error}</div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-3 mb-3 pcard" style={{ transform: 'transition 0.3s' }}>
              <div className="card p-20" style={{
                borderRadius: '1em', minHeight: '25em', maxWidth: "15em", background: 'transparent',
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(19px)",
                WebkitBackdropFilter: "blur(19px)",
                padding: '.2em',
                border: "1px solid #90EE90",
                transition: 'transform 0.5s',
              }}>
                <div className="card-body">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.name}
                    style={{ maxHeight: "auto", width: "50%" }}
                  />
                  {statusMap[product._id] && (
                    <p className="text-center text-success">
                      {statusMap[product._id]}
                    </p>
                  )}
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text">
                    {product.description.toString().substring(0, 100)}...
                  </p>
                  <p className="card-text fs-4">
                    Price: <FaRupeeSign /> {product.price}{" "}
                  </p>
                  <p className="card-text">Category: {product.category}</p>
                  <p className="card-text">Stock: {product.stockQuantity} Kg</p>
                  <div className="d-flex justify-content-center align-content-center mb-3">
                    <button
                      onClick={() => handleAddToCart(product._id)}
                      className="btn btn-primary me-2 fs-4"
                    >
                      Add to Cart
                    </button>
                    <button className="btn btn-success fs-4">Buy Now</button>
                  </div>
                  <div className="footer ps-5 pe-5 d-flex justify-content-between align-content-between align-items-center">
                    <p className="text-dark"> Verified by </p>
                    <div className="d-flex justify-content-center align-content-center">
                      <img src={fssai} style={{ width: '3em' }} alt="fssai logo" title="Food Safety And Standard Authority Of India" />
                      <img src={NPOP} style={{ width: '3em' }} alt="NPOP logo" title="National Program For Organic Production" />
                    </div>
                  </div>
                   <p className="text-center">Contact Our Verfied <Link to = '/doctor' className="text-primary">Doctor</Link></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
