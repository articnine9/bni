const MissionNVission = () => {
  const principles = [
    {
      title: "Our Vision",
      icon: "flaticon-targeted",
      description:
        "To be Nagercoil's most dynamic business networking platform, fostering trust, growth, and success for every member.",
      delay: ".3s",
    },
    {
      title: "Our Mission",
      icon: "flaticon-trophy",
      description:
        "To empower business professionals by enhancing visibility, building strong relationships, and driving referral-based business expansion.",
      delay: ".5s",
    },
  ];

  return (
    <>
      <section className="service-section section-padding" id="vision-mission">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              {/* <img src="assets/img/bale.png" alt="BNI Kanya" /> */}
              Our Vision & Mission
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Guiding Principles of BNI Kanya
            </h2>
          </div>

          <div className="row justify-content-center">
            {principles.map((item, index) => (
              <div
                key={index}
                className=" col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="service-card-items">
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionNVission;
