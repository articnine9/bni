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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Member Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-blue-600 mb-2">{member.role}</p>
              {member.company && (
                <p className="text-lg text-gray-700 mb-2">{member.company}</p>
              )}
              {member.contact && (
                <p className="text-lg text-gray-600 mb-4">
                  📞 {member.contact}
                </p>
              )}
              <div className="flex justify-center md:justify-start space-x-4">
                {member.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Member Details */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">About Member</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Professional Details</h3>
              <p className="text-gray-600">
                {member.role} {member.company && `at ${member.company}`}
              </p>
            </div>
            {member.contact && (
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-600">Phone: {member.contact}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
