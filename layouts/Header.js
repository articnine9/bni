"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header, single }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  switch (header) {
    case 1:
      return <Header1 single={single} />;
    case 2:
      return <Header2 single={single} />;
    case 3:
      return <Header3 single={single} />;
    case 5:
      return <Header5 single={single} />;
    case 6:
      return <Header6 single={single} />;
    default:
      return <Header6 single={single} />;
  }
};
export default Header;

const Menu = ({ single, menu }) => {
  const singleMenu = [
    { id: 1, href: "/", title: "Home 1" }, // Main page
    { id: 2, href: "/#", title: "Members" },
    { id: 3, href: "/#", title: "Leadership" },
    { id: 4, href: "/#", title: "Visitors" },
    { id: 5, href: "/#", title: "Albums" },
    { id: 6, href: "/#", title: "About" },
    { id: 7, href: "/#", title: "Contact" },
  ];

  return (
    <Fragment>
      {single ? (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li className="has-dropdown active menu-thumb">
              <Link href="/">
                Home
                {/* <i className="fas fa-angle-down" /> */}
              </Link>
              {/* <ul className="submenu has-homemenu">
                <li className="border-none">
                  <div className="row g-4">
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-1.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/" className="theme-btn">
                            Multi Page
                          </Link>
                          <a href="index-one-page.html" className="theme-btn">
                            One Page
                          </a>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 01</h4>
                      </div>
                    </div>
                    <div className="col-xl-2  homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-2.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-2" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-two-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 02</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-3.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-3" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-three-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 03</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-4.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-4" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-four-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 04</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-5.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-5" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-five-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 05</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-6.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-6" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-six-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 06</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
            </li>
            <li className="has-dropdown active d-xl-none">
              <Link href="/" className="border-none">
                Home
                <i className="fas fa-angle-down" />
              </Link>
              {/* <ul className="submenu">
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="index-2">Home 02</Link>
                </li>
                <li>
                  <Link href="index-3">Home 03</Link>
                </li>
                <li>
                  <Link href="index-4">Home 04</Link>
                </li>
                <li>
                  <Link href="index-5">Home 05</Link>
                </li>
                <li>
                  <Link href="index-6">Home 06</Link>
                </li>
              </ul> */}
            </li>
            {singleMenu.map((menu) => (
              <li key={menu.id}>
                <a href={`#${menu.href}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav id="mobile-menu" className="d-none d-xl-block">
          <ul>
            <li className="has-dropdown active menu-thumb">
              <Link href="/">
                Home
                {/* <i className="fas fa-angle-down" /> */}
              </Link>
              {/* <ul className="submenu has-homemenu">
                <li className="border-none">
                  <div className="row g-4">
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-1.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="/" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-one-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 01</h4>
                      </div>
                    </div>
                    <div className="col-xl-2  homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-2.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-2" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-two-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 02</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-3.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-3" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-three-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 03</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-4.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-4" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-four-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 04</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-5.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-5" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-five-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 05</h4>
                      </div>
                    </div>
                    <div className="col-xl-2 homemenu">
                      <div className="homemenu-thumb">
                        <img src="assets/img/header/home-6.jpg" alt="img" />
                        <div className="demo-button">
                          <Link href="index-6" className="theme-btn">
                            Multi Page
                          </Link>
                          <Link href="index-six-page" className="theme-btn">
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className="homemenu-content text-center">
                        <h4 className="homemenu-title">Home 06</h4>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
            </li>
            <li className="has-dropdown active d-xl-none">
              <Link href="/" className="border-none">
                Home
                <i className="fas fa-angle-down" />
              </Link>
              {/* <ul className="submenu">
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="index-2">Home 02</Link>
                </li>
                <li>
                  <Link href="index-3">Home 03</Link>
                </li>
                <li>
                  <Link href="index-4">Home 04</Link>
                </li>
                <li>
                  <Link href="index-5">Home 05</Link>
                </li>
                <li>
                  <Link href="index-6">Home 06</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="#">Members</Link>
            </li>
            <li>
              <Link href="#">
                Leadership
                {/* <i className="fas fa-angle-down" /> */}
              </Link>
              {/* <ul className="submenu">
                <li>
                  <Link href="service">Services</Link>
                </li>
                <li>
                  <Link href="service-details">Service Details</Link>
                </li>
              </ul> */}
            </li>
            <li className="has-dropdown">
              <Link href="#">
                Visitors
                {/* <i className="fas fa-angle-down" /> */}
              </Link>
              {/* <ul className="submenu">
                <li className="has-dropdown">
                  <Link href="project-details">
                    Projects
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="project">Projects</Link>
                    </li>
                    <li>
                      <Link href="project-details">Project Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link href="team-details">
                    Team
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-details">Team Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="pricing">Pricing Table</Link>
                </li>
                <li>
                  <Link href="404">404 Page</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="#">
                Albums
                {/* <i className="fas fa-angle-down" /> */}
              </Link>
              {/* <ul className="submenu">
                <li>
                  <Link href="news">Blog </Link>
                </li>
                <li>
                  <Link href="news-details">Blog Details</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

const MobileMenu = ({ single, menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
        { id: 1, href: "#", title: "About" },
        { id: 2, href: "#", title: "Services" },
        { id: 3, href: "#", title: "Team" },
        { id: 4, href: "#", title: "Blog" },
      ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-xl-none">
              <a
                href="#"
                className="border-none"
                onClick={() => activeMenuSet("home")}
              >
                Home
                <i className="fas fa-angle-down" />
              </a>
              {/* <ul className="submenu" style={activeLi("home")}>
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="index-2">Home 02</Link>
                </li>
                <li>
                  <Link href="index-3">Home 03</Link>
                </li>
                <li>
                  <Link href="index-4">Home 04</Link>
                </li>
                <li>
                  <Link href="index-5">Home 05</Link>
                </li>
                <li>
                  <Link href="index-6">Home 06</Link>
                </li>
              </ul> */}
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("home")}
              >
                {/* <i className="far fa-plus" /> */}
              </a>
            </li>
            {single ? (
              <Fragment>
                {singleMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={`#${menu.href}`}>{menu.title}</a>
                  </li>
                ))}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Services")}>
                    Members
                    <i className="fas fa-angle-down" />
                  </a>
                  {/* <ul className="submenu" style={activeLi("Services")}>
                    <li>
                      <Link href="#">Services</Link>
                    </li>
                    <li>
                      <Link href="#">Service Details</Link>
                    </li>
                  </ul> */}
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Services")}
                  >
                    {/* <i className="far fa-plus" /> */}
                  </a>
                </li>
                <li className="has-dropdown">
                  <a href="#" onClick={() => activeMenuSet("Pages")}>
                    Leadership
                    {/* <i className="fas fa-angle-down" /> */}
                  </a>
                  {/* <ul className="submenu" style={activeLi("Pages")}>
                    <li className="has-dropdown">
                      <a href="#" onClick={() => multiMenuSet("Projects")}>
                        Projects
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul
                        className="submenu"
                        style={multiMenuActiveLi("Projects")}
                      >
                        <li>
                          <Link href="project">Projects</Link>
                        </li>
                        <li>
                          <Link href="project-details">Project Details</Link>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={() => multiMenuSet("Projects")}
                      >
                        <i className="far fa-plus" />
                      </a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#" onClick={() => multiMenuSet("Team")}>
                        Team
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="submenu" style={multiMenuActiveLi("Team")}>
                        <li>
                          <Link href="team">Team</Link>
                        </li>
                        <li>
                          <Link href="team-details">Team Details</Link>
                        </li>
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        onClick={() => multiMenuSet("Team")}
                      >
                        <i className="far fa-plus" />
                      </a>
                    </li>
                    <li>
                      <Link href="pricing">Pricing Table</Link>
                    </li>
                    <li>
                      <Link href="404">404 Page</Link>
                    </li>
                  </ul> */}
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Pages")}
                  >
                    {/* <i className="far fa-plus" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => activeMenuSet("Blog")}>
                    Visitors
                    {/* <i className="fas fa-angle-down" /> */}
                  </a>
                  {/* <ul className="submenu" style={activeLi("Blog")}>
                    <li>
                      <Link href="news">Blog </Link>
                    </li>
                    <li>
                      <Link href="news-details">Blog Details</Link>
                    </li>
                  </ul> */}
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={() => activeMenuSet("Blog")}
                  >
                    {/* <i className="far fa-plus" /> */}
                  </a>
                </li>
                <li className="mean-last">
                  <Link href="#">Albums</Link>
                </li>
                <li className="mean-last">
                  <Link href="#">About</Link>
                </li>
                <li className="mean-last">
                  <Link href="#">Contact</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu, single }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              {/* Top Logo and Close */}
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img
                      src="assets/img/logo/bni-logo.png"
                      alt="BNI Nagercoil Logo"
                      className="logoShap"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div className="mobile-menu fix mb-3">
                <MobileMenu single={single} menu={menu} />
              </div>

              {/* Description */}
              <p className="text d-none d-xl-block mb-5">
                BNI Nagercoil is committed to empowering local businesses
                through networking, referrals, and professional growth. Join our
                chapter to connect with like-minded professionals and expand
                your business opportunities.
              </p>

              {/* Contact Info */}
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        25/2, North Street, near Reliance Mall, Krishnam Coil,
                        Nagercoil, Tamil Nadu 629001.
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:bnikanyamc@gmail.com">
                        bnikanyamc@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Tuesday : 7.30 AM Onwards
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+919443979199">+91 94439 79199</a>
                      <br />
                      <a href="tel:+919677587777">+91 96775 87777</a>
                    </div>
                  </li>
                </ul>

                {/* Contact Button */}
                <div className="header-button mt-4">
                  <Link href="#" className="theme-btn text-center">
                    Contact Us
                  </Link>
                </div>

                {/* Social Icons */}
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const Header1 = ({ single, menu }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img
                    src="assets/img/logo/bni-logo.png"
                    alt="logo-img"
                    className="logo-1 logoShap"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="assets/img/logo/bni-logo.png"
                    alt="logo-img "
                    className="logo-2 logoShap"
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+91 94439 79199">+91 94439 79199</a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
      />
    </Fragment>
  );
};

const Header2 = ({ single }) => {
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "testimonial", title: "Testimonial" },
  ];

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header3 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "services", title: "Services" },
    { id: 1, href: "about", title: "About" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "testimonial", title: "Testimonial" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+00012345688">+000 (123) 456 88</a>
                    </h4>
                  </div>
                </div>
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header5 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "contact", title: "Contact" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-6">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/" className="logo-1">
                  <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                </Link>
                <Link href="/" className="logo-2">
                  <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header6 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "feature", title: "Feature" },
    { id: 4, href: "pricing", title: "Pricing" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};
