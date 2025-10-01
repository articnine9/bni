import Link from "next/link";

// Data stored in a variable
const joinUsData = {
  title: "Join Us Today!",
  subtitle: "Network with Top Professionals",
  description:
    "Connect with like-minded business owners, entrepreneurs, and industry leaders.",
  whoCanJoin: [
    {
      id: 1,
      heading: "Business Owners",
      text: "Business owners seeking to grow through referrals and trusted networking.",
    },
    {
      id: 2,
      heading: "Entrepreneurs",
      text: "Entrepreneurs looking to scale their business by building strong relationships.",
    },
    {
      id: 3,
      heading: "Professionals",
      text: "Professionals aiming to expand their network and create meaningful opportunities.",
    },
  ],
};

const JoinTeam = () => {
  return (
    <>
      <section className="planning-section fix section-padding">
        <div className="container">
          <div className="planning-wrapper">
            <div className="row g-4 justify-content-between align-items-center">
              {/* Left Content */}
              <div className="col-xl-6 col-lg-6">
                <div className="planning-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {joinUsData.title}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {joinUsData.subtitle}
                    </h2>
                  </div>

                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {joinUsData.description}
                  </p>

                  {/* Who Can Join List */}
                  {joinUsData.whoCanJoin.map((item, index) => (
                    <div
                      key={item.id}
                      className="planning-items mb-2 wow fadeInUp"
                      data-wow-delay={`${0.3 + index * 0.2}s`}
                    >
                      <div className="number">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="content">
                        <h5 className="mb-1">{item.heading}</h5>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}

                  {/* Call To Action */}
                  <div className="mt-4">
                    <Link href="contact" className="theme-btn">
                      Apply Now <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="col-xl-5 col-lg-6">
                <div className="planning-image-items">
                  <div className="row g-4 align-items-center">
                    <div
                      className="col-md-12 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="planning-image">
                        <img
                          src="assets/img/about/joinnow.png"
                          alt="join-us-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right Side */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinTeam;
