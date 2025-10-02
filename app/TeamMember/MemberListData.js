import Link from "next/link";

export default function MemberListData({ member }) {
  // Fallback default values
  const defaultMember = {
    name: "Anonymous",
    role: "Role not specified",
    url: "",
    company: "Company not specified", // new default key
    contact: "N/A", // new default key
    image: "/assets/img/team/default.jpg", // fallback image
    delay: ".3s",
    socials: [],
  };

  const m = member || defaultMember;

  return (
    <div
      className="col-xl-3 col-lg-3 col-md-6 mb-3 wow fadeInUp"
      data-wow-delay={m.delay}
    >
      <div className="team-items">
        <div className="team-image">
          <img src={m.image} alt={m.name} />
        </div>
        <div className="team-content">
          <div className="width90">
            <h4>
              <Link
                href={
                  m.url || `/members/${m.name.toLowerCase().split(" ").pop()}`
                }
              >
                {m.name}
              </Link>
            </h4>
            <p>{m.role}</p>
            {m.company && <p className="text-black">{m.company}</p>}
            {m.contact && (
              <p className="text-muted phoneI">
                <i class="fas fa-phone-alt text-theme"></i> {m.contact}
              </p>
            )}
          </div>
          <div className="social-profile">
            <ul>
              {m.socials?.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
