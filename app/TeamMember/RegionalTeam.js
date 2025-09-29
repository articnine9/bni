import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Mohamed Riaz",
    role: "Executive Director - BNI TNT",
    image: "assets/img/team/Mohamed Riaz.jpg",
    delay: ".3s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Max Prince",
    role: "Director Consultant",
    image: "assets/img/team/Max Prince.jpg",
    delay: ".5s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Rama Doss",
    role: "Support Ambassador",
    image: "assets/img/team/Rama Doss.jpg",
    delay: ".5s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp">Regional Team</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Meet Our Professional <br />
                Team Members
              </h2>
            </div>
            <p
              className="mt-3 mt-md-0 wow fadeInUp text center"
              data-wow-delay=".5s"
            >
              Meet our dedicated team members who are committed to growing local
              businesses, connecting professionals, and creating new
              opportunities in Nagercoil.
            </p>
          </div>

          <div className="col-lg-12">
            <div className="row">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
