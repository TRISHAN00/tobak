import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div id="preloader">
      <div class="ctn-preloader" id="ctnPreloader">
        <div class="animation-preloader">
          <div class="spinner"></div>
          <div class="txt-loading">
            <span class="letters-loading" data-text-preloader="T">
              {" "}
              T{" "}
            </span>
            <span class="letters-loading" data-text-preloader="O">
              {" "}
              O{" "}
            </span>
            <span class="letters-loading" data-text-preloader="B">
              {" "}
              B{" "}
            </span>
            <span class="letters-loading" data-text-preloader="A">
              {" "}
              A{" "}
            </span>
            <span class="letters-loading" data-text-preloader="K">
              {" "}
              K{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
