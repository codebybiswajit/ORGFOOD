import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "./../assets/img/logo/avatar.png";
import profileBg from "../assets/img/bg/profile-bg.jpg";
import { Link, Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminControlUser from "./AdminControlUser";
import ContactRequest from "./ContactRequest";
export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({});
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/admin/users", {
          withCredentials: true,
        });
        setIsAdmin(true);
        setUsers(response.data);
      } catch (error) {
        setIsAdmin(false);
        setError(error.response?.data?.message || "Failed to load users");
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div
      className=" pt-10 pb-100"
      style={{
        background: `url(${profileBg}) no-repeat center center`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className="container text-dark pt-10"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        {!isAdmin ? (
          <p className="text-center fs-1 text-danger">Admin Access Required</p>
        ) : (
          <>
            <h1 className="text-center">Admin Dashboard</h1>
            {error && <p className="text-center fs-1">{error}</p>}
            <div className="row d-flex justify-content-between">
              {users.name}
            </div>
            <div className=" container text-white row ">
              <div className="col-md-2 mt-90 h-auto">
                <div className="container d-flex flex-column text-white justify-content-end lh-lg">
                  <Link
                    to={"/admin/user"}
                    className="text-dark f-w-600 align-self-end"
                  >
                    Users
                  </Link>
                  <Link
                    to={"/admin/contact-requests"}
                    className="text-dark f-w-600 align-self-end"
                  >
                    Contact Details
                  </Link>
                </div>
              </div>
              <div className="col-md-10">
                <div className="container-fluid">
                  <Routes>
                    <Route path="user" element={<AdminControlUser />} />
                    <Route
                      path="/contact-requests"
                      element={<ContactRequest />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
