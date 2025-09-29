"use client";
import { useState, useEffect } from "react";
import FunFactCounter from "@/components/FunFactCounter";
import TeamSection from "@/app/TeamMember/RegionalTeam";
import LeadershipSection from "@/app/TeamMember/LeadershipSection";
import RegionalTeamSection from "@/app/TeamMember/RegionalTeamSection";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
const page = () => {
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    // Show dialog when page loads
    setShowDialog(true);
  }, []);
  if (showDialog) {
    return (
      <div className="fixed inset-0 z-50 bg-black/70">
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center relative mx-auto"
        >
          {/* ✅ Image here */}
          <img
            src="assets/img/BNI Kanya.jpg" // <-- replace with your image path or URL
            alt="BNI Kanya Logo"
            className="  mx-auto"
            style={{
              width: "800px",
            }}
          />

          <button
            onClick={() => setShowDialog(false)}
            className="text-gray-500 hover:text-black mt-3"
          >
            Close & Continue →
          </button>
        </div>
      </div>
    );
  }

  return (
    <NextLayout header={1}>
      {/* Modal Dialog */}

      <HeroSlider />
      <section className="bni-simple-section section-padding theme-bg text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 ">
              <div class="section-title">
                <span class="sub-content wow fadeInUp">BNI Kanya</span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
                  Change the way Nagercoil does Business with{" "}
                  <span
                    className="highlight-text"
                    style={{ fontStyle: "italic" }}
                  >
                    #TeamBNIKanya
                  </span>
                </h2>
              </div>
              <p
                className="text-white wow fadeInUp mb-4 text-white"
                data-wow-delay=".3s"
              >
                Premier business networking chapter generating millions in
                business referrals for Nagercoil's top professionals.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".4s">
                <Link href="#" className="theme-btn white-border me-3">
                  Join Chapter Meeting
                </Link>
                {/* <Link href="#" className="theme-btn white-border">
                  Get Business Referrals
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>3+ Years of Networking</li>

                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Award-Winning BNI Chapter</li>
                  </ul>

                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/1.jpg"
                          alt="BNI Kanya Team Meeting"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/2.jpg"
                          alt="BNI Kanya Networking Event"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {/* <img src="assets/img/bale.png" alt="img" /> */}
                      About BNI Kanya
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Transforming Business in Nagercoil Through Powerful
                      Networking
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    BNI Kanya is Nagercoil's premier business networking
                    chapter, dedicated to helping local professionals and
                    entrepreneurs grow their businesses through quality
                    referrals and strategic partnerships. As part of the global
                    BNI network, we bring together the city's most committed
                    business leaders.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Generate qualified business referrals consistently
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Build valuable long-term business relationships
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Access exclusive business development opportunities
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Increase your business visibility in Nagercoil
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="#" className="theme-btn">
                        Learn More About BNI
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>

                  {/* Additional BNI Stats */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              {/* <img src="assets/img/bale.png" alt="img" /> */}
              BNI Kanya Achievements
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Chapter's Impressive Statistics
            </h2>
            <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
              Join the most successful business networking chapter in Nagercoil
            </p>
          </div>
          <FunFactCounter />
        </div>
      </section>

      {/* Team Section Start */}
      <section className="bg-theme">
        <div className="container">
          <div className="discussed-items">
            <div
              className="footer-logo wow fadeInUp w-200"
              data-wow-delay=".3s"
            >
              <Link href="/">
                <img
                  src="assets/img/logo/bni-logo-white.png"
                  alt="logo-img"
                  className="w-100"
                />
              </Link>
            </div>
            <div
              className="discussed-content wow fadeInUp "
              data-wow-delay=".5s"
            >
              <h2>Networking Fuels Nagercoil Business.</h2>
              <Link href="#" className="theme-btn white-border">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <LeadershipSection />

      <RegionalTeamSection />
    </NextLayout>
  );
};
export default page;
