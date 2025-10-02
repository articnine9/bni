const VisitorJoinDetails = () => {
  const steps = [
    {
      title: "Step 1: Fill the Visitor Form",
      icon: "flaticon-email-marketing", // you can choose any icon
      description:
        "Submit your details to let us know you’re interested in attending.",
      delay: ".3s",
    },
    {
      title: "Step 2: Receive an Invitation",
      icon: "flaticon-copy-writing",
      description:
        "Our team will contact you to confirm your visit and guide you.",
      delay: ".5s",
    },
    {
      title: "Step 3: Attend & Network",
      icon: "flaticon-brainstorming",
      description:
        "Join the meeting, introduce your business, and grow your network.",
      delay: ".7s",
    },
  ];

  return (
    <>
      <section className="service-section section-padding" id="how-to-join">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              How to Join a Meeting
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Step-by-Step Guide for Visitors
            </h2>
          </div>

          <div className="row justify-content-center">
            {steps.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp mb-4"
                data-wow-delay={item.delay}
              >
                <div className="service-card-items h-100 text-center p-4 border rounded">
                  <div className="icon mb-3">
                    <i className={item.icon} style={{ fontSize: "2rem" }} />
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

export default VisitorJoinDetails;
