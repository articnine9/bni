import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
const page = () => {
  return (
    <NextLayout header={1}>
      <HeroSlider />
      <section className="bni-simple-section section-padding theme-bg text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 ">
              <div class="section-title">
                <span class="sub-content wow fadeInUp">BNI Kanya</span>
                <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
                  Change the way Nagercoil does Business with{" "}
                  <span className="highlight-text">#Team BNI Kanya</span>
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
                <Link href="#" className="theme-btn white-border">
                  Get Business Referrals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      {/* <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Preparing For Your Business Success With IT Solution
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="service-details">
                      Data Manage &amp; <br />
                      Solutions Center
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/01.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="service-details">
                      Preparing For <br />
                      Cloud Services
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/02.jpg" alt="img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="service-details">
                      Machine Learning <br />
                      &amp; Development
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="service-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <img src="assets/img/service/03.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
                    <li>10+ Years of Networking</li>

                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Award-Winning BNI Chapter</li>
                  </ul>

                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/01.jpg"
                          alt="BNI Kanya Team Meeting"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img
                          src="assets/img/about/02.jpg"
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
      {/* Service Section Start */}
      {/* <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Best Quality Service <br />
              For Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-technical" />
                </div>
                <h3>
                  <Link href="service-details">
                    Data Center and Cloud Services
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/04.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="service-details">
                    Web Development Software Renew
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/05.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="service-details">
                    IT Management Machine Learning
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/06.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-design-thinking" />
                </div>
                <h3>
                  <Link href="service-details">
                    Digital Product UI/UX Design
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/service/07.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Cta Video Section Start */}
      {/* <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/cta/cta-video.jpg")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-buttton ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
                <span className="text-slider">IT</span>
                <span className="text-slider">Consulting </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Co</span>
                <span className="text-slider">Machine </span>
                <span className="text-slider style-border" />
                <span className="text-slider">IT</span>
                <span className="text-slider">Learning </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Web </span>
                <span className="text-slider">Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
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
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="sub-content wow fadeInUp">
                  {/* <img src="assets/img/bale.png" alt="img" /> */}
                  Regional Team
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Meet Our Professional <br />
                  Team Members
                </h2>
              </div>
              <p
                className="mt-3 mt-md-0 wow fadeInUp text center"
                data-wow-delay=".5s"
              >
                Meet our dedicated team members who are committed to growing
                local businesses, connecting professionals, and creating new
                opportunities in Nagercoil.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/01.jpg" alt="img" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Mohamed Riaz</Link>
                      </h4>
                      <p>Executive Director - BNI TNT</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/02.jpg" alt="img" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Max Prince</Link>
                      </h4>
                      <p>Director Consultant</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/02.jpg" alt="img" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Rama Doss</Link>
                      </h4>
                      <p>Support Ambassador</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section fix section-padding bg-team">
        <div className="container">
          <div className="col-lg-12">
            <div className="row g-4 align-items-center">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="sub-content wow fadeInUp">
                    Leadership Team
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Our BNI Nagercoil <br />
                    Chapter Leaders
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 wow fadeInUp text-center"
                  data-wow-delay=".5s"
                >
                  Meet the dedicated leaders of BNI Nagercoil who guide our
                  chapter, foster professional connections, and empower local
                  businesses through referrals and structured networking
                  opportunities.
                </p>
              </div>

              <div className="col-lg-12">
                <div className="row">
                  <div
                    className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="team-items">
                      <div className="team-image">
                        <img src="assets/img/team/01.jpg" alt="img" />
                      </div>
                      <div className="team-content">
                        <h4>
                          <Link href="team-details">Karthic</Link>
                        </h4>
                        <p>President</p>
                        <div className="social-profile">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                          <span className="plus-btn">
                            <i className="far fa-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="team-items">
                      <div className="team-image">
                        <img src="assets/img/team/02.jpg" alt="img" />
                      </div>
                      <div className="team-content">
                        <h4>
                          <Link href="team-details">Roy Mon</Link>
                        </h4>
                        <p>Vice President</p>
                        <div className="social-profile">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                          <span className="plus-btn">
                            <i className="far fa-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="team-items">
                      <div className="team-image">
                        <img src="assets/img/team/02.jpg" alt="img" />
                      </div>
                      <div className="team-content">
                        <h4>
                          <Link href="team-details">Tiraviyam</Link>
                        </h4>
                        <p>Secretary Treasurer</p>
                        <div className="social-profile">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                          <span className="plus-btn">
                            <i className="far fa-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="sub-content wow fadeInUp">
                  Regional Success Squad
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Driving Growth <br />
                  With Our Expert Team
                </h2>
              </div>
              <p
                className="mt-3 mt-md-0 wow fadeInUp text-center"
                data-wow-delay=".5s"
              >
                Meet our dedicated team members who are focused on expanding
                businesses, enhancing professional networks, and creating
                impactful opportunities in Nagercoil.
              </p>
            </div>

            <div className="col-lg-12">
              <div className="row g-4">
                {/* Mentor Coordinator */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/01.jpg" alt="Krishnamoorthy" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Krishnamoorthy</Link>
                      </h4>
                      <p>Mentor Coordinator</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chapter Growth Coordinator */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/02.jpg" alt="Ramkumar" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Ramkumar</Link>
                      </h4>
                      <p>Chapter Growth Coordinator</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attendance */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/03.jpg" alt="Nishwin" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Nishwin</Link>
                      </h4>
                      <p>Attendance</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Retention */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img
                        src="assets/img/team/04.jpg"
                        alt="Sethu Ramalingam"
                      />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Sethu Ramalingam</Link>
                      </h4>
                      <p>Retention</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Growth */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/05.jpg" alt="Surendran" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Surendran</Link>
                      </h4>
                      <p>Business Growth</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Referral Quality Check */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/02.jpg" alt="Faizal" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Faizal</Link>
                      </h4>
                      <p>Referral Quality Check</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Review */}
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="1.5s"
                >
                  <div className="team-items">
                    <div className="team-image">
                      <img src="assets/img/team/01.jpg" alt="Allwin" />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href="team-details">Allwin</Link>
                      </h4>
                      <p>Application Review</p>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          <i className="far fa-plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Case Study Section Start */}
      {/* <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="assets/img/case-study/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/case-study/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                Popular Case Study
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Discover Our Popular Case Study <br /> That We Globally
                Completes
              </h2>
            </div>
            <Link href="project" className="theme-btn white-border">
              View More Cases
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/01.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>IT Consulting</p>
                  <h3>
                    <Link href="case-study-details">
                      How to achieve more with your nine to five
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/02.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>Machine Learning</p>
                  <h3>
                    <Link href="case-study-details">
                      Strategies for outstanding future results
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/case-study/03.jpg" alt="img" />
                </div>
                <div className="content">
                  <p>Software Design</p>
                  <h3>
                    <Link href="case-study-details">
                      Discover a better way of system defining company goals.
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="case-study-details">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Pricing Section Start */}
      {/* <Pricing /> */}
      {/* Testimonial Section Start */}
      {/* <section className="testimonial-section fix section-padding pt-0">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* News Section Start */}
      {/* <section className="news-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              News &amp; Blog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Our Latest News &amp; Blog
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/01.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      List of 5 ways Generating Real Time Audio Sentiment
                      Analysis
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/02.jpg")' }}
                />
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div className="news-content">
                  <p>November 25, 2024</p>
                  <h4>
                    <Link href="news-details">
                      Revealing Images With Animations Gradients, Blend Modes
                      Cool
                    </Link>
                  </h4>
                  <Link className="link-btn" href="news-details">
                    Read More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/03.jpg")' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </NextLayout>
  );
};
export default page;
