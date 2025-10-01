import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import BNICTA from "@/components/BNIcta";
import WhyChooseUs from "@/components/whyChooseUs";
import MissionNVission from "@/components/missionnvission";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import NextLayout from "@/layouts/NextLayout";
import JoinTeam from "@/components/JoinTeam";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={1}>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb />
      {/* About Section Start */}
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {/* <img src="assets/img/bale.png" alt="img" /> */}
                      About Us
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      About BNI
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp mb-3"
                    data-wow-delay=".5s"
                  >
                    <b>BNI (Business Network International),</b> founded in 1985
                    by Dr. Ivan Misner, has grown over the past 40 years into
                    the world’s largest business networking organization.
                  </p>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    BNI’s mission is to empower its Members to expand their
                    businesses through a structured, positive, and professional
                    referral marketing program—designed to foster long-term,
                    meaningful relationships with trusted business
                    professionals.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/1.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow  fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/3.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    {/* <span className="sub-content wow fadeInUp">
                      About BNI Kanya
                    </span> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      About BNI Kanya
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <WhyChooseUs />

      {/* Team Section Start */}
      {/* <Team /> */}
      {/* Funfact Section Start */}
      {/* <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section> */}
      {/* Working Process Section Start */}
      <WorkingProcess2 />
      <BNICTA />
      <MissionNVission />
      <JoinTeam />
    </NextLayout>
  );
};
export default page;
