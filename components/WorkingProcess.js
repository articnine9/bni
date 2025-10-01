export const WorkingProcess2 = () => {
  const programs = [
    {
      title: "Education Slots",
      description:
        "Dedicated learning sessions every Tuesday to support members growth inside and outside BNI Kanya.",
      delay: ".3s",
    },
    {
      title: "Feature Presentation",
      description:
        "Weekly opportunity for two members to showcase their business in detail, helping others pass quality referrals.",
      delay: ".5s",
    },
    {
      title: "MillionTalk",
      description:
        "A spotlight video series featuring expert insights from our BNI Kanya members.",
      delay: ".7s",
    },
    {
      title: "MillionMiles",
      description:
        "Adventure-based networking rides with fellow business owners to build strong connections.",
      delay: ".9s",
    },
    {
      title: "MillionWalk",
      description:
        "Combining fitness and networking to promote a healthy and active business community.",
      delay: "1.1s",
    },
    {
      title: "Visitors' Days",
      description:
        "Open networking sessions where professionals can explore the BNI Kanya experience.",
      delay: "1.3s",
    },
    {
      title: "Coffee with Millionaires",
      description:
        "Informal meetups hosted at members’ business premises to experience their products and services firsthand.",
      delay: "1.5s",
    },
  ];

  return (
    <section className="working-process-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            {/* <img src="assets/img/bale.png" alt="BNI Kanya" /> */}
            Our Signature Programs
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Empowering Members Through <br />
            Learning, Networking & Growth
          </h2>
        </div>
        <div className="work-process-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="work-process-content">
                <div className="row">
                  {programs.map((program, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-12 wow fadeInUp mb-4"
                      data-wow-delay={program.delay}
                    >
                      <div className="work-process-items h-100">
                        <div className="digit-box">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h4>{program.title}</h4>
                        <p>{program.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
