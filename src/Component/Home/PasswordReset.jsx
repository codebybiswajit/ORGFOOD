import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "/api/v0/users/reset-password",
        {
          email,
          newPassword,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        },
      );
      if (response.status === 200) {
        setMessage(response.data.message);
        setEmail("");
        setNewPassword("");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Password reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner message="Resetting Password" />
      ) : (
        <div className="container mt-5">
          <h2 className="text-center">Reset Password</h2>
          <form
            onSubmit={handleSubmit}
            className="w-50 mx-auto w-auto  mt-4 p-5"
            style={{
              background: "rgba(255, 255, 255, 0.21)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="form-group">
              <label htmlFor="email" className="fs-2 form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control p-3 fs-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="newPassword" className="fs-2 form-label">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="form-control p-3 fs-4"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-success fs-3 rounded-4">
                Reset Password
              </button>
            </div>
            {message && (
              <p className="text-success text-center mt-4 fs-4">{message}</p>
            )}
            {error && (
              <p className="text-danger text-center mt-4 fs-4">{error}</p>
            )}
          </form>
          <p className="text-center fs-4 mt-4">
            Go back to{" "}
            <Link to="/login" className=" text-primary fs-3">
              Login
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
