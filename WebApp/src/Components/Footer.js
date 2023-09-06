import React from "react";
import "../Styles/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import img1 from "../Images/w-hotels-logo-blue.png";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col-sm-6 col-md-4 footer-navigation">
          <img
            alt=""
            src={img1}
            width="256"
            height="191"
            className="d-inline-block align-top"
          />

          <p className="links">
            Home
            <strong> · </strong>
            Blog
            <strong> · </strong>
            Pricing
            <strong> · </strong>
            About
            <strong> · </strong>
            Faq
            <strong> · </strong>
            Contact
          </p>
          <p className="company-name">W Hotels © 2023</p>
        </div>
        <div className="col-sm-6 col-md-4 footer-contacts">
          <div>
            <span className="fa fa-map-marker footer-contacts-icon"> </span>
            <p>
              <span className="new-line-span">4th Ln, Moratumulla</span>{" "}
              Moratuwa, Sri Lanka
            </p>
          </div>
          <div>
            <i className="fa fa-phone footer-contacts-icon"></i>
            <p className="footer-center-info email text-start">
              {" "}
              +94 77 123 4567
            </p>
          </div>
          <div>
            <i className="fa fa-envelope footer-contacts-icon"></i>
            <p>support@company.com</p>
          </div>
        </div>
        <div className="col-md-4 footer-about">
          <h4>About the company</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.{" "}
          </p>
          <div className="social-links social-icons">
            <a href="https://web.facebook.com/people/Rasula-Gimhan/pfbid032k7Jps6Fkp1S7wBWR2orFkXJTJ5gLajJefyCWDTgmr1Fo475o9NxWFf62QHDFfuWl/">
              <i className="fa fa-facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>

            <a href="https://www.instagram.com/the_razus/">
              <i className="fa fa-facebook">
                <FontAwesomeIcon icon={faInstagram} />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
