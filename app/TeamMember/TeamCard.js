import Link from "next/link";

export default function TeamCard({ member }) {
  // Fallback default values
  const defaultMember = {
    name: "Anonymous",
    role: "Role not specified",
    image: "/assets/img/team/default.jpg", // fallback image
    delay: ".3s",
    socials: [],
  };

  const m = member || defaultMember;

  return (
    <div
      className="col-xl-4 col-lg-2 col-md-6 wow fadeInUp"
      data-wow-delay={m.delay}
    >
      <div className="team-items">
        <div className="team-image">
          <img src={m.image} alt={m.name} />
        </div>
        <div className="team-content">
          <h4>
            <Link href="team-details">{m.name}</Link>
          </h4>
          <p>{m.role}</p>
          <div className="social-profile">
            <ul>
              {m.socials?.map((social, i) => (
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
