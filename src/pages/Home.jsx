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
            <p className="hero-kicker">PDCLC Film</p>
            <h1 className="hero-title">ENERGIQUE</h1>
            <h2 className="hero-subtitle">Switchable Privacy Solutions</h2>
            <p className="hero-description">
              Advanced smart film technologies designed for modern automotive,
              architectural, and commercial environments.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() =>
                  document
                    .getElementById("quick-links")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore More
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

        {/* Overview */}
        <section className="home-section overview-section" id="home-overview">
          <div className="section-header">
            <p className="section-kicker">Who We Are</p>
            <h2 className="section-title">
              Leading Innovation in Smart Dimming Film
            </h2>
          </div>

          <div className="overview-grid">
            <div className="overview-text">
              <p>
                Energique is dedicated to the development and production of
                advanced smart dimming film solutions. With globally leading
                PDCLC technology, we deliver intelligent privacy and light
                control systems for diverse environments.
              </p>
              <p>
                Backed by strong international cooperation and deep collaboration
                with HIUV, we are expanding across global markets including
                North America, East Asia, and Australia, with headquarters in
                Queensland.
              </p>

              <Link to="/about" className="text-link">
                Learn more about us →
              </Link>
            </div>

            <div className="overview-cards">
              <div className="info-card">
                <h3>Global Reach</h3>
                <p>
                  Operating with partnerships across multiple international
                  markets.
                </p>
              </div>

              <div className="info-card">
                <h3>Advanced Technology</h3>
                <p>
                  Industry-leading PDCLC film solutions for privacy, comfort,
                  and energy efficiency.
                </p>
              </div>

              <div className="info-card">
                <h3>Wide Applications</h3>
                <p>
                  Suitable for automotive, architectural, commercial, and
                  specialty use cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="home-section applications-section">
          <div className="section-header center">
            <p className="section-kicker">Applications</p>
            <h2 className="section-title">
              Designed for Modern Spaces and Mobility
            </h2>
            <p className="section-description">
              Our smart film technology enhances privacy, comfort, and design
              flexibility across a wide range of industries.
            </p>
          </div>

          <div className="applications-grid">
            <div className="application-card">
              <h3>Automotive</h3>
              <p>
                Smart dimming solutions for vehicle windows, sunroofs, and
                next-generation cabin experiences.
              </p>
            </div>

            <div className="application-card">
              <h3>Architecture</h3>
              <p>
                Dynamic privacy and light control for offices, hotels,
                residential spaces, and public buildings.
              </p>
            </div>

            <div className="application-card">
              <h3>Commercial</h3>
              <p>
                Flexible solutions for meeting rooms, retail spaces, healthcare
                environments, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="home-section highlights-section">
          <div className="section-header center">
            <p className="section-kicker">Why Energique</p>
            <h2 className="section-title">Smart Technology, Practical Value</h2>
          </div>

          <div className="highlights-grid">
            <div className="highlight-item">
              <span className="highlight-number">01</span>
              <h3>Privacy on Demand</h3>
              <p>
                Instantly switch between transparent and private states to suit
                different environments and needs.
              </p>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">02</span>
              <h3>Energy Efficiency</h3>
              <p>
                Support improved thermal comfort and solar control for more
                sustainable spaces.
              </p>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">03</span>
              <h3>Modern Aesthetics</h3>
              <p>
                Integrate seamlessly into contemporary design while adding
                intelligent functionality.
              </p>
            </div>

            <div className="highlight-item">
              <span className="highlight-number">04</span>
              <h3>Scalable Solutions</h3>
              <p>
                From single installations to large commercial projects, our
                products adapt to different project needs.
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