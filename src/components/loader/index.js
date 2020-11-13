import React from "react";
import "./loader.css";

export const Loader = () => (
  <section className="preloader">
    <div className="loader">
      <div className="father">
        <div className="one"></div>
      </div>

      <div className="two"></div>
      <div className="three"></div>

      <div className="mother">
        <div className="num-for"></div>
      </div>
    </div>
  </section>
);
