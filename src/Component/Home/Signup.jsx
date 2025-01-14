import React, { useEffect, useState } from "react";
import grass from "../../assets/img/tree/opacitygrass.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState("");
  const [registerUserStatus, setregisterUserStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setregisterUserStatus(true); // Show spinner
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/v0/users/register", {
        method: "POST",
        body: formData,
        credentials: "include", // Ensure credentials are included
      });
      const resultresponse = await response.json();
      if (response.ok) {
        setStatus(response.status);
        setResult(resultresponse.message); // Ensure the key matches
        // Auth(true);
        navigate("/login");
      } else {
        console.log(resultresponse);
        setResult(resultresponse.message);
      }
    } catch (error) {
      setResult(error.message || "Registration Failed");
    } finally {
      setregisterUserStatus(false); // Hide spinner
    }
  };


  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={styles.background}
    >
      <form
        id="registerForm"
        onSubmit={handleSubmit}
        className="contact-form w-50 h-100"
        style={styles.form}
      >
        <div className="p-4">
          <div className="header mt-auto">
            <h3 className="text-center text-light">Register</h3>
          </div>
          <div className="d-flex justify-content-between">
            <div className="p-4 w-100">
              <label htmlFor="name" className="form-label text-light fs-3">
                Name:{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
                style={styles.input}
              />
            </div>
            <div className="p-4 w-100">
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
          </div>
          <div className="d-flex justify-content-between">
            <div className="p-4 w-100">
              <label
                htmlFor="phoneNumber"
                className="form-label text-light fs-3"
              >
                Phone Number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="form-control"
                required
                style={styles.input}
              />
            </div>
            <div className="p-4 w-100">
              <label htmlFor="password" className="form-label text-light fs-3">
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
          </div>
          <div className="d-flex justify-content-between align-content-center">
            <div className="p-4 w-100">
              <label htmlFor="address" className="form-label text-light fs-3">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                required
                style={styles.input}
              />
            </div>
            <div className="p-4 w-100">
              <label htmlFor="address" className="form-label text-light fs-3">
                You Are
              </label>
              <select name="role" className="w-100 form-select fs-4 p-3" id="">
                <option value="buyer" className="fs-4">
                  Buyer
                </option>
                <option value="seller" className="fs-4">
                  Seller
                </option>
              </select>
            </div>
          </div>
          <div className="p-4">
            <button
              type="submit"
              className="btn btn-primary form-control fs-2"
              style={styles.button}
            >
              Register
            </button>
          </div>
        </div>
        <div>
          <p className="text-dark text-center" style={styles.footer}>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-decoration-none text-success"
              style={styles.link}
            >
              Log In
            </Link>
          </p>
          {status === 201 ? (
            <p className="text-success text-center fs-4">
              {result}, Please{" "}
              <Link to="/login" className="text-danger">
                Log In{" "}
              </Link>
              Here
            </p>
          ) : (
            <p className="text-danger text-center fs-4 ">{result}</p>
          )}
          <div className="d-flex rounded-bottom-4">
            <img src={grass} className="image-fluid" style={styles.bRadious} />
          </div>
        </div>
      </form>
    </div>
  );
}

const styles = {
  background: {
    backdropFilter: "blur(10px)",
    marginTop: "4em",
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
