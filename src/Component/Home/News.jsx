import React from "react";
import m7 from "../../assets/img/m7.jpg";
import m8 from "../../assets/img/m8.jpg";
export default function News() {
  return (
    <div>
      <div className="blog-area bg-theme de-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="site-title wh text-center">
                <h2>Latest News</h2>
                <p className="mb-0">
                  Outlived no dwelling denoting in peculiar as he believed.
                  Behaviour excellent middleton be as it curiosity departure
                  ourselves very extreme future.
                </p>
              </div>
            </div>
          </div>
          <div className="blog-wpr grid-3">
            <div className="blog-box">
              <div className="blog-pic">
                <img src={m7} alt="thumb" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont-user-alt-4"></i>
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-heart"></i>
                        33 likes
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-comment"></i>
                        37 Comments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-desc">
                  <a href="single.html">
                    <h4>departure ourselves very as he peculiar believed</h4>
                  </a>
                  <p>
                    All sourced from certified organic farms. This mix includes
                    juicy raisins, sweet dried apricots, and a variety of nuts
                    like almonds and walnuts.
                  </p>
                  <div className="price-bottom">
                    <a href="single.html" className="btn-5">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-pic">
                <img src={m8} alt="thumb" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont-user-alt-4"></i>
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-heart"></i>
                        33 likes
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-comment"></i>
                        37 Comments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-desc">
                  <a href="single.html">
                    <h4>departure ourselves very as he peculiar believed</h4>
                  </a>
                  <p>
                    The organic produce not only looks appealing but also
                    promises health benefits, free from synthetic pesticides and
                    fertilizers.
                  </p>
                  <div className="price-bottom">
                    <a href="single.html" className="btn-5">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-box">
              <div className="blog-pic">
                <img src={m8} alt="thumb" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icofont-user-alt-4"></i>
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-heart"></i>
                        33 likes
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-comment"></i>
                        37 Comments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog-desc">
                  <a href="single.html">
                    <h4>departure ourselves very as he peculiar believed</h4>
                  </a>
                  <p>
                    Each pack includes a variety of fresh, seasonal vegetables
                    grown without synthetic pesticides or fertilizers.
                  </p>
                  <div className="price-bottom">
                    <a href="single.html" className="btn-5">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
