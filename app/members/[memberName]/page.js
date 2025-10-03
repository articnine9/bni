import FunFactCounter from "@/components/FunFactCounter";
import TeamSection from "@/app/TeamMember/RegionalTeam";
import MemberList from "@/app/TeamMember/MembersList";
import RegionalTeamSection from "@/app/TeamMember/RegionalTeamSection";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import BNICTA from "@/components/BNIcta";
import Breadcrumb from "@/components/Breadcrumb";
import teamMembers from "@/data/membersList";
const MemberPage = ({ params }) => {
  // Get the full URL path
  const currentUrl = `/members/${params.memberName}`;

  // Find member by exact URL match
  const member = teamMembers.find((m) => m.url === currentUrl);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Member Not Found</h1>
        <p className="text-gray-600">The requested member does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <NextLayout header={1}>
        <Breadcrumb pageName="Members" />
        <section className="funfact-section section-padding  ">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Member Header */}
                <div className="card shadow-sm border-0 mb-4">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      {/* Image Section - Left */}
                      <div className="col-md-4 text-center mb-3 mb-md-0">
                        <div className="position-relative d-inline-block">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="img-fluid rounded-circle shadow text-theme"
                            style={{
                              width: "200px",
                              height: "200px",
                              objectFit: "cover",
                              border: "4px solid #0d6efd",
                            }}
                          />
                        </div>
                      </div>

                      {/* Content Section - Right */}
                      <div className="col-md-8">
                        <div className="text-center text-md-start">
                          <h1 className="h2 fw-bold text-dark mb-2">
                            {member.name}
                          </h1>

                          <p className="h5 text-primary mb-2">{member.role}</p>

                          {member.company && (
                            <p className="fs-5 text-secondary mb-2">
                              <i className="fas fa-building me-2"></i>
                              {member.company}
                            </p>
                          )}

                          {member.contact && (
                            <p className="fs-5 text-muted mb-3">
                              <i className="fas fa-phone me-2"></i>
                              {member.contact}
                            </p>
                          )}

                          {/* Social Links */}
                          <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            {member.socials.map((social, index) => (
                              <a
                                key={index}
                                href={social.url}
                                className="btn btn-outline-secondary btn-sm rounded-circle"
                                style={{ width: "40px", height: "40px" }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className={`${social.icon}`}></i>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Member Details */}
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h2 className="h4 fw-semibold text-dark mb-4">
                      <i className="fas fa-user me-2"></i>
                      About Member
                    </h2>

                    <div className="row">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <div className="d-flex align-items-start">
                          <i className="fas fa-briefcase text-primary me-3 mt-1"></i>
                          <div>
                            <h3 className="h6 fw-medium mb-2">
                              Professional Details
                            </h3>
                            <p className="text-muted mb-0">
                              {member.role}{" "}
                              {member.company && `at ${member.company}`}
                            </p>
                          </div>
                        </div>
                      </div>

                      {member.contact && (
                        <div className="col-md-6">
                          <div className="d-flex align-items-start">
                            <i className="fas fa-address-card text-primary me-3 mt-1"></i>
                            <div>
                              <h3 className="h6 fw-medium mb-2">
                                Contact Information
                              </h3>
                              <p className="text-muted mb-0">
                                <i className="fas fa-phone me-1"></i>
                                {member.contact}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Funfact Section Start */}
        <section className="funfact-section section-padding pt-0 ">
          <div className="container">
            <div className="section-title text-center">
              <span className="sub-content wow fadeInUp">
                {/* <img src="assets/img/bale.png" alt="img" /> */}
                BNI Kanya Achievements
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Chapter's Impressive Statistics
              </h2>
              <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
                Join the most successful business networking chapter in
                Nagercoil
              </p>
            </div>
            <FunFactCounter />
          </div>
        </section>

        {/* Team Section Start */}
        <BNICTA />
      </NextLayout>
    </>
  );
};

export default MemberPage;
