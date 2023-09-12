import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="py-2.5 px-1 footer">
      <div className="d-lg-flex border-style">
        <div className=" my-4 p-3 me-auto ms-auto">
          <h6 className="text-lg font-bold text-highlight">About Us</h6>
          <p>
            The new hero pieces bring <br /> instant fashion credibility. <br />
            Bright florals clash <br /> with camouflage prints.
          </p>
        </div>
        <div className=" my-4 p-3 me-auto ms-auto">
          <h6 className="text-lg font-bold text-highlight"> Address </h6>
          <p>
            Europe 45 Gloucester Road <br />
            London DT1M 3BF <br />
            +44 (0)20 3671 0000
          </p>
        </div>

        <div className="my-4 p-3 me-auto ms-auto">
          <h6 className="text-lg font-bold text-highlight">Get in Touch</h6>
          <p>
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            Exercitationem, sit!
          </p>
          <input
            className="subscribe-field"
            type="email"
            placeholder="Enter your valid Email"
          />{" "}
          <br />
          <button className="explore-btn">Subscribe Us</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
