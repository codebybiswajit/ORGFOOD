import React from "react";
import grass from "../../assets/img/tree/grass.jpg";
import m20 from "../../assets/img/m20.jpg";
import m21 from "../../assets/img/m21.jpg";
import m22 from "../../assets/img/m22.jpg";
import m23 from "../../assets/img/m23.jpg";
import m24 from "../../assets/img/m24.jpg";
import m25 from "../../assets/img/m25.jpg";
import m26 from "../../assets/img/m26.jpg";
import m27 from "../../assets/img/m27.jpg";
import m28 from "../../assets/img/m28.jpg";
import m30 from "../../assets/img/m30.jpg";
import m31 from "../../assets/img/m31.jpg";
import m1 from "../../assets/img/m1.jpg";
import m2 from "../../assets/img/m2.jpg";
import m3 from "../../assets/img/m3.jpg";
import m4 from "../../assets/img/m4.jpg";
import m5 from "../../assets/img/m5.jpg";
import { Link } from "react-router-dom";
export default function Gallery() {
  return (
    <div>
      <div className="project-area pos-rel de-padding">
        <div className="project-shape">
          <img src={grass} alt="thumb" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="site-title text-center">
                <h2>Our Gallery</h2>
                {/* <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae minus, dolorem
                  praesentium explicabo ipsam.
                </p> */}
              </div>
            </div>
          </div>
          <div className="sec-btn-area text-center">
            <div className="filter-menu-style-1 filter-menu-active">
              <button className="active" data-filter="*">
                All
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-3 filter-active magnific-mix-gallery">
            <div className="col-md-4 col-lg-4 col-xxl-4 filter-item cat-1 cat-2">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m20} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m21} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xxl-4 filter-item cat-3 cat-4">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m22} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m23} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xxl-4 filter-item cat-3 cat-4">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m24} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m25} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xxl-6 filter-item cat-2 cat-4 cat-1">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m26} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m27} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xxl-6 filter-item cat-2 cat-4 cat-1">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m28} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m30} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xxl-4 filter-item cat-1 cat-2 cat-3">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m31} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m1} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xxl-4 filter-item cat-1 cat-2 cat-4">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m2} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m3} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xxl-4 filter-item cat-1 cat-2 cat-4">
              <div className="proj-card">
                <div className="proj-img">
                  <img src={m4} alt="thumb" className="w-100" />
                  <div className="proj-overlay">
                    <div className="img-hover">
                      <ul>
                        <li>
                          <a href={m5} className="item popup-link">
                            <i className="icofont-eye-open"></i>
                          </a>
                        </li>
                        <li>
                          <Link to="/product" target="_blank">
                            <i className="icofont-external-link"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center load-more mt-100">
          <Link to="/product" className="tm-btn-2">
            Load More
            <i className="icofont-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
