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
                action="#"
                id="contact-form"
                method="POST"
                className="contact-form-items"
              >
                <div className="row g-4">
                  {/* Your Name */}
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
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
                        id="businessName"
                        placeholder="Business Name"
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
                        id="email"
                        placeholder="Email"
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
                        id="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>

                  {/* Preferred Meeting Type */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <select
                        name="meetingType"
                        id="meetingType"
                        className="form-select"
                        required
                      >
                        <option value="">Preferred Meeting Type</option>
                        <option value="offline">Offline</option>
                        <option value="online">Online</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message (Optional)"
                        rows="4"
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
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default VisitorsPage;
