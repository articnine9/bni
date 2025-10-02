export const VisitorWhyJoin = () => {
  const reasons = [
    {
      title: "Quality Business Referrals",
      description:
        "Unlock meaningful business opportunities through BNI Kanya’s structured referral networking system.",
      delay: ".3s",
    },
    {
      title: "Exclusive Industry Representation",
      description:
        "Only one member per profession is represented, ensuring zero competition within the chapter.",
      delay: ".5s",
    },
    {
      title: "Business Growth & Learning",
      description:
        "Access mentorship, business insights, and professional training to strengthen your business skills.",
      delay: ".7s",
    },
    {
      title: "Stronger Connections",
      description:
        "Build lasting relationships with like-minded entrepreneurs who genuinely want to see you succeed.",
      delay: ".9s",
    },
    {
      title: "Community & Support",
      description:
        "Be part of a vibrant, supportive, and fun business community that celebrates each other’s growth.",
      delay: "1.1s",
    },
  ];

  return (
    <section className="working-process-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">Why Join BNI Kanya?</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Experience Growth Through <br />
            Referrals, Learning & Community
          </h2>
        </div>
        <div className="work-process-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="work-process-content">
                <div className="row">
                  {reasons.map((reason, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-12 wow fadeInUp mb-4"
                      data-wow-delay={reason.delay}
                    >
                      <div className="work-process-items h-100">
                        <div className="digit-box">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h4>{reason.title}</h4>
                        <p>{reason.description}</p>
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
