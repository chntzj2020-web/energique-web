import "./OurServices.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="our-services-page">
          {/* HERO */}
          <section className="services-hero">
            <div className="services-hero-overlay"></div>
            <img
              src="/images/service/hero_banner.png"
              alt="Our Services"
              className="services-hero-image"
            />

            <div className="services-hero-content">
              <p className="services-kicker">Our Services</p>
              <h1 className="services-title">
                Smart Material and Energy Solutions for Evolving Spaces
              </h1>
              <p className="services-subtitle">
                Energique brings together smart film technology, solar-oriented
                innovation, and project advisory support to help clients build
                more adaptive, efficient, and future-facing environments.
              </p>

              <div className="services-hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => scrollToSection("services-overview")}
                >
                  Explore Services
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo(0, 0);
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          {/* OVERVIEW */}
          <section className="services-overview" id="services-overview">
            <div className="section-heading center">
              <p className="section-kicker">What We Do</p>
              <h2 className="section-title">
                Three Complementary Capabilities, One Integrated Approach
              </h2>
              <p className="section-description">
                Our work spans intelligent glazing, energy-related material
                applications, and strategic collaboration support — helping turn
                emerging ideas into grounded, usable solutions.
              </p>
            </div>

            <div className="service-overview-grid">
              <div className="service-overview-card">
                <div className="service-overview-number">01</div>
                <h3>Smart Film Solutions</h3>
                <p>
                  Adaptive film and dimming technologies designed for privacy,
                  comfort, light control, and premium spatial experiences.
                </p>
              </div>

              <div className="service-overview-card">
                <div className="service-overview-number">02</div>
                <h3>Solar & Energy Solutions</h3>
                <p>
                  Forward-looking energy and photovoltaic directions that connect
                  material innovation with sustainable applications.
                </p>
              </div>

              <div className="service-overview-card">
                <div className="service-overview-number">03</div>
                <h3>Advisory & Partnerships</h3>
                <p>
                  Research, project guidance, and collaborative support for
                  clients exploring new technical and commercial possibilities.
                </p>
              </div>
            </div>
          </section>

          {/* SMART FILM */}
          <section className="service-block" id="smart-film">
            <div className="service-image-wrapper">
              <img
                src="/images/service/smart_film.png"
                alt="Smart film solutions"
                className="service-image"
              />
            </div>

            <div className="service-text">
              <p className="service-label">Service 01</p>
              <h2 className="service-name">Smart Film Solutions</h2>
              <p className="service-description">
                Energique provides advanced smart film solutions designed to
                enhance privacy, visual comfort, and spatial flexibility across
                commercial, residential, and specialised environments. Our smart
                film systems are developed to support modern architectural needs
                while maintaining a refined and seamless material appearance.
              </p>
              <p className="service-description">
                From meeting rooms, hospitality spaces, and retail interiors to
                premium residential applications, our solutions help transform
                static glass surfaces into responsive, multifunctional elements.
                This enables clients to achieve better control over openness,
                daylight, and user experience without compromising design
                quality.
              </p>
              <p className="service-description">
                Beyond product supply, we work closely with clients and partners
                to understand project requirements, application contexts, and
                performance priorities, helping deliver tailored smart film
                outcomes that balance technology, aesthetics, and long-term
                practicality.
              </p>
            </div>
          </section>

          {/* SOLAR */}
          <section className="service-block reverse" id="solar-energy">
            <div className="service-image-wrapper">
              <img
                src="/images/service/solar_energy.png"
                alt="Solar and energy solutions"
                className="service-image"
              />
            </div>

            <div className="service-text">
              <p className="service-label">Service 02</p>
              <h2 className="service-name">Solar & Energy Solutions</h2>
              <p className="service-description">
                Energique supports forward-looking solar and energy applications
                that connect material innovation with the evolving demands of
                clean energy infrastructure. We focus on practical solution
                pathways that align emerging technologies with real-world
                project needs, helping clients explore new possibilities in
                energy efficiency, photovoltaic integration, and future-ready
                system design.
              </p>
              <p className="service-description">
                Our work in this area reflects a broader commitment to
                sustainable development and advanced industrial collaboration.
                Whether the objective is to support energy-related materials,
                investigate photovoltaic use cases, or contribute to cleaner and
                more adaptive built environments, we aim to provide a grounded
                and commercially aware perspective.
              </p>
              <p className="service-description">
                By combining technical understanding with application-oriented
                thinking, Energique helps bridge the gap between innovation and
                implementation, enabling clients and partners to engage with
                solar and energy opportunities in a more strategic, informed,
                and future-conscious way.
              </p>
            </div>
          </section>

          {/* PARTNERSHIP */}
          <section className="service-block" id="advisory-partnerships">
            <div className="service-image-wrapper">
              <img
                src="/images/service/partnership.png"
                alt="Advisory and partnerships"
                className="service-image"
              />
            </div>

            <div className="service-text">
              <p className="service-label">Service 03</p>
              <h2 className="service-name">Advisory & Partnerships</h2>
              <p className="service-description">
                Energique offers advisory and partnership support for clients,
                collaborators, and organisations seeking to explore new material
                technologies, project opportunities, or market-facing
                applications. We recognise that successful innovation often
                depends not only on the product itself, but also on the quality
                of planning, communication, and cross-sector coordination behind
                it.
              </p>
              <p className="service-description">
                Our role may include early-stage research discussions, project
                direction, technical-commercial alignment, and collaborative
                engagement across different stakeholders. This allows us to
                support clearer decision-making and more confident progress,
                particularly in projects where new technologies require careful
                positioning and practical evaluation.
              </p>
              <p className="service-description">
                Through long-term partnerships and responsive project support,
                we aim to create value beyond transaction alone — building
                relationships that are informed, adaptable, and oriented toward
                sustainable growth, credible execution, and shared success.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="services-cta">
            <div className="services-cta-content">
              <p className="section-kicker">Let’s Build the Right Direction</p>
              <h2 className="section-title">
                Explore How Energique Can Support Your Project
              </h2>

              <div className="services-hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Talk to Our Team
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => navigate("/products")}
                >
                  Explore Products
                </button>
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

export default OurServices;