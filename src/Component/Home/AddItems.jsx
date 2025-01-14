import React, { useState, useRef } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddItems() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState(""); // Set default value if needed
  const [itemStockQuantity, setItemStockQuantity] = useState("");
  const [itemImageFile, setItemImageFile] = useState(null); // Change to handle file
  const [itemImageLink, setItemImageLink] = useState(""); // Handle image link
  const [adding, isAdding] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(); // Create a ref for the file input
  const navigate = useNavigate();

  const categoryOptions = ["fruit", "Green Vegetable", "Red Vegetable"]; // Define your categories

  const handleAddItem = async () => {
    isAdding(true);
    const formData = new FormData();
    formData.append("name", itemName);
    formData.append("description", itemDescription);
    formData.append("price", itemPrice);
    formData.append("category", itemCategory);
    formData.append("stockQuantity", itemStockQuantity);

    if (itemImageFile) {
      formData.append("imageFile", itemImageFile); // Append file
    } else if (itemImageLink) {
      formData.append("imageLink", itemImageLink); // Append link
    }

    try {
      const response = await axios.post(
        "/api/v0/product/addproduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );
      console.log(response);
      if (response.status === 201) {
        isAdding(false); // Reset file input
        setItemName("");
        setItemDescription("");
        setItemPrice("");
        setItemCategory("");
        setItemStockQuantity("");
        setItemImageFile(null);
        setItemImageLink("");
        setMessage(response.data.Message);
        // navigate('/profile');
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again later.");
    }
  };

  return (
    <>
      {adding ? (
        <Spinner message="Product Adding" />
      ) : (
        <div className="container mt-5">
          <h2 className="text-center">Add Item</h2>
          {
          (message && (
            <p className="text-primary text-center fs-4 ">
              {message} click Add Item button to add another one or back button to
              go to profile
            </p>)
          )}
          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemName">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              className="form-control p-3 fs-4"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemDescription">
              Item Description
            </label>
            <input
              type="text"
              id="itemDescription"
              className="form-control p-3 fs-4"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              style={{ resize: "none" }}
            ></input>
          </div>
          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemPrice">
              Item Price
            </label>
            <input
              type="number"
              id="itemPrice"
              className="form-control p-3 fs-4"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemCategory">
              Item Category
            </label>
            <select
              id="itemCategory"
              className="form-control p-3 fs-4"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a Category
              </option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemStockQuantity">
              Stock Quantity
            </label>
            <input
              type="number"
              id="itemStockQuantity"
              className="form-control p-3 fs-4"
              value={itemStockQuantity}
              onChange={(e) => setItemStockQuantity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemImageFile">
              Image File
            </label>
            <input
              type="file"
              id="itemImageFile"
              className="form-control p-3 fs-4"
              onChange={(e) => setItemImageFile(e.target.files[0])}
            />{" "}
            {/* Handle file upload */}
          </div>
          <p className="text-center fs-4 text-muted">OR</p>
          <div className="form-group">
            <label className="fs-2 form-label" htmlFor="itemImageLink">
              Image Link
            </label>
            <input
              type="text"
              id="itemImageLink"
              className="form-control p-3 fs-4"
              value={itemImageLink}
              onChange={(e) => setItemImageLink(e.target.value)}
            />{" "}
            {/* Handle image link */}
          </div>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-success mt-3 fs-3 rounded-4 me-2"
              onClick={handleAddItem}
            >
              {" "}
              Add Item{" "}
            </button>
            <Link
              to={"/profile"}
              className="btn btn-success mt-3 fs-3 rounded-4"
            >
              {" "}
              Back{" "}
            </Link>
          </div>
        </div>
      )}
      {message && (
        <p className="text-primary text-center fs-4 ">
          {message} click Add Item button to add another one or back button to
          go to profile
        </p>
      )}
    </>
  );
}
