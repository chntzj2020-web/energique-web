import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer-info-section">
      <div className="footer-info-container">

        {/* Quick Links */}
        <div className="footer-column" id="quick-links">
          <h3 className="footer-heading">Quick Links</h3>

          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/applications">Applications</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Information</h3>

          <ul className="footer-contact">
            <li>QLD, Australia</li>
            <li>+61 400 000 000</li>
            <li>xxx@energique.com</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 ENERGIQUE. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;