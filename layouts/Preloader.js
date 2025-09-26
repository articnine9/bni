"use client";
import { nextUtility } from "@/utility"; // ✅ named import
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    if (nextUtility?.preloader) {
      nextUtility.preloader();
    } else {
      console.warn("⚠️ nextUtility.preloader is not defined");
    }
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="B" className="letters-loading">
            B
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader=" " className="letters-loading">
            &nbsp;
          </span>
          <span data-text-preloader="K" className="letters-loading">
            K
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
          <span data-text-preloader="N" className="letters-loading">
            N
          </span>
          <span data-text-preloader="Y" className="letters-loading">
            Y
          </span>
          <span data-text-preloader="A" className="letters-loading">
            A
          </span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
