import React from "react";
import tree4 from "../../assets/img/tree/4.png";
import snake from "../../assets/img/tree/snake.png";
import m9 from "../../assets/img/m9.jpg";
import m14 from "../../assets/img/m14.jpg";
import m15 from "../../assets/img/m15.jpg";
import m16 from "../../assets/img/m16.jpg";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <div className="products-area pos-rel de-padding">
        <div className="product-tree">
          <img src={tree4} alt="thumb" />
          <img src={snake} className="up-move" alt="thumb" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="site-title text-center">
                <h2>Our Products</h2>
                <p className="mb-0">
                  Join us on a journey towards a healthier lifestyle and a
                  greener planet. With <b>Org Food</b> , you can savor the true
                  taste of organic goodness in every bite. 🌱🍇🥦
                </p>
              </div>
            </div>
          </div>
          <div className="products-wpr grid-4">
            <div
              className="products-box"
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="products-pic">
                <img src={m9} alt="thumb" />
                <ul className="carts d-flex align-items-center">
                  <li>
                    <Link to = "/">
                      <i className="icofont-cart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-heart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-eye-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="products-desc">
                <Link href="product-single.html" target="_blank">
                  <h5>Organic Mixed Vegetables 🥕🥦🍅</h5>
                </Link>
                <p>
                  Our organic mixed vegetables are a vibrant medley of nature’s
                  finest produce. Each pack includes a variety of fresh,
                  seasonal vegetables grown without synthetic pesticides or
                  fertilizers.
                </p>
                <div className="products-price">
                  <span>
                    Starts Form 
                    <BiRupee />
                    70{" "}
                    <del>
                      <BiRupee />
                      150
                    </del>
                  </span>
                </div>
                <div className="add-to-cart">
                  <Link to = "/product" className="cart-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="products-box"
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="products-pic">
                <img src={m14} alt="thumb" />
                <ul className="carts d-flex align-items-center">
                  <li>
                    <Link to = "/">
                      <i className="icofont-cart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-heart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-eye-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="products-desc">
                <Link href="product-single.html" target="_blank">
                  <h5>Organic Fruit and Nut Mix 🍎🌰🍇</h5>
                </Link>
                <p>
                  All sourced from certified organic farms. This mix includes
                  juicy raisins, sweet dried apricots, and a variety of nuts
                  like almonds and walnuts.
                </p>
                <div className="products-price">
                  <span>
                    <BiRupee />
                    Starts Form
                    30{" "}
                    <del>
                      <BiRupee />
                      80
                    </del>
                  </span>
                </div>
                <div className="add-to-cart">
                  <Link to = "/" className="cart-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="products-box"
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="products-pic">
                <img src={m15} alt="thumb" />
                <ul className="carts d-flex align-items-center">
                  <li>
                    <Link to = "/">
                      <i className="icofont-cart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-heart-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="products-desc">
                <Link href="product-single.html" target="_blank">
                  <h5>Organic Herb and Spice Mix 🌿🌶️🍂</h5>
                </Link>
                <p>
                  Our organic herb and spice mix is a carefully curated
                  selection of aromatic herbs and spices, perfect for enhancing
                  the flavor of your dishes. This blend includes basil, oregano,
                  turmeric, and more, all grown without synthetic chemicals.{" "}
                </p>
                <div className="products-price">
                  <span>
                    <BiRupee />
                    Starts Form
                    50{" "}
                    <del>
                      <BiRupee />
                      70
                    </del>
                  </span>
                </div>
                <div className="add-to-cart">
                  <Link to = "/" className="cart-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="products-box"
              style={{
                background: "rgba(255, 255, 255, 0.21)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="products-pic">
                <img src={m16} alt="thumb" />
                <ul className="carts d-flex align-items-center">
                  <li>
                    <Link to = "/">
                      <i className="icofont-cart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-heart-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to = "/">
                      <i className="icofont-eye-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="products-desc">
                <Link href="product-single.html" target="_blank">
                  <h5>Organic Grain Blend 🌾🍚</h5>
                </Link>
                <p>
                  Our organic grain blend combines the best of whole grains,
                  including quinoa, brown rice, and millet. This nutritious mix
                  is rich in fiber, protein, and essential nutrients, making it
                  a versatile base for salads, bowls, or side dishes. Enjoy the
                  hearty and wholesome flavors of grains grown with care and
                  respect for the environment{" "}
                </p>
                <div className="products-price">
                  <span>
                    Starts Form
                    <BiRupee />
                    80{" "}
                    <del>
                      <BiRupee />
                      100
                    </del>
                  </span>
                </div>
                <div className="add-to-cart">
                  <Link to = "/" className="cart-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="load-more text-center mt-100">
            <Link to="/product" className="tm-btn-2">
              Load More
              <i className="icofont-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
