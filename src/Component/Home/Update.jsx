import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [avatar, setAvatar] = useState(null); // Separate state for avatar file
  const [updateStatus, setUpdateStatus] = useState(false); // Separate state for avatar file
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]); // Handle file input
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Before Sending:", formData); // Log form data before sending

    const updateData = new FormData();
    updateData.append("name", formData.name);
    updateData.append("email", formData.email);
    updateData.append("address", formData.address);
    if (avatar) {
      updateData.append("avatar", avatar);
    }

    try {
      setUpdateStatus(true);
      const response = await axios.post("/api/v0/users/update_user", formData, {
        withCredentials: true,
      });

      if (avatar) {
        const avatarResponse = await axios.patch(
          "/api/v0/users/avatar",
          updateData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          },
        );
        if (response.status === 200 && avatarResponse.status === 200) {
          localStorage.setItem("imageurl", response.data.data.avatar);
          setResponseMessage("Account details updated successfully");
        }
      } else {
        if (response.status === 200) {
          setResponseMessage("Account details updated successfully");
        }
      }
      navigate("/profile");
      setUpdateStatus(false);
    } catch (error) {
      console.error("Error updating account details:", error);
      setResponseMessage("Failed to update account details. Please try again.");
    }
  };

  return (
    <>
      {updateStatus ? (
        <Spinner message="Updating" />
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div
            className="bg-light p-5 rounded shadow-lg"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <h1 className="text-center mb-4">Update Account Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Avatar:</label>
                <input
                  type="file"
                  name="avatar"
                  onChange={handleFileChange}
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary text-center rounded-3 p-2 fs-4"
                >
                  Update
                </button>
              </div>
            </form>
            {responseMessage && (
              <p className="text-center text-success mt-3 fs-3">
                {responseMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
