import React from "react";
import hdr_2_pic from "../../assets/img/m1.jpg";
import hdr_3_pic from "../../assets/img/m2.jpg";
import { Link } from "react-router-dom";
import "../CSS/Hero.css";
import customBg from "./../../assets/img/bg/custom-bg-test.jpg";
// import heroLast from "./../../assets/img/bg/herolast.jpg";

export default function Hero() {
  return (
    <>
      <div
        className="container-fluid h-auto pb-50 pt-40   "
        style={{
          background: 'rgba(255, 255, 255, 0.14)', 
          borderRadius: '16px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
          backdropFilter: 'blur(3.8px)', 
          WebkitBackdropFilter: 'blur(3.8px)', 
          border: '1px solid rgba(255, 255, 255, 0.3)', 
          padding: '20px', 
          maxHeight: '100%', 
          overflowY: 'auto', 
          overflowX: 'auto', 
          width: '95%', 
          margin: 'auto'
        }}
      >
        <div
          id="carouselExampleCaptions"
          className="  container-fluid carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className=" container carousel-inner">
            <div className="carousel-item active">
              <div className="h-auto d-flex align-items-center">
                <div className="row w-100 mx-auto">
                  <div className="col-md-12">
                    <div className="p-5">
                      <div className="row d-flex">
                        <div className="col-12 col-md-6 col-sm-12 container">
                          <h2 className="container ms-5  hero-title">
                            Providing Tasty &amp; Healthy Food
                          </h2>
                          <p className=" container-fluid ms-5 w-75">
                            Offering healthy and tasty food is about more than
                            just the ingredients—it's a commitment to nurturing
                            both body and soul. By using fresh, locally-sourced
                            produce and lean proteins, and incorporating vibrant
                            herbs and spices, we create meals that are not only
                            packed with nutrients but bursting with flavor. This
                            approach ensures that every bite is a delightful
                            experience, transforming the way we think about
                            nutrition. We're not just filling plates; we're
                            cultivating wellness and joy in every meal, one
                            wholesome, delicious bite at a time.
                          </p>
                        </div>
                        <div className="col-md-6 col-sm-12 justify-content-between align-items-center">
                          <img
                            src={hdr_2_pic}
                            className="w-100 img-fluid bounce rounded-pill"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container h-auto d-flex align-items-center">
                <div className="row w-100 mx-auto">
                  <div className="col-md-12">
                    <div className="p-5">
                      <div className="row d-flex">
                        <div className="col-md-6 col-sm-12 container">
                          <h2 className="container ms-5  hero-title">
                            Organic And Healthy Food
                          </h2>
                          <p className=" container-fluid ms-5 w-75">
                            Organic and healthy food is a celebration of
                            nature's purest offerings. Free from synthetic
                            pesticides, GMOs, and harmful additives, organic
                            foods are grown in harmony with the environment,
                            ensuring sustainability for future generations. By
                            choosing organic, you not only embrace better health
                            but also support a farming system that values
                            biodiversity, soil health, and clean water. These
                            foods, rich in nutrients and untouched by artificial
                            processes, offer a genuine taste of nature, making
                            every meal a step toward a healthier, more balanced
                            life. Eating organic isn't just a choice; it's a
                            commitment to wellness and our planet.
                          </p>
                        </div>
                        <div className="col-md-6 col-sm-12 justify-content-between align-items-center">
                          <img
                            src={hdr_3_pic}
                            className="w-100 img-fluid bounce rounded-pill"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <div className="">
        <img src={heroLast} className=" img-fluid h-25" alt="" />
      </div> */}
    </>
  );
}
