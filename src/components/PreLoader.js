import React from "react";
import classes from "../styles/PreLoader.module.css";

const PreLoader = () => {
  return (
    <div className={classes.preloader}>
      <div className={classes.ctnPreloader} id="ctn-preloader">
        <div className={classes.animationPreloader}>
          <div className={classes.spinner}></div>
          <div className={classes.txtLoading}>
            <span className={classes.lettersLoading} data-text-preloader="T">
              {" "}
              T{" "}
            </span>
            <span className={classes.lettersLoading} data-text-preloader="O">
              {" "}
              O{" "}
            </span>
            <span className={classes.lettersLoading} data-text-preloader="B">
              {" "}
              B{" "}
            </span>
            <span className={classes.lettersLoading} data-text-preloader="A">
              {" "}
              A{" "}
            </span>
            <span className={classes.lettersLoading} data-text-preloader="K">
              {" "}
              K{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
