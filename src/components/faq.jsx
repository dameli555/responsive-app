import React from "react";
import "./faq-style.css";

const Faq = () => {
  return (
    <div className="section-faq">
      <div className="container">
        <div className="col-1">
          <h3>Frequently asked questions</h3>
          <p>Cant find the answer you're looking for?</p>
          <p>
            Reach out to our <span>customer support</span> team.
          </p>
        </div>
        <div className="col-2">
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>
              You biol the hell out of it. Lorem ispum dolor sit amet
              consectetue adipising elit.
            </p>
          </div>
          <div className="faq">
            <h5>What's the best thing about Switzerland?</h5>
            <p>
              I don't know, but the flug is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Expedita, rem.
            </p>
          </div>
          <div className="faq">
            <h5>What do you call someone with no body and nose?</h5>
            <p>Nobody knows.</p>
          </div>
          <div className="faq">
            <h5>How do you make holy water?</h5>
            <p>You biol the hell out of it. Lorem ispum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
