import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import footerSvg from "../images/icons/footer-shape.png";
import logo from "../images/logo/logo.svg";
import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.footerArea} pt-100 position-relative`}>
      <div className="container">
        <div className={`${classes.footerTop} pb-40`}>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30">
              <div className={`footer-logo ${classes.footerWidget}`}>
                <div className={classes.logo}>
                  <a href="index.html">
                    <img alt="Logo" src={logo} />
                  </a>
                </div>
                <p className="mt-15">
                  Your ultimate solution to all financial issues. The best place
                  ever to keep all your financial data.
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-5 offset-lg-2 offset-md-1 mb-30">
              <div className={`${classes.footerWidget} widget-menu`}>
                <h5>Community</h5>
                <ul>
                  <li>
                    <a href="blog_grid.html">Latest News</a>
                  </li>
                  <li>
                    <a href="about_us.html">About Tobak</a>
                  </li>
                  <li>
                    <a href="contact_us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="blog_list.html">Our Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-30">
              <div className={`${classes.footerWidget} widget-menu`}>
                <h5>About Us</h5>
                <ul>
                  <li>
                    <a href="contact_us.html">Get in Touch</a>
                  </li>
                  <li>
                    <a href="about_us.html">Our Story</a>
                  </li>
                  <li>
                    <a href="index.html">Landing</a>
                  </li>
                  <li>
                    <a href="blog_details.html">Post</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 offset-md-1 offset-lg-0 mb-30">
              <div
                className={`${classes.footerWidget} ${classes.widgetContact}`}
              >
                <h5>Contact</h5>
                <p className="mt-20">
                  Feel free to get in touch with us via phone or send us a
                  message.
                </p>
                <ul className="mt-30">
                  <li>
                    <a href="tel:13013403946">+1-301-340-3946</a>
                  </li>
                  <li>
                    <a href="mailto:info@tobak.com">info@tobak.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${classes.footerBottom} d-block text-center d-sm-flex justify-content-between pt-20 pb-20`}
        >
          <div className={classes.copyright}>
            <p>© Tobak 2021, All Rights Reserved</p>
          </div>
          <div className={classes.socialWidget}>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                  <FaFacebookF/>
                </a>
                
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                  <FaTwitter/>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google"></i>
                  <FaGoogle/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.footerOrnament}>
        <img src={footerSvg} alt="Footer Shape" />
      </div>
    </footer>
  );
};

export default Footer;
