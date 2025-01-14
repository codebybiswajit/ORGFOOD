import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Proflogo from "./../assets/img/logo/avatar.png";

import logo from "./../assets/img/logo/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import "./CSS/Navbar.css";
import { FaUserDoctor } from "react-icons/fa6";

import customBg from "./../assets/img/bg//custom-bg-test.jpg";

export default function Navbar({ isAuthenticated }) {
  const [avatar, SetAvatar] = useState(null);
  useEffect(() => {
    const fetchImage = () => {
      try {
        const imageurl = localStorage.getItem("imageurl");
        SetAvatar(imageurl || Proflogo);
      } catch (error) {
        SetAvatar(Proflogo);
      }
    };
    fetchImage();
  });

  return (
    <>
      <div className="">
        <div
          style={{
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            // backdropFilter: 'blur(3.8px)',
            // WebkitBackdropFilter: 'blur(3.8px)',
            margin: 'auto',
            position: "relative",
          }}
        >
          <nav className=" navbar navbar-expand-lg bg-transparent fixed-top p-2 d-flex flex-column" style={{ zIndex: 1000, backdropFilter: 'blur(3.8px)', WebkitBackdropFilter: 'blur(8px)',fontWeight : '500', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <div className="container d-flex justify-content-between align-items-center">
              <div className="logo d-flex align-items-center">
                <Link to={"/"}>
                  <img
                    src={logo}
                    className="img-fluid fs-3"
                    alt="Logo"
                    width="90em"
                    title="Logo"
                  />
                </Link>
                <Link to={"/"}>
                  <div
                    className="d-flex flex-column ms-2 text-center"
                    title="Logo Slogan"
                  >
                    <p className="lh-sm mt-2 mb-0 text-dark fs-4">Org</p>
                    <p className="mb-0 text-dark fs-4">Food</p>
                  </div>
                </Link>
              </div>
              <div className="d-flex justify-content-between align-content-center ">
                <div className="d-flex">
                  <Link className="me-2 active" to="/home" title="Home">
                    Home
                  </Link>
                  <Link className="me-2" to="/about" title="About">
                    About
                  </Link>
                  <Link className="me-2" to="/product" title="Products">
                    Products
                  </Link>
                  <Link className="me-5" to="/contact" title="Contact">
                    Contact
                  </Link>
                </div>
                <div className="d-flex">
                  <Link to="/doctors" className="fs-1 text-primary fw-bolder" title="Contact doctors">
                    <FaUserDoctor />
                  </Link>
                  {isAuthenticated ? (
                    <Link to="/profile" className="ms-4 me-5 fs-1">
                      <img
                        src={avatar}
                        className="rounded-circle"
                        title="Profile Image"
                        alt=" Profile Image "
                        style={{ maxHeight: "1.5em" }}
                        />

                    </Link>
                  ) : (
                    <Link to="/login" className="text-primary ms-4 me-2">
                      Log In
                    </Link>
                  )}
                  <Link to="/cart" className="fs-1" title="Cart">
                    <FiShoppingCart />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="d-flex justify-content-center "></div>
      </div>
      <p className="text-center text-primary text-dark mt-70">
        If any error happens , Please refresh the page
      </p>
    </>
  );
}
