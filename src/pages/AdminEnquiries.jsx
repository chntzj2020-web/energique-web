import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Enquiry.css";
import Footer from "../components/Footer";

function Enquiry() {
  const [searchParams] = useSearchParams();

  const enquiryType = useMemo(() => {
    const type = searchParams.get("type");
    if (type === "commercial" || type === "residential") return type;
    return "general";
  }, [searchParams]);

  const contentMap = {
    commercial: {
      title: "Commercial Enquiry",
      subtitle:
        "Tell us about your project, product interest, or business needs, and our team will get back to you.",
      buttonText: "Submit Commercial Enquiry",
      messagePlaceholder:
        "Tell us about your project requirements, preferred products, timeline, or business enquiry.",
    },
    residential: {
      title: "Residential Enquiry",
      subtitle:
        "Tell us about your home privacy or shading needs, and our team will help you find the right solution.",
      buttonText: "Submit Residential Enquiry",
      messagePlaceholder:
        "Tell us about your home, the space you are looking to improve, and what kind of privacy or light control you need.",
    },
    general: {
      title: "General Enquiry",
      subtitle:
        "Please fill in the form below and our team will get back to you as soon as possible.",
      buttonText: "Submit Enquiry",
      messagePlaceholder: "Tell us more about your enquiry.",
    },
  };

  const currentContent = contentMap[enquiryType];

  const [formData, setFormData] = useState({
    enquiry_type: enquiryType,
    name: "",
    email: "",
    company: "",
    phone: "",
    suburb: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      enquiry_type: enquiryType,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const payload =
      enquiryType === "commercial"
        ? {
            enquiry_type: enquiryType,
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
          }
        : enquiryType === "residential"
        ? {
            enquiry_type: enquiryType,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            suburb: formData.suburb,
            message: formData.message,
          }
        : {
            enquiry_type: enquiryType,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          };

    try {
      const res = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setStatus({
        type: "success",
        message: "Your enquiry has been submitted successfully.",
      });

      setFormData({
        enquiry_type: enquiryType,
        name: "",
        email: "",
        company: "",
        phone: "",
        suburb: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enquiry-wrapper">
      <section className="enquiry-page">
        <div className="enquiry-container">
          <div className="enquiry-header">
            <p className="enquiry-kicker">Contact Us</p>
            <h1>{currentContent.title}</h1>
            <p>{currentContent.subtitle}</p>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group full-width">
              <label htmlFor="enquiry_type">Enquiry Type</label>
              <input
                id="enquiry_type"
                type="text"
                value={currentContent.title}
                disabled
              />
            </div>

            <div className="enquiry-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {enquiryType === "commercial" && (
                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    required
                  />
                </div>
              )}

              {enquiryType === "residential" && (
                <div className="form-group">
                  <label htmlFor="suburb">Suburb / Location</label>
                  <input
                    id="suburb"
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleChange}
                    placeholder="Enter your suburb or area"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder={currentContent.messagePlaceholder}
                required
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : currentContent.buttonText}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Enquiry;