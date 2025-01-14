import React from "react";
import shape from "../../assets/img/shape/icon-3.png";
export default function Count() {
  return (
    <div>
      <div className="counter-area counter-2 bg-theme de-pb">
        <img src={shape} className="circle-shape round-move" alt="thumb" />
        <div className="container">
          <div className="counter-wpr grid-4 gap-0 counter-1">
            <div className="fun-fact">
              <div className="fun-icon">
                <i className="flaticon-coins"></i>
              </div>
              <div className="fun-desc">
                <p
                  className="timer"
                  data-count="+"
                  data-to="200"
                  data-speed="3000"
                >
                  120
                </p>
                <span className="medium">Activate Products</span>
              </div>
            </div>
            <div className="fun-fact">
              <div className="fun-icon">
                <i className="flaticon-user"></i>
              </div>
              <div className="fun-desc">
                <p
                  className="timer"
                  data-count="+"
                  data-to="150"
                  data-speed="3000"
                >
                  950
                </p>
                <span className="medium">Per Day Visitors</span>
              </div>
            </div>
            <div className="fun-fact">
              <div className="fun-icon">
                <i className="flaticon-employee"></i>
              </div>
              <div className="fun-desc">
                <p
                  className="timer"
                  data-count="+"
                  data-to="630"
                  data-speed="3000"
                >
                  630
                </p>
                <span className="medium">Satisfied Clients</span>
              </div>
            </div>
            <div className="fun-fact">
              <div className="fun-icon">
                <i className="flaticon-diamond"></i>
              </div>
              <div className="fun-desc">
                <p
                  className="timer"
                  data-count="+"
                  data-to="10"
                  data-speed="3000"
                >
                  10
                </p>
                <span className="medium">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
