"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import BNICTA from "@/components/BNIcta";
import WhyChooseUs from "@/components/whyChooseUs";
import VisitorJoinDetails from "@/components/visitorJoinDetails";
import { VisitorWhyJoin } from "@/components/visitorWhyJoin";
import NextLayout from "@/layouts/NextLayout";
import VisitorsJoin from "@/components/visitorJoin";

const VisitorsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Your enquiry has been sent!");
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong.");
    }
  };
  return (
    <NextLayout header={1}>
      {/* Breadcrumb */}
      <Breadcrumb pageName="Visitors" />

      {/* Sections */}
      <VisitorWhyJoin />
      <BNICTA />
      <VisitorsJoin />
      <VisitorJoinDetails />

      {/* Modal Popup */}
      <section className="planning-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              Visitor Enquiry Form
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Attend BNI Kanya meeting
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Modal Header */}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                className="contact-form-items"
              >
                <div className="row g-4">
                  {/* Your Name */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="businessName"
                        placeholder="Business Name"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Your Message */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <textarea
                        name="message"
                        placeholder="Your Message (Optional)"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-6">
                    <button type="submit" className="theme-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>

              {/* Note */}
              <p className="text-sm text-gray-500 text-center mt-3">
                We will get back to you within 24 hours.
              </p>
              {status && (
                <p className="text-center mt-3 text-gray-600">{status}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default VisitorsPage;
