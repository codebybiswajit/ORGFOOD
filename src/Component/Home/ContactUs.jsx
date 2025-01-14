import React from "react";
import { useState } from "react";
import bushRose from "../../assets/img/tree/bush-rose.png";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/feedback/contactus", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage(response.data.Message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="contact-us pos-rel de-padding">
        <div className="faq-tree">
          <img src={bushRose} alt="thumb" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title text-center">
                <h2>Contact Us</h2>
                <p className="mb-0">
                  Outlived no dwelling denoting in peculiar as he believed.
                  Behaviour excellent middleton be as it curiosity departure
                  ourselves very extreme future.
                </p>
              </div>
            </div>
          </div>
          <div
            className="contact-us-wpr p-5"
            style={{
              background: "rgba(255, 255, 255, 0.21)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="row g-5">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-content">
                  <div className="contact-bottom">
                    <div className="addr-box">
                      <div className="addr-box-single">
                        <div className="addr-icon">
                          <i className="icofont-google-map"></i>
                        </div>
                        <div className="addr-desc">
                          <h5>Office Address</h5>
                          <p className="mb-0">
                            Patia, Bhubaneswar
                            <br />
                            Odisha
                          </p>
                        </div>
                      </div>
                      <div className="addr-box-single">
                        <div className="addr-icon">
                          <i className="icofont-phone"></i>
                        </div>
                        <div className="addr-desc">
                          <h5>Phone Number</h5>
                          <p className="mb-0">
                            <a href="tel:+918114889427">+91-8114889427</a>
                          </p>
                        </div>
                      </div>
                      <div className="addr-box-single">
                        <div className="addr-icon">
                          <i className="icofont-email"></i>
                        </div>
                        <div className="addr-desc">
                          <h5>Email</h5>
                          <p className="mb-0">
                            <a href="mailto:codebybiswajit@gmail.com">
                              freelancerbiswajit@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <form
                  className="contact-form shadow-lg"
                  onSubmit={handleSubmit}
                  style={{ borderRadius: "3em" }}
                >
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-style-2 "
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          style={{ borderRadius: "3em" }}
                          placeholder="Your Full Name*"
                        />
                        <span className="alert alert-error"></span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control input-style-2"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={{ borderRadius: "3em" }}
                          placeholder="Your Email Address*"
                        />
                        <span className="alert alert-error"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-style-2"
                          name="phoneNo"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          style={{ borderRadius: "3em" }}
                          placeholder="Phone Number"
                        />
                        <span className="alert alert-error"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-style-2"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          style={{ borderRadius: "3em" }}
                          placeholder="Subject..."
                        />
                        <span className="alert alert-error"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control input-style-2"
                        name="message"
                        placeholder="Your Message..."
                        value={formData.message}
                        onChange={handleChange}
                        style={{ resize: "none", borderRadius: "3em" }}
                      ></textarea>
                      <div className="contact-sub-btn text-center">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          className="btn-4"
                        >
                          Send Message
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      </div>
                      <div className="alert-notification d-flex justify-content-center align-content-center align-items-center">
                        <div
                          id="message"
                          className="alert-msg text-center"
                        >
                          {message}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
