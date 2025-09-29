import RegionalTeamCard from "./regionalTeamCard";
import TeamCard from "./TeamCard";

const regionalTeam = [
  {
    name: "Ramkumar",
    role: "Chapter Growth Coordinator",
    image: "assets/img/team/Ramkumar.jpg",
    delay: ".5s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Nishwin",
    role: "Attendance",
    image: "assets/img/team/Nishwin.jpg",
    delay: ".7s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Faizal",
    role: "Referral Quality Check",
    image: "assets/img/team/Faizal.jpg",
    delay: "1.3s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Allwin",
    role: "Application Review",
    image: "assets/img/team/Allwin.jpg",
    delay: "1.5s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Krishnamoorthy",
    role: "Mentor Coordinator",
    image: "assets/img/team/Krishnamoorthy.jpg",
    delay: ".3s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },

  {
    name: "Sethu Ramalingam",
    role: "Retention",
    image: "assets/img/team/Sethu Ramalingam.jpg",
    delay: ".9s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
  {
    name: "Surendran",
    role: "Business Growth",
    image: "assets/img/team/Surendran.jpg",
    delay: "1.1s",
    socials: [
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-linkedin-in", url: "#" },
    ],
  },
];

export default function RegionalTeamSection() {
  return (
    <section className="team-section fix section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp">
                Regional Success Squad
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Driving Growth <br />
                With Our Membership Committee Team
              </h2>
            </div>
            <p
              className="mt-3 mt-md-0 wow fadeInUp text-center"
              data-wow-delay=".5s"
            >
              Meet our dedicated team members, who are committed to expanding
              businesses, enhancing professional networks, and creating
              impactful opportunities in Nagercoil and beyond.
            </p>
          </div>

          <div className="col-lg-12">
            <div className="row g-4">
              {regionalTeam.map((member, index) => (
                // <RegionalTeamCard key={index} member={member} />
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
