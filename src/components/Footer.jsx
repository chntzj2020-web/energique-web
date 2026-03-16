import "./Footer.css";

function Footer() {
  return (
    <section className="footer-info-section">
      <div className="footer-info-container">

        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/applications">Applications</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

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