import React, { useEffect, useState } from "react";
import grass from "../../assets/img/tree/opacitygrass.png";
import tree from "../../assets/img/tree/1.png";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";

export default function Login({ Auth, Alert }) {
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginStatus(true); // Show spinner
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post("/api/v0/users/login", data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.status === 200) {
        localStorage.clear();
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("imageurl", response.data.data.user.avatar);
        setResult(response.data.message);
        Auth(true); // This should set isAuthenticated to true
        navigate("/");
      } else {
        localStorage.setItem("isAuthenticated", "false");
        setResult(response.data.message);
      }
    } catch (error) {
      setErr(error.response?.data?.message || "Log In Failed");
    } finally {
      setLoginStatus(false); // Hide spinner
    }
  };

  return (
    <>
      {loginStatus ? (
        <Spinner message="Logging In" />
      ) : (
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={styles.background}
        >
          <form
            id="FormData"
            onSubmit={handleSubmit}
            className="w-25"
            method="POST"
            style={styles.form}
          >
            <div className="p-4">
              <div className="header">
                <h3 className="text-center text-light">Log in</h3>
              </div>
              <div className="p-4">
                <label htmlFor="email" className="form-label text-light fs-3">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  style={styles.input}
                />
              </div>
              <div className="p-4">
                <label
                  htmlFor="password"
                  className="form-label text-light fs-3"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  style={styles.input}
                />
              </div>
              <div className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary form-control fs-2"
                  style={styles.button}
                >
                  Sign In
                </button>
              </div>
            </div>
            <div>
              <p style={styles.footer} className="text-center">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  style={styles.link}
                  className="text-decoration-none"
                >
                  Sign Up
                </Link>
              </p>
              <p
                className={`text-center ${result ? "text-success" : "text-danger"} p-4`}
              >
                {result || err}
              </p>
              <div className="position-relative">
                <img
                  src={grass}
                  className="img-fluid"
                  style={{ ...styles.bRadious }}
                  alt="Grass"
                />
                <img
                  src={tree}
                  className="img-fluid position-absolute"
                  style={{
                    ...styles.bRadious,
                    maxWidth: "50%",
                    bottom: "0",
                    left: "75%",
                    transform: "translateX(-50%)",
                  }}
                  alt="Tree"
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

const styles = {
  background: {
    marginBottom: "4em",
  },
  form: {
    padding: "0px",
    background:
      'linear-gradient(to bottom, green,white), url("../../assets/img/tree/opacitygrass.jpg")',
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  input: {
    width: "100%",
    fontSize: ".9em",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  footer: {
    textAlign: "center",
    color: "black",
    marginTop: "20px",
  },
  link: {
    color: "#00f",
    textDecoration: "underline",
  },
  bRadious: {
    borderRadius: "10px",
  },
};
