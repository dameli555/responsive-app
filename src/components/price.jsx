import React from "react";
import "./price-style.css";

const Price = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="top-content">
          <div>
            <h2>
              Everything you need for <span>$99 month</span>
            </h2>
            <p>
              Includes every future we offer plus unlimited projects nd
              unlimited users.
            </p>
          </div>
          <div className="btn-div">
            <button className="card-btn">Get started today</button>
          </div>
        </div>
        <div className="bottom-content">
          <div className="card">
            <p>
              <span>Everything you need</span>
            </p>
            <h3>All-in-one platform </h3>
            <p>
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
              Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
              laboriosam eos praesentium veritatis!
            </p>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
          </div>
          <div className="card">
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consec tetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
