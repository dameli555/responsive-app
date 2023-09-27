import React from "react";
import { FaDatabase } from "react-icons/fa";
import "./testimonials-style.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase /> Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
              Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
              laboriosam eos praesentium veritatis!
            </p>
            <div className="name">
              <p>Marie Chilveers</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
