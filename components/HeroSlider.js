"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState, useRef, useEffect } from "react";

const HeroSlider = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const heroSlides = [
    {
      id: 1,
      image: "assets/img/hero/1.jpg",
      title: "Powerful Business Networking",
      subtitle:
        "BNI Kanya helps local professionals grow through referrals and partnerships.",
    },
    {
      id: 2,
      image: "assets/img/hero/1.jpg",
      title: "Qualified Business Referrals",
      subtitle:
        "Build long-term relationships and access exclusive opportunities.",
    },
    {
      id: 3,
      image: "assets/img/hero/1.jpg",
      title: "Boost Business Visibility",
      subtitle:
        "Increase your presence and connect with top business leaders in Nagercoil.",
    },
  ];

  // Manual progress bar animation
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Auto-advance to next slide when progress completes
          if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
          }
          return 0;
        }
        return prev + 0.5; // Adjust speed here (0.5% every interval)
      });
    }, 50); // Update every 50ms

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [activeIndex]); // Restart when activeIndex changes

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  return (
    <section
      className="hero-section hero-1 bg-cover fix"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Main Progress Bar */}
      <div className="slider-progress-container">
        <div
          className="slider-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={false} // Disable Swiper autoplay since we're handling it manually
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        onInit={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        className="hero-slider"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Individual Slide Progress Bar - Only show for active slide */}
            {index === activeIndex && (
              <div className="slide-progress-container">
                <div
                  className="slide-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            <div
              className="single-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="container">
                <div className="row g-4 justify-content-between text-center">
                  <div className="col-lg-12">
                    <div className="hero-content">
                      <h1 className="wow fadeInUp" data-wow-delay=".2s">
                        {slide.title} <br />
                        {/* {slide.subtitle} */}
                      </h1>
                      <p
                        className="text-white wow fadeInUp mt-4 text-white fs-4"
                        data-wow-delay=".3s"
                      >
                        {slide.subtitle}
                      </p>
                      <div
                        className="hero-button-container wow fadeInUp"
                        style={{ display: "flex", justifyContent: "center" }}
                        data-wow-delay=".4s"
                      ></div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center mt-5 g-5 gap-5">
                      {/* Left Award */}
                      <div className="award-text d-flex align-items-center text-white">
                        <i className="fas fa-trophy me-2 p-3 bg-theme text-white rounded-circle" />
                        <span>
                          Highest Referrals Passed & Seat Value in the Region
                        </span>
                      </div>

                      {/* Right Award */}
                      <div className="award-text d-flex align-items-center text-white">
                        <i className="fas fa-star me-2 p-3 bg-theme text-white rounded-circle" />
                        <span>Best Digital Presence Award Winner</span>
                      </div>
                    </div>

                    <div className="col-lg-12 d-flex justify-content-center mt-5 g-5 gap-5">
                      <div className="hero-button">
                        <Link href="/" className="theme-btn hover-white">
                          Get Started Now <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                    {/* <div className="hero-contact-box">
                      <h4>Get Consultations</h4>
                      <p>Ready to Register Our Landsio Services</p>
                      <form className="contact-form-item">
                        <div className="row g-4">
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <input type="text" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <input type="text" placeholder="Email Address" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-clt">
                              <input type="text" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="payment-save">
                              <input type="checkbox" />
                              <p>
                                I've Read and agreed to{" "}
                                <Link href="/">Terms & Conditions</Link>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button type="submit" className="theme-btn">
                              Get Started Now{" "}
                              <i className="far fa-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation with Progress Indicators */}
      <div className="hero-slider-controls">
        <div className="slider-pagination-custom">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`pagination-item ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.swiper.slideTo(index);
                  setActiveIndex(index);
                  setProgress(0);
                }
              }}
            >
              <span className="pagination-progress">
                <span
                  className="pagination-progress-fill"
                  style={{
                    width: index === activeIndex ? `${progress}%` : "0%",
                  }}
                />
              </span>
              <span className="pagination-number">0{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
