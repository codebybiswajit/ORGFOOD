import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import noImage from "../../assets/img/bg/no-image.jpg";

export default function ViewandUpdateProduct() {
  const [view, isView] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, isProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [error, setError] = useState("");
  const [err, setErr] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        isView(true);
        await axios
          .get("/api/v0/product/seller-products", {
            withCredentials: true,
          })
          .then((response) => {
            setProducts(response.data);
            isProduct(true);
            isView(false);
          })
          .catch((error) => {
            isView(false);
            isProduct(false);
            setError(error.response.data.message);
          });
      } catch (error) {
        isView(false);
        setError("Internal Server Error. Please Go To Profile Section.");
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const startEditing = (product) => {
    setEditingProduct(product._id);
    setUpdatedProduct(product);
  };

  const handleUpdate = async (productId) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedProduct.name);
      formData.append("description", updatedProduct.description);
      formData.append("price", updatedProduct.price);
      formData.append("category", updatedProduct.category);
      formData.append("stockQuantity", updatedProduct.stockQuantity);

      // Append the image file if a new file is selected
      if (fileInputRef.current.files[0]) {
        formData.append("imageFile", fileInputRef.current.files[0]);
      } else if (updatedProduct.imageLink) {
        formData.append("imageLink", updatedProduct.imageLink);
      }

      const response = await axios.put(
        `/api/v0/product/update/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        alert("Product updated successfully");
        setEditingProduct(null);
        // Update the products state with the new data
        setProducts(
          products.map((product) =>
            product._id === productId
              ? { ...product, ...response.data.data }
              : product,
          ),
        );
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setErr("Failed to update product. Please try again later.");
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.post(`/api/v0/product/delete/${productId}`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setProducts(products.filter((product) => product._id !== productId));
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setErr("Failed to delete product. Please try again later.");
    }
  };

  return (
    <>
      {view ? (
        <Spinner message="Loading Items" />
      ) : (
        <>
          {err ? (
            <p className="text-center">
              {err} <Link to="/profile">Profile</Link>
            </p>
          ) : (
            <div className="container mt-5">
              <h2 className="text-center">Your Products</h2>
              {!product && (
                <p className="text-center text-danger fs-3">
                  {error} click here to add item{" "}
                  <Link
                    to="/addItem"
                    className="ms-2 text-primary text-decoration-underline"
                  >
                    Add Item
                  </Link>
                </p>
              )}
              {product && (
                <div className="row">
                  {products.map((product) => (
                    <div key={product._id} className="col-md-4 mb-3" >
                      <div className="card"  style={{borderRadius : '1em'}}>
                        <div className="card-body"  style={{borderRadius : '1em'}}>
                          {editingProduct === product._id ? (
                            <div  style={{borderRadius : '1em'}}>
                              <input
                                type="text"
                                value={updatedProduct.name}
                                onChange={(e) =>
                                  setUpdatedProduct({
                                    ...updatedProduct,
                                    name: e.target.value,
                                  })
                                }
                                className="form-control mb-2"
                              />
                              <input
                                type="text"
                                value={updatedProduct.description}
                                onChange={(e) =>
                                  setUpdatedProduct({
                                    ...updatedProduct,
                                    description: e.target.value,
                                  })
                                }
                                className="form-control mb-2"
                              />
                              <input
                                type="text"
                                value={updatedProduct.price}
                                onChange={(e) =>
                                  setUpdatedProduct({
                                    ...updatedProduct,
                                    price: e.target.value,
                                  })
                                }
                                className="form-control mb-2"
                              />
                              <input
                                type="text"
                                value={updatedProduct.category}
                                onChange={(e) =>
                                  setUpdatedProduct({
                                    ...updatedProduct,
                                    category: e.target.value,
                                  })
                                }
                                className="form-control mb-2"
                              />
                              <input
                                type="text"
                                value={updatedProduct.stockQuantity}
                                onChange={(e) =>
                                  setUpdatedProduct({
                                    ...updatedProduct,
                                    stockQuantity: e.target.value,
                                  })
                                }
                                className="form-control mb-2"
                              />
                              <input
                                type="file"
                                ref={fileInputRef}
                                className="form-control mb-1"
                              />
                              <p className="text-center textmuted fs-4"> OR</p>
                              <input
                                type="text"
                                id="itemImageLink"
                                className="form-control mb-2"
                                placeholder="image address"
                                value={updatedProduct.imageLink}
                                onChange={(e) =>
                                  setUpdatedProduct({
                                    ...updatedProduct,
                                    imageLink: e.target.value,
                                  })
                                }
                              />
                              <div className="d-flex"  style={{borderRadius : '1em'}}>
                                <button
                                  className="btn btn-success me-2"
                                  onClick={() => handleUpdate(product._id)}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => setEditingProduct(null)} // Reset the editing state
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div
                                className="card mb-3"
                                style={{ maxWidth: "50em" }}
                              >
                                <div className="row g-0">
                                  <div className="col-md-4">
                                    <img
                                      src={product.imageUrl}
                                      className="img-fluid rounded-start"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        Name: {product.name}
                                      </h5>
                                      <p className="card-text">
                                        Description: {product.description}
                                      </p>
                                      <p className="card-text">
                                        Price: {product.price}
                                      </p>
                                      <p className="card-text">
                                        Category: {product.category}
                                      </p>
                                      <p className="card-text">
                                        Stock: {product.stockQuantity}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-center align-content-center">
                                <button
                                  className="btn btn-primary me-2 w-25 fs-3"
                                  onClick={() => startEditing(product)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger me-2 w-25 fs-3"
                                  onClick={() => handleDelete(product._id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="d-flex justify-content-center align-content-center">
                <Link to={"/profile"} className="btn btn-primary p-2 fs-2">
                  Back
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
