import "../App.css";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="home-page">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-kicker">PDCLC Film</p>
            <h1 className="hero-title">ENERGIQUE</h1>
            <h2 className="hero-subtitle">Switchable Privacy Solutions</h2>
            <p className="hero-description">
              Advanced smart film and glass technologies designed for modern
              automotive, architectural, and commercial environments.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() =>
                  document
                    .getElementById("footer-info")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Products
              </button>
              <button
                className="secondary-btn"
                onClick={() =>
                  document
                    .getElementById("footer-info")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <section id="footer-info" className="footer-info-section">
          <div className="footer-info-container">
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Applications</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
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
      </div>

      <Sidebar />
    </div>
  );
}

export default Home;