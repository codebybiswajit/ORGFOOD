import React, { useEffect, useState } from "react";
import logo from "./../../assets/img/logo/avatar.png";
import "../CSS/Profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import profileBg from "../../assets/img/bg/profile-bg.jpg";

export default function Profile() {
  const [data, setData] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBuyer, setIsBuyer] = useState(true);
  const [err, setErr] = useState("");
  const [logoutStatus, setLogoutStatus] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v0/users/profile", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 401) {
          localStorage.clear();
          setErr(
            "Your session has expired. Please refresh the page to log in.",
          );
          navigate("/login");
        } else {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (data.success) {
            setData(data.data);

            // Verify roles
            if (data.data.role === "buyer") {
              setIsBuyer(true);
              setIsSeller(false);
              setIsAdmin(false);
            } else if (data.data.role === "seller") {
              setIsSeller(true);
              setIsBuyer(false);
              setIsAdmin(false);
            } else if (data.data.role === "admin") {
              setIsAdmin(true);
              setIsBuyer(true);
              setIsSeller(true);
            }
          } else {
            setErr(data.Message);
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setErr(
          "Profile Details Not Found. Try Again Later. Refresh The Page to go to Login.",
        );
      }
    };
    fetchData();
  }, [navigate]);

  useEffect(() => {
    try {
      const timer = setInterval(() => {
        const datettime = new Date();
        setTime(datettime.toLocaleTimeString());
      }, 1000);
      setDate(new Date().toLocaleDateString());
      return () => clearInterval(timer); // Clear interval on unmount
    } catch (error) {
      console.log("Time Can't get now");
    }
  }, []);

  const handleLogout = async () => {
    try {
      setLogoutStatus(true);
      const response = await axios.post(
        "/api/v0/users/logout",
        {},
        { withCredentials: true },
      );
      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", "false");
        localStorage.setItem("imageurl", "");
        setLogoutStatus(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setLogoutStatus(false);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await axios.post(
        "/api/v0/users/remove",
        {},
        { withCredentials: true },
      );
      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", "false");
        setLogoutStatus(true);
        navigate("/register");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setLogoutStatus(false);
    }
  };

  return (
    <>
      {logoutStatus ? (
        <Spinner message="Logging Out " />
      ) : (
        <div className="text-center d-flex align-items-center justify-content-center h-auto">
          {err ? (
            <p>
              {err} <Link to="/login">Log in</Link>
            </p>
          ) : (
            data && (
              <div className="page-content page-container" id="page-content">
                <div className="padding">
                  <div className="row container d-flex justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card user-card-full mb-0"
                        style={{
                          background: `url(${profileBg}) no-repeat center center`,
                          backgroundSize: "cover",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <div className="row m-l-0 m-r-0 w-100">
                          <div className="col-sm-4 bg-c-lite-green user-profile shadow-lg d-flex align-items-center justify-content-center p-5 ">
                            <div className="card-block text-center text-white">
                              <div className="m-b-25 d-flex justify-content-center">
                                <img
                                  src={data.avatar ? data.avatar : logo}
                                  className="img-fluid rounded-circle"
                                  alt="User-Profile-Image"
                                />
                              </div>
                              <h6 className="f-w-600 fs-1 text-white name">
                                {data.name}
                              </h6>
                              {isSeller && (
                                <div className="d-flex justify-content-between align-content-around">
                                  <Link
                                    to={"/addItem"}
                                    className="btn btn-success fs-4 "
                                  >
                                    {" "}
                                    Add Item{" "}
                                  </Link>
                                  <Link
                                    to={"/viewItem"}
                                    className="btn btn-success fs-4"
                                  >
                                    {" "}
                                    View Item{" "}
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-8 mt-10">
                            <p className="text-muted float-end pe-3">
                              {date} {time}
                            </p>
                            <div className="card-block">
                              <h6 className="m-b-20 p-b-5 b-b-default f-w-900 fs-1 text-start">
                                Profile Details
                              </h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600 fs-2">Email</p>
                                  <h6 className="text-muted f-w-600 fs-3">
                                    {data.email}
                                  </h6>
                                </div>
                                <div className="col-sm-6">
                                  <p className="m-b-10 f-w-600 fs-2">Phone</p>
                                  <h6 className="text-muted f-w-600 text-light fs-3">
                                    {data.phoneNumber}
                                  </h6>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 fs-2">
                                    Address
                                  </h6>
                                  <div className="row ">
                                    <p className="text-muted f-w-600 fs-3">
                                      {data.address}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600 fs-2">
                                    Created On{" "}
                                  </h6>
                                  <div className="row text-center">
                                    <p className="text-muted f-w-600 fs-3">
                                      {data.createdAt.substring(0, 10)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="text-center text-muted">
                              Updated on {data.updatedAt.substring(0, 10)}
                            </p>
                            <div className="d-flex justify-content-center align-content-center mb-4 flex-wrap">
                              <button
                                className="btn btn-primary fs-4 me-3"
                                style={{ borderRadius: ".5em" }}
                                onClick={handleLogout}
                              >
                                Logout
                              </button>
                              <Link
                                to="/update"
                                className="btn btn-danger me-3 fs-4"
                                style={{ borderRadius: ".5em" }}
                              >
                                {" "}
                                Update{" "}
                              </Link>
                              <button
                                className="btn btn-danger fs-4 "
                                style={{ borderRadius: ".5em" }}
                                onClick={handleRemove}
                              >
                                {" "}
                                Delete{" "}
                              </button>
                              <Link
                                to="/update-password"
                                className="text-dark f-w-600 ms-3 fs-4"
                                style={{ borderRadius: ".5em" }}
                              >
                                {" "}
                                Update Password{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
