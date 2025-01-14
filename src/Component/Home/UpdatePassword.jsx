import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v0/users/change-password",
        {
          oldPassword,
          newPassword,
        },
        {
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        setMessage("Password updated successfully");
        navigate("/profile");
      } else {
        setMessage("Failed to update password");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-transparent d-flex align-items-center justify-content-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="w-25 p-5"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 className="text-center mb-4 fs-3">Update Password</h3>
        <div className="mb-3">
          <label htmlFor="oldPassword" className="form-label">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            className="form-control"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-50 float-end fs-5"
          disabled={loading}
        >
          {loading ? (
            <Spinner message="Updating Password" />
          ) : (
            "Update Password"
          )}
        </button>
        {message && <p className="text-center mt-3">{message}</p>}
      </form>
    </div>
  );
}
