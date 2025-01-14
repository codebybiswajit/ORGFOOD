import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "./../assets/img/logo/avatar.png";
import profileBg from "../assets/img/bg/profile-bg.jpg";

export default function AdminControlUser() {
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

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/admin/user/${userId}`, {
        withCredentials: true,
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUpdatedDetails(user);
  };

  const handleUpdate = async (userId) => {
    try {
      const response = await axios.put(
        `/api/admin/user/${userId}`,
        updatedDetails,
        { withCredentials: true },
      );
      setUsers(
        users.map((user) => (user._id === userId ? response.data.user : user)),
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails({ ...updatedDetails, [name]: value });
  };

  const styles = {
    userCard: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      width: "100%",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "20px",
    },
    userDetails: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      flexGrow: 1,
    },
    inputContainer: {
      gap: "10px",
    },
    input: {
      width: "100%",
    },
  };

  return (
    <div
      className="pt-10 pb-100"
      style={{
        background: `transparent`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      {!isAdmin ? (
        <p className="text-center fs-1 text-danger">Admin Access Required</p>
      ) : (
        <>
          {error && <p className="text-center fs-1">{error}</p>}

          <div
            className="container d-flex flex-column flex-wrap justify-content-center align-content-center p-5 "
            // style={{
            //   background: "rgba(255, 255, 255, 0.2)",
            //   borderRadius: "16px",
            //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            //   backdropFilter: "blur(5px)",
            //   WebkitBackdropFilter: "blur(5px)",
            //   border: "1px solid rgba(255, 255, 255, 0.3)",
            // }}
          >
            <p className="d-flex justify-content-end align-content-center text-dark">
              {" "}
              no of users : {users.length}
            </p>
            {users.map((user) => (
              <div
                key={user._id}
                className="card shadow-lg"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {editingUser && editingUser._id === user._id ? (
                  <div
                    style={styles.userDetails}
                    className="d-flex flex-row flex-wrap p-3 rounded-5"
                  >
                    <div
                      style={styles.inputContainer}
                      className="d-flex flex-row rounded-5"
                    >
                      <input
                        type="text"
                        name="name"
                        value={updatedDetails.name}
                        onChange={handleInputChange}
                        style={styles.input}
                      />
                      <input
                        type="email"
                        name="email"
                        value={updatedDetails.email}
                        onChange={handleInputChange}
                        style={styles.input}
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        value={updatedDetails.phoneNumber}
                        onChange={handleInputChange}
                        style={styles.input}
                      />
                      <input
                        type="text"
                        name="address"
                        value={updatedDetails.address}
                        onChange={handleInputChange}
                        style={styles.input}
                      />
                      <input
                        type="text"
                        name="role"
                        value={updatedDetails.role}
                        onChange={handleInputChange}
                        style={styles.input}
                      />
                    </div>
                    <div
                      style={styles.actions}
                      className="d-flex flex-row justify-content-center align-content-center"
                    >
                      <button
                        className="btn btn-primary fs-4 me-2"
                        onClick={() => handleUpdate(user._id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-primary fs-4"
                        onClick={() => setEditingUser(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="card-body shadow-lg bg-transparent rounded-5 "
                    style={styles.userDetails}
                  >
                    <img
                      src={user.avatar ? user.avatar : avatar}
                      alt="Avatar"
                      className="img-fluid rounded-circle"
                      style={{ maxHeight: "5em" }}
                    />
                    <div className="d-flex flex-row flex-wrap ">
                      <p className="me-4">
                        <strong>ID:</strong> {user._id}
                      </p>
                      <p className="me-4">
                        <strong>Name:</strong> {user.name}
                      </p>
                      <p className="me-4">
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p className="me-4">
                        <strong>Role:</strong> {user.role}
                      </p>
                      <p className="me-4">
                        <strong>Address:</strong> {user.address}
                      </p>
                      <p className="me-4">
                        <strong>Phone Number:</strong> {user.phoneNumber}
                      </p>
                    </div>
                    <div
                      className="d-flex justify-content-between align-content-center flex-row"
                      style={styles.actions}
                    >
                      <button
                        className="btn btn-primary fs-4 me-2"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary fs-4 "
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
