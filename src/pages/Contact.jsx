import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <p className="contact-intro">
          To find out more about how <a href="/">Energique</a> can provide you with unique and innovative privacy solutions,
          please contact us.
        </p>

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

      <div className="contact-right">
        <div className="contact-action-group">
          <h2>COMMERCIAL ENQUIRIES</h2>
          <a href="/" className="contact-btn blue">
            CLICK HERE TO SEND AN ENQUIRY
          </a>
        </div>

        <div className="contact-action-group">
          <h2>RESIDENTIAL / HOME OWNERS</h2>
          <a href="/" className="contact-btn red">
            HOME OWNERS ONLINE ESTIMATOR
          </a>
          <a href="/" className="contact-btn blue">
            CLICK HERE TO SEND AN ENQUIRY
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;