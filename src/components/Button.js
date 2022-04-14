import React from "react";
import ctnSvg from "../images/icons/cta.svg";
import classes from '../styles/Button.module.css';

const Button = () => {
  return (
    <div className={`${classes.talkBtn} text-end position-relative`}>
      <a className="cta-btn" href="contact_us.html">
        Let's chat
        <img alt="cta" src={ctnSvg} />
      </a>
    </div>
  );
};

export default Button;
