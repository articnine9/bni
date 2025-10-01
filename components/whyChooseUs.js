import Link from "next/link";

const WhyChooseUs = () => {
  // Data for BNI Kanya offerings
  const services = [
    {
      title: "Qualified Business Referrals",
      description:
        "Generate consistent, high-quality referrals that help grow your business.",
      delay: ".3s",
    },
    {
      title: "Strong Business Relationships",
      description:
        "Build long-term, trusted connections with professionals in Nagercoil.",
      delay: ".5s",
    },
    {
      title: "Exclusive Opportunities",
      description:
        "Gain access to networking and business development opportunities available only to members.",
      delay: ".3s",
    },
    {
      title: "Increased Visibility",
      description:
        "Boost your credibility and presence in the local business community.",
      delay: ".5s",
    },
  ];

  return (
    <>
      <section className="service-offer-section" id="why-choose-bni-kanya">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              Why Choose BNI Kanya
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Transforming Business in Nagercoil <br /> Through Powerful
              Networking
            </h2>
          </div>
          <div className="row d-flex">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay={service.delay}
              >
                {/* Make the inner card flex and stretch */}
                <div className="service-offer-items flex-fill">
                  <div className="offer-content h-100">
                    <div className="content h-100 d-flex flex-column ">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
