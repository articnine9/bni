import Link from "next/link";

export default function LeaderCard({ leader }) {
  const defaultLeader = {
    name: "Anonymous",
    role: "Role not specified",
    image: "/assets/img/team/default.jpg",
    delay: ".3s",
    socials: [],
  };

  const l = leader || defaultLeader;

  return (
    <div
      className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
      data-wow-delay={l.delay}
    >
      <div className="team-items">
        <div className="team-image">
          <img src={l.image} alt={l.name} />
        </div>
        <div className="team-content">
          <h4>
            <Link href="team-details">{l.name}</Link>
          </h4>
          <p>{l.role}</p>
          <div className="social-profile">
            <ul>
              {l.socials?.map((social, i) => (
                <li key={i}>
                  <a href={social.url || "#"}>
                    <i className={social.icon || ""} />
                  </a>
                </li>
              ))}
            </ul>
            <span className="plus-btn">
              <i className="far fa-plus" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
