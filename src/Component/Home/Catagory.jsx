import React from "react";
import shape4 from "../../assets/img/shape/shape-4.png";
import cate_2_pic1 from "../../assets/img/m3.jpg";
import cate_2_pic2 from "../../assets/img/bg/leaf.png";
import cate_2_pic3 from "../../assets/img/m4.jpg";
import cate_2_pic4 from "../../assets/img/m5.jpg";
import cate_2_pic5 from "../../assets/img/m6.jpg";
export default function Category() {
  return (
    <div className="cate-2-area pos-rel de-padding">
      <div className="cate-2-bottom-shape">
        <img src={shape4} alt="thumb" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="site-title text-center">
              <h2>Popular Categories</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cate-2-wpr cate-sol owl-carousel owl-theme">
          <div className="cate-2-box pos-rel">
            <div className="cate-2-shape">
              <img src={cate_2_pic2} alt="thumb" />
              <span className="cate-2-num">47</span>
            </div>
            <div className="cate-2-pic">
              <img src={cate_2_pic1} alt="thumb" />
            </div>
            <div className="cate-2-desc">
              <h2>Vegetable</h2>
              <p>
                The organic produce not only looks appealing but also promises
                health benefits, free from synthetic pesticides and fertilizers.
                These vegetables are perfect for creating nutritious and
                delicious meals, emphasizing the importance of organic farming
                for a healthier lifestyle. 🌱🍅🥔
              </p>
              <a href="shop.html" className="tm-btn-2">
                Shop Now
                <i className="icofont-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="cate-2-box pos-rel">
            <div className="cate-2-shape">
              <img src={cate_2_pic2} alt="thumb" />
              <span className="cate-2-num">47</span>
            </div>
            <div className="cate-2-pic">
              <img src={cate_2_pic3} alt="thumb" />
            </div>
            <div className="cate-2-desc">
              <h2>Fruits</h2>
              <p>
                These fruits often have a richer flavor and higher nutritional
                value, making them a healthier choice. By choosing organic,
                you’re supporting sustainable farming practices that are better
                for the environment and your well-being. 🍎🍇🍊
              </p>
              <a href="shop.html" className="tm-btn-2">
                Shop Now
                <i className="icofont-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="cate-2-box pos-rel">
            <div className="cate-2-shape">
              <img src={cate_2_pic2} alt="thumb" />
              <span className="cate-2-num">47</span>
            </div>
            <div className="cate-2-pic">
              <img src={cate_2_pic4} alt="thumb" />
            </div>
            <div className="cate-2-desc">
              <h2>Spices</h2>
              <p>
                Additionally, organic spices often have higher levels of
                beneficial nutrients and antioxidants, making them a healthier
                choice for your culinary creations. 🌿🌶️🍂
              </p>
              <a href="shop.html" className="tm-btn-2">
                Shop Now
                <i className="icofont-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="cate-2-box pos-rel">
            <div className="cate-2-shape">
              <img src={cate_2_pic2} alt="thumb" />
              <span className="cate-2-num">47</span>
            </div>
            <div className="cate-2-pic">
              <img src={cate_2_pic5} alt="thumb" />
            </div>
            <div className="cate-2-desc">
              <h2>Other</h2>
              <p>
                Additionally, organic foods often have higher nutritional value
                and better taste, providing a healthier and more flavorful
                option for consumers. By choosing organic, you’re supporting a
                system that prioritizes the well-being of both people and the
                planet. 🌾🥛🍗
              </p>
              <a href="shop.html" className="tm-btn-2">
                Shop Now
                <i className="icofont-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
