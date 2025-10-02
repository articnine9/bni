import MemberListData from "./MemberListData";

export default function MemberList({ teamMembers }) {
  return (
    <section className="team-section fix section-padding ">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp">
                BNI Kanya Members
              </span>
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
                <MemberListData key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
