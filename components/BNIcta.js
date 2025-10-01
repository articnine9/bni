import Link from "next/link";
const BNICTA = () => {
  return (
    <>
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
    </>
  );
};
export default BNICTA;
