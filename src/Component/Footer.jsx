import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo/logo.png";
import m8 from "../assets/img/m8.jpg";
import m9 from "../assets/img/m9.jpg";
import m10 from "../assets/img/m10.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BiRupee } from "react-icons/bi";

export default function Footer() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/copyright");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className=""
      style={{
        background: "rgba(255, 255, 255, 0.21)",
        borderRadius: "20px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <footer>
        <div className="footer-widget">
          <div className="container p-5">
            <div className="footer-widget-wpr de-padding">
              <div className="row g-5 d-flex justify-content-between">
                <div className="col-xl-3 col-md-6">
                  <div className="footer-widget-box about-us">
                    <div className="footer-logo">
                      <img src={logo} alt="thumb" style={{ width: "7em" }} />
                    </div>
                    <p>
                      Affronting discretion as do is announcing. Now months
                      esteem oppose nearer enable too six. as do nearer is
                      announcing.
                    </p>
                    <ul className="footer-social">
                      <li>
                        <Link to="/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="footer-widget-box list">
                    <h4 className="footer-widget-title">Quick Links</h4>
                    <ul className="footer-list lh-1">
                      <li>
                        <Link to="/about">
                          <i className="icofont-long-arrow-right"></i>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/product">
                          <i className="icofont-long-arrow-right"></i>
                          Our Product
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <i className="icofont-long-arrow-right"></i>
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/register">
                          <i className="icofont-long-arrow-right"></i>
                          Become a member
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="footer-widget-box in-touch">
                    <h4 className="footer-widget-title">Subscribe</h4>
                    <div className="footer-address">
                      <ul>
                        <li>
                          <strong>Address:</strong>
                          Patia, Bhubaneswar, Odisha 754001
                        </li>
                        <li>
                          <strong>Phone:</strong>
                          <Link to="tel:918114889426">+91 8114889426</Link>
                        </li>
                        <li>
                          <div className="footer-sub">
                            <form>
                              <input
                                type="text"
                                className="input-style-1"
                                placeholder="Enter Email.."
                              />
                              <button type="submit" className="input-btn">
                                <i className="flaticon-envelope"></i>
                              </button>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="copyright-content">
              <p className="text-dark fs-4">&copy;{data}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
