import "./Application.css";
import Footer from "../components/Footer";

function Application() {
  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="application-page">
          {/* HERO */}
          <section className="application-hero">
            <div className="application-hero-overlay"></div>
            <img
              src="/images/application/application-hero.png"
              alt="Smart glass applications"
              className="application-hero-image"
            />

            <div className="application-hero-content">
              <p className="application-kicker">Application Scenarios</p>
              <h1 className="application-title">
                Intelligent Glass Solutions for Modern Spaces
              </h1>
              <p className="application-subtitle">
                From premium automotive cabins to adaptive architectural and
                commercial environments, Energique transforms glass into a more
                private, comfortable, and responsive experience.
              </p>

              <div className="application-hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() =>
                    document
                      .getElementById("application-overview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Applications
                </button>

                <button
                  className="secondary-btn"
                  onClick={() =>
                    document
                      .getElementById("application-cta")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          {/* OVERVIEW */}
          <section className="application-overview" id="application-overview">
            <div className="section-heading center">
              <p className="section-kicker">Where Energique Works</p>
              <h2 className="section-title">
                Smart Material Solutions Across Diverse Environments
              </h2>
              <p className="section-description">
                Energique's intelligent dimming and encapsulation technologies
                are designed for real-world applications where privacy, thermal
                comfort, optical clarity, and premium design experience matter.
              </p>
            </div>

            <div className="scenario-grid">
              <div className="scenario-card">
                <h3>Automotive</h3>
                <p>
                  Panoramic roofs, side windows, rear cabins, and executive
                  partitions for a cooler, quieter, and more private ride.
                </p>
              </div>

              <div className="scenario-card">
                <h3>Architectural</h3>
                <p>
                  Office partitions, facades, skylights, and residential glass
                  surfaces with adaptive privacy and light control.
                </p>
              </div>

              <div className="scenario-card">
                <h3>Commercial</h3>
                <p>
                  Hospitality, healthcare, retail, and premium business spaces
                  that require comfort, flexibility, and refined presentation.
                </p>
              </div>

              <div className="scenario-card">
                <h3>Custom Smart Spaces</h3>
                <p>
                  Tailored interiors, luxury environments, and specialty
                  projects enabled by zoned and multi-level dimming solutions.
                </p>
              </div>
            </div>
          </section>

          {/* AUTOMOTIVE */}
          <section className="application-block">
            <div className="application-image-wrapper">
              <img
                src="/images/application/automotive.png"
                alt="Automotive smart glass solution"
                className="application-image"
              />
            </div>

            <div className="application-text">
              <p className="application-label">Application 01</p>
              <h2 className="application-name">Automotive Solutions</h2>
              <p className="application-description">
                Create a cooler, quieter, and more private driving experience
                with intelligent dimming technologies for panoramic roofs, side
                windows, executive partitions, and premium passenger cabins.
              </p>

              <div className="application-feature-list">
                <div className="application-feature-card">
                  <h3>Panoramic Sunroofs</h3>
                  <p>
                    Adaptive dimming helps reduce glare, heat, and UV exposure
                    while preserving an open cabin feeling.
                  </p>
                </div>

                <div className="application-feature-card">
                  <h3>Rear Passenger Privacy</h3>
                  <p>
                    Switchable transparency enables privacy on demand for a more
                    refined passenger experience.
                  </p>
                </div>

                <div className="application-feature-card">
                  <h3>Thermal & Acoustic Comfort</h3>
                  <p>
                    Supports a more comfortable interior through solar control
                    and enhanced sound insulation.
                  </p>
                </div>
              </div>

              <p className="powered-by">
                Powered by PDCLC Intelligent Color Dimming Film, integrated with
                PVE encapsulation technology.
              </p>
            </div>
          </section>

          {/* ARCHITECTURAL */}
          <section className="application-block reverse">
            <div className="application-image-wrapper">
              <img
                src="/images/application/architectural.png"
                alt="Architectural smart glass solution"
                className="application-image"
              />
            </div>

            <div className="application-text">
              <p className="application-label">Application 02</p>
              <h2 className="application-name">Architectural Spaces</h2>
              <p className="application-description">
                Transform glass into an adaptive surface for light control,
                privacy, and contemporary architectural expression across office,
                residential, and hospitality settings.
              </p>

              <div className="application-feature-list">
                <div className="application-feature-card">
                  <h3>Office Partitions</h3>
                  <p>
                    Instantly shift between openness and privacy in meeting
                    rooms, executive offices, and collaborative spaces.
                  </p>
                </div>

                <div className="application-feature-card">
                  <h3>Residential Windows</h3>
                  <p>
                    Enhance comfort and daylight management while maintaining a
                    clean and modern design language.
                  </p>
                </div>

                <div className="application-feature-card">
                  <h3>Facades & Skylights</h3>
                  <p>
                    Introduce dynamic control to architectural glass for both
                    performance and visual sophistication.
                  </p>
                </div>
              </div>

              <p className="powered-by">
                Powered by intelligent dimming film for privacy and comfort, with
                integrated encapsulation for clarity and durability.
              </p>
            </div>
          </section>

          {/* COMMERCIAL */}
          <section className="application-block">
            <div className="application-image-wrapper">
              <img
                src="/images/application/commercial.png"
                alt="Commercial smart glass solution"
                className="application-image"
              />
            </div>

            <div className="application-text">
              <p className="application-label">Application 03</p>
              <h2 className="application-name">Commercial Environments</h2>
              <p className="application-description">
                Smart glass solutions for retail, healthcare, hospitality, and
                high-traffic environments where privacy, comfort, and premium
                presentation all play a role.
              </p>

              <div className="application-feature-list">
                <div className="application-feature-card">
                  <h3>Retail & Showrooms</h3>
                  <p>
                    Deliver a stronger brand experience through responsive glass
                    surfaces and more dynamic visual presentation.
                  </p>
                </div>

                <div className="application-feature-card">
                  <h3>Healthcare Settings</h3>
                  <p>
                    Improve consultation and treatment spaces with flexible
                    privacy control and a cleaner, more modern atmosphere.
                  </p>
                </div>

                <div className="application-feature-card">
                  <h3>Hotels & Lounges</h3>
                  <p>
                    Elevate guest experience with privacy, comfort, and
                    high-end design integration.
                  </p>
                </div>
              </div>

              <p className="powered-by">
                Designed for project-based environments where performance and
                premium space experience must work together.
              </p>
            </div>
          </section>

          {/* CUSTOM */}
          <section className="custom-section">
            <div className="section-heading center">
              <p className="section-kicker">Custom Smart Environments</p>
              <h2 className="section-title">
                Tailored Solutions for Next-Generation Interiors
              </h2>
              <p className="section-description">
                From zoned dimming and color-adaptive concepts to personalized
                privacy experiences, Energique enables custom smart environments
                for future-facing interior design.
              </p>
            </div>

            <div className="custom-grid">
              <div className="custom-card">
                <h3>Luxury Cabins</h3>
                <p>
                  Premium mobility interiors with elevated privacy and visual
                  sophistication.
                </p>
              </div>

              <div className="custom-card">
                <h3>VIP Rooms</h3>
                <p>
                  Adaptive glass solutions that create exclusivity and comfort
                  in private environments.
                </p>
              </div>

              <div className="custom-card">
                <h3>Creative Installations</h3>
                <p>
                  Dynamic materials for interactive and design-led spatial
                  experiences.
                </p>
              </div>

              <div className="custom-card">
                <h3>Specialty Projects</h3>
                <p>
                  Flexible smart glass systems tailored to unique operational
                  and design requirements.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="application-cta" id="application-cta">
            <div className="application-cta-content">
              <p className="section-kicker">Let’s Build the Right Scenario</p>
              <h2 className="section-title">
                Explore the Best Application for Your Project
              </h2>
              <p className="section-description">
                Whether you are designing for transportation, architecture, or
                commercial interiors, Energique helps bring intelligent material
                solutions into practical and high-value spaces.
              </p>

              <div className="application-hero-buttons">
                <button className="primary-btn">Talk to Our Team</button>
                <button className="secondary-btn">Explore Products</button>
              </div>
            </div>
          </section>
        </div>

        <div id="footer-info">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Application;