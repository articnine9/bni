// Data stored in a variable
const joinUsData = {
  title: "Join Us as a Visitor!",
  subtitle: "Every Tuesday | 7:30 AM Onwards",
  description:
    "Attend a BNI Kanya weekly meeting and experience how referral networking helps businesses grow.",
  whoCanJoin: [
    {
      id: 1,
      heading: "Attend Our Weekly Meeting",
      text: "Join us every Tuesday morning at 7:30 AM and witness the power of structured networking.",
    },

    {
      id: 2,
      heading: "Meet & Network",
      text: "Introduce your business, connect with members, and build meaningful business relationships.",
    },
  ],
};

const VisitorsJoin = () => {
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
                          src="assets/img/working-process/1.png"
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

export default VisitorsJoin;
