
import React from "react";
import logo from "../images/logo/logo.svg";
import classes from "../styles/Header.module.css";
import Button from "./Button";

const Header = () => {
  return (
    <div className={`${classes.headerArea} header-1`}>
      <div className="container-fluid">
        <div className={`${classes.headerWrap} pt-25`}>
          <div className={`${classes.mainHeader} d-none d-lg-block`}>
            <div className="row">
              <div className="col-xl-2 col-lg-2">
                <div className={classes.logo}>
                  <a href="index.html">
                    <img alt="Logo" src={logo} />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className={`${classes.mainMenu} text-center pt-15`}>
                  <nav>
                    <ul>
                      <li>
                        <a className={classes.active} href="index.html">
                          Home
                        </a>
                      </li>
                      <li>
                        <a className={classes.dropdown} href="blog_grid.html">
                          Blog
                        </a>
                        <ul className={classes.subMenu}>
                          <li>
                            <a href="blog_grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog_list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog_details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about_us.html">About</a>
                      </li>
                      <li>
                        <a href="contact_us.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                <Button/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
