import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    default:
      return <Footer1 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            {/* About Us */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About BNI Nagercoil</h4>
                </div>
                <div className="footer-content">
                  <p>
                    BNI Nagercoil is dedicated to empowering local businesses
                    through structured networking, professional growth, and
                    referral-based opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Link */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/members">Members</Link>
                  </li>
                  <li>
                    <Link href="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link href="/visitors">Visitors</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Get In Touch */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        25/2, North Street, near Reliance Mall, Krishnam Coil,
                        Nagercoil, Tamil Nadu 629001.
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:bnikanyamc@gmail.com" className="link">
                        bnikanyamc@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:+919443979199">+91 94439 79199</a>
                        <br />
                        <a href="tel:+919677587777">+91 96775 87777</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Chapter */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>BNI Kanya Chapter</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Our chapter focuses on building strong business
                    relationships, providing referral opportunities, and hosting
                    weekly networking meetings for professionals in Nagercoil
                    and surrounding areas.
                  </p>
                  <Link href="/contact" className="theme-btn white-border mt-4">
                    Join Chapter Meeting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <div className="social-icon d-flex align-items-center Footersocial-icon">
                <a href="https://www.facebook.com/bnikanya/" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>

                <a href="https://instagram.com/bnikanya/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="linkedin.com/in/bni-kanya-292346375?originalSubdomain=in"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <a
                href="#"
                id="scrollUp"
                className="scroll-icon wow fadeInUp"
                data-wow-delay=".4s"
              >
                <i className="far fa-angle-double-up" />
              </a>
              <div className="d-flex justify-content-between align-items-center">
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  © <Link href="/">2025</Link> All Rights Reserved{" "}
                </p>
                <p className="wow fadeInUp pl-2" data-wow-delay=".6s">
                  {" "}
                  Designed by{" "}
                  <a
                    href="https://artic9.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Artic9
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
