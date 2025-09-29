import LeaderCard from "./LeaderCard";

const leaders = [
  {
    name: "Karthic",
    role: "President",
    image: "assets/img/team/Karthic.jpg",
    delay: ".3s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Roy Mon",
    role: "Vice President",
    image: "assets/img/team/Roy Mon.jpg",
    delay: ".5s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Tiraviyam",
    role: "Secretary Treasurer",
    image: "assets/img/team/Tiraviyam.jpg",
    delay: ".5s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
];

export default function LeadershipSection() {
  return (
    <section className="team-section fix section-padding bg-team">
      <div className="container">
        <div className="col-lg-12">
          <div className="row g-4 align-items-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="sub-content wow fadeInUp">
                  Leadership Team
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Our BNI Nagercoil <br />
                  Chapter Leaders
                </h2>
              </div>
              <p
                className="mt-3 mt-md-0 wow fadeInUp text-center"
                data-wow-delay=".5s"
              >
                Meet the dedicated leaders of BNI Nagercoil who guide our
                chapter, foster professional connections, and empower local
                businesses through referrals and structured networking
                opportunities.
              </p>
            </div>

            <div className="col-lg-12">
              <div className="row">
                {leaders.map((leader, index) => (
                  <LeaderCard key={index} leader={leader} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
