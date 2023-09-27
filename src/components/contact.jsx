import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./contact-style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                minima molestiae nisi dignissimos, ex quisquam expedita quis
                nihil, ad recusandae porro autem? Praesentium delectus
                doloremque sapiente, iste maxime obcaecati expedita.
              </p>
            </div>
            <div className="address">
              <p>742 Evergreen Terrace</p>
              <p>Springfiel, Or 12345</p>
            </div>
            <div className="icons">
              <FaPhone style={{ marginRight: "1rem" }} />
              <p>+1(555)123-4567</p>
            </div>
            <div className="icons">
              <FaEnvelope style={{ marginRight: "1rem" }} />
              <p>support@example.com</p>
            </div>
            <div className="careers">
              <p>
                Looking for careers? <span>View all job openings.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <form action="">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Phone" />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking this box, you agree to the
                <span>Privacy policy</span> and <span>Cookie Policy. </span>
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
