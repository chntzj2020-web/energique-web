import "./Contact.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="contact-wrapper">
          <section className="contact-hero">
            <div className="contact-hero-overlay"></div>
            <div className="contact-hero-content">
              <p className="contact-kicker">CONTACT US</p>
              <h1 className="contact-hero-title">
                Let’s Talk About Your Smart Glass Needs
              </h1>
              <p className="contact-hero-text">
                To find out more about how <a href="/">Energique</a> can provide
                you with unique and innovative privacy solutions, please contact
                us.
              </p>
            </div>
          </section>

          <section className="contact-main-section">
            <div className="contact-main-container">
              <div className="contact-info-column">
                <div className="contact-section-header">
                  <p className="contact-section-kicker">OUR OFFICES</p>
                  <h2 className="contact-section-title">
                    Speak with our team
                  </h2>
                </div>

                <div className="contact-grid">
                  <div className="contact-card">
                    <h3>Head Office</h3>
                    <p>📞 +61 400 000 000</p>
                    <p>xxx@energique.com.au</p>
                  </div>

                  <div className="contact-card">
                    <h3>Sydney</h3>
                    <p>📞 +61 468 366 947</p>
                    <p>nsw@energique.com.au</p>
                  </div>

                  <div className="contact-card">
                    <h3>Queensland</h3>
                    <p>📞 +61 400 000 000</p>
                    <p>qld@energique.com.au</p>
                  </div>
                </div>
              </div>

              <div className="contact-action-column">
                <div className="contact-section-header">
                  <p className="contact-section-kicker">ENQUIRIES</p>
                  <h2 className="contact-section-title">
                    Choose the enquiry type
                  </h2>
                </div>

                <div className="contact-action-card">
                  <span className="contact-action-badge">Commercial</span>
                  <h3>Commercial Enquiries</h3>
                  <p>
                    Tell us about your project, product interest, or business
                    requirements for commercial applications.
                  </p>
                  <Link
                    to="/enquiry?type=commercial"
                    className="contact-btn"
                  >
                    SEND COMMERCIAL ENQUIRY
                  </Link>
                </div>

                <div className="contact-action-card">
                  <span className="contact-action-badge">Residential</span>
                  <h3>Residential Enquiries</h3>
                  <p>
                    Reach out to discuss smart privacy solutions for homes,
                    apartments, and other residential spaces.
                  </p>
                  <Link
                    to="/enquiry?type=residential"
                    className="contact-btn"
                  >
                    SEND RESIDENTIAL ENQUIRY
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default Contact;