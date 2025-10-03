"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        setStatus("✅ Your message has been sent!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    }
  };
  return (
    <NextLayout header={1}>
      <Breadcrumb pageName="Contact Us" />

      {/* Contact Section Start */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              {/* Left Side - Contact Info */}
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      {/* <img src="assets/img/bale.png" alt="BNI Kanya" /> */}
                      Contact Us
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Connect with BNI Kanya
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    We’re here to help you grow your business through trusted
                    networking, referrals, and meaningful connections. Reach out
                    to us today and become part of a dynamic business community.
                  </p>
                  <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li className="d-flex align-items-center gap-2">
                      <div className="w-100px">
                        <div className="icon ">
                          <i className="fas fa-envelope "></i>
                        </div>
                      </div>

                      <a href="mailto:bnikanyamc@gmail.com">
                        bnikanyamc@gmail.com
                      </a>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <div className="w-100px">
                        <div className="icon w-100px">
                          <i className="fas fa-map-marker-alt "></i>
                        </div>
                      </div>
                      <div style={{ width: "500px" }}>
                        25/2, North Street, near Reliance Mall, Krishnam Coil,
                        Nagercoil, Tamil Nadu 629001.
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <div className="w-100px">
                        <div className="icon">
                          <i className="fas fa-clock "></i>
                        </div>
                      </div>
                      Tuesday : 7.30 AM Onwards
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <div className="w-100px">
                        <div className="icon">
                          <i className="fas fa-phone-alt "></i>
                        </div>
                      </div>
                      <a href="tel:+919443979199">+91 94439 79199</a> |{" "}
                      <a href="tel:+919677587777">+91 96775 87777</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="col-lg-6">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3>Send Us a Message</h3>
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  {status && <p className="mt-3 text-center">{status}</p>}
                </div>
              </div>
              {/* End Right Side */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.355486111111!2d77.4326!3d8.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f5b1234567%3A0xabcdef987654321!2sReliance%20Mall%2C%20Krishnam%20Coil%2C%20Nagercoil!5e0!3m2!1sen!2sin!4v1691984054261!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default ContactPage;
