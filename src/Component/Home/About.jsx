import React from "react";
import cate_2_left from "../../assets/img/m6.jpg";
import fssai from "../../assets/img/fssai.png";
import NPOP from "../../assets/img/NPOP-Certification.jpeg";
import PGS from "../../assets/img/pgs.jpg";

export default function About() {
  return (
    <div>
      <div className="about-2-area de-padding">
        <div
          className="container p-5"
          style={{
            background: "rgba(255, 255, 255, 0.21)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="about-2-wpr grid-2">
            <div className="about-2-left">
              <h5 className="hero-sub-title">About Us</h5>
              <h2 className="hero-title">
                We are Provide Best Organic Products.
              </h2>
              <div className="about-2-text">
                <p>
                  We are passionate about bringing you the finest organic foods,
                  grown with love and care. Our journey began with a simple
                  belief: that everyone deserves access to fresh, wholesome, and
                  chemical-free produce. We partner with dedicated farmers who
                  share our commitment to sustainable and eco-friendly
                  practices, ensuring that every bite you take is packed with
                  natural goodness.
                </p>
                <p className="mb-0">
                  From our farm to your table, we prioritize quality,
                  transparency, and the well-being of our planet. Join us in
                  celebrating the vibrant flavors and health benefits of organic
                  living. Together, we can make a positive impact on our health
                  and the environment, one delicious meal at a time. 🌱🍎🥦
                </p>
              </div>
              <a href="shop.html" className="tm-btn-2">
                Shop Now
                <i className="icofont-long-arrow-right"></i>
              </a>
            </div>
            <div className="about-2-right">
              <div className="cate-2-left-pic pos-rel">
                <img src={cate_2_left} alt="thumb" />
                <div className="cate-exp">
                  <h3>
                    we providing Best Services For <span>20</span> Years
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div className="container p-3 mb-5"
          style={{
            background: "rgba(255, 255, 255, 0.21)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}>
            <div className="row">
              <p className="text-center fs-1 fw-bold">Our Products Are Verified by</p>
              <div className="col-md-4 d-flex justify-content-between align-content-center " style={{maxHeight : '8em'}}>
                <img src={fssai} alt="Food Safety And Standard Authority Of India" />
                <img src={NPOP} alt="National Programme for Organic Production" />
                <img src={PGS} alt="Participatory Guarantee System"  />
              </div>
            </div>
          </div>
    </div>
  );
}
