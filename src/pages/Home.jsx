import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="home-page">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-kicker">Advanced Energy Materials</p>
            <h1 className="hero-title">ENERGIQUE</h1>
            <h2 className="hero-subtitle">Intelligent Film. Sustainable Energy.</h2>
            <p className="hero-description">
              From smart dimming films to next-generation photovoltaic solutions,
              Energique develops advanced material technologies for buildings,
              mobility, and future energy systems.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() =>
                  document
                    .getElementById("home-platform")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Technologies
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Platform Overview */}
        <section
          className="home-section overview-section"
          id="home-platform"
        >
          <div className="section-header">
            <p className="section-kicker">Who We Are</p>
            <h2 className="section-title">
              Advanced Materials for Light, Energy, and Mobility
            </h2>
          </div>

          <div className="overview-grid">
            <div className="overview-text">
              <p>
                Energique is an advanced materials company focused on intelligent
                surface technologies for modern architecture, transportation, and
                energy applications. Our portfolio spans smart dimming film,
                solar-integrated solutions, and next-generation material systems
                designed for performance, efficiency, and design freedom.
              </p>
              <p>
                With globally leading PDCLC capabilities, strategic industry
                partnerships, and expanding operations across North America, East
                Asia, and Australia, we are building a technology platform where
                light control and sustainable energy converge.
              </p>

              <Link to="/about" className="text-link">
                Learn more about us →
              </Link>
            </div>

            <div className="overview-cards">
              <div className="info-card">
                <h3>Material Innovation</h3>
                <p>
                  Advanced film and surface technologies engineered for dynamic
                  light management and energy performance.
                </p>
              </div>

              <div className="info-card">
                <h3>Energy Integration</h3>
                <p>
                  Expanding beyond dimming solutions into photovoltaic and
                  sustainable energy applications.
                </p>
              </div>

              <div className="info-card">
                <h3>Global Deployment</h3>
                <p>
                  Supporting partners and projects across automotive,
                  architectural, and commercial sectors worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Pillars */}
        <section className="home-section applications-section">
          <div className="section-header center">
            <p className="section-kicker">Core Technologies</p>
            <h2 className="section-title">
              A Technology Platform, Not Just a Single Product
            </h2>
            <p className="section-description">
              Energique combines smart film innovation with emerging energy
              technologies to support a broader future of intelligent surfaces.
            </p>
          </div>

          <div className="applications-grid">
            <div className="application-card">
              <h3>Smart Film</h3>
              <p>
                PDCLC-based dimming solutions for privacy, solar control, visual
                comfort, and responsive interior environments.
              </p>
            </div>

            <div className="application-card">
              <h3>Photovoltaics</h3>
              <p>
                Next-generation energy solutions designed to support solar
                integration, lightweight systems, and future-facing applications.
              </p>
            </div>

            <div className="application-card">
              <h3>Intelligent Surfaces</h3>
              <p>
                Advanced material systems that merge design, function, and energy
                performance across modern built environments and mobility.
              </p>
            </div>
          </div>
        </section>

        {/* Application Areas */}
        <section className="home-section highlights-section">
          <div className="section-header center">
            <p className="section-kicker">Applications</p>
            <h2 className="section-title">
              Designed for Buildings, Mobility, and Energy Systems
            </h2>
          </div>

          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-number">01</span>
              <h3>Architecture</h3>
              <p>
                Smart glazing and integrated material solutions for offices,
                hotels, residential developments, and public buildings.
              </p>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">02</span>
              <h3>Automotive</h3>
              <p>
                Advanced light-control technologies for vehicle windows, sunroofs,
                cabin comfort, and future mobility platforms.
              </p>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">03</span>
              <h3>Commercial Spaces</h3>
              <p>
                Flexible systems for retail, healthcare, hospitality, and
                workplace environments that require privacy and adaptability.
              </p>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">04</span>
              <h3>Energy Projects</h3>
              <p>
                Emerging material applications that support photovoltaic
                integration and sustainable energy innovation.
              </p>
            </div>
          </div>
        </section>

        <div id="footer-info">
          <Footer />
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default Home;