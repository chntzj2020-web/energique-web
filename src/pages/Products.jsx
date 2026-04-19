import "./Products.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const pvApplications = [
  {
    title: "Building-Integrated Photovoltaics",
    description:
      "Photovoltaic systems can be integrated into façades, skylights, roofs, and external envelopes, enabling buildings to generate clean energy while supporting sustainable architectural design.",
    image: "/images/products/solar1.png",
  },
  {
    title: "Automotive Solar Integration",
    description:
      "Photovoltaic materials can support energy generation in next-generation mobility solutions, contributing to auxiliary power supply, energy efficiency, and future-oriented vehicle design.",
    image: "/images/products/solar2.png",
  },
  {
    title: "Specialty & Industrial Applications",
    description:
      "From commercial infrastructure to emerging energy systems, photovoltaic technologies offer scalable possibilities for projects requiring lightweight, efficient, and adaptable solar solutions.",
    image: "/images/products/solar3.png",
  },
];

const smartGlassApplications = [
  {
    title: "Automotive Panoramic Roof",
    image: "/images/products/film1.png",
  },
  {
    title: "Side Windows",
    image: "/images/products/film2.png",
  },
  {
    title: "Rear Windshield Glass",
    image: "/images/products/film3.png",
  },
  {
    title: "Architecture",
    image: "/images/products/film4.png",
  },
  {
    title: "Home Interiors",
    image: "/images/products/film5.png",
  },
  {
    title: "3C Electronics",
    image: "/images/products/film6.png",
  },
];

function Products() {
  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="products-page">
          {/* HERO */}
          <section className="products-hero">
            <div className="products-hero-overlay"></div>

            <img
              src="/images/products/hero_banner.png"
              alt="Energique smart materials"
              className="products-hero-image"
            />

            <div className="products-hero-content">
              <p className="products-kicker">Product Solutions</p>

              <h1 className="products-title">
                Advanced Materials for Intelligent Living
              </h1>

              <p className="products-subtitle">
                Energique’s product portfolio is built around two core
                directions: photovoltaic technologies for clean energy
                applications, and smart glass material systems for dynamic
                privacy, comfort, durability, and modern integrated design.
              </p>

              <div className="products-hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() =>
                    document
                      .getElementById("products-overview")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore Products
                </button>

                <button
                  className="secondary-btn"
                  onClick={() =>
                    document
                      .getElementById("products-cta")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          {/* INTRO */}
          <section className="products-intro" id="products-overview">
            <div className="section-heading center">
              <p className="section-kicker">Our Product Portfolio</p>

              <h2 className="section-title">
                Two Core Product Lines, Multiple Future-Facing Applications
              </h2>

              <p className="section-description">
                Energique focuses on advanced material technologies that support
                both sustainable energy systems and intelligent space
                management. Our current product offerings are centered on
                photovoltaic solutions and smart glass material systems,
                designed for automotive, architectural, residential, and
                commercial applications.
              </p>
            </div>
          </section>

          {/* PHOTOVOLTAIC */}
          <section className="product-section">
            <div className="section-heading">
              <p className="section-kicker">Product Line 01</p>

              <h2 className="section-title">Photovoltaic Solutions</h2>

              <p className="section-description">
                Photovoltaic technology plays a central role in the global shift
                toward cleaner and more efficient energy systems. By converting
                solar energy into usable electricity, photovoltaic materials
                make it possible to integrate power generation into buildings,
                mobility, and specialized infrastructure.
              </p>
            </div>

            <div className="pv-grid">
              {pvApplications.map((item) => (
                <div className="pv-card" key={item.title}>
                  <div className="pv-card-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="pv-card-image"
                    />
                  </div>

                  <div className="pv-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SMART GLASS */}
          <section className="product-section smart-film-section">
            <div className="section-heading">
              <p className="section-kicker">Product Line 02</p>

              <h2 className="section-title">Smart Glass Material System</h2>

              <p className="section-description">
                Energique provides an integrated smart glass material solution
                combining switching film technology and advanced encapsulation
                materials for privacy, solar control, optical comfort, long-term
                durability, and next-generation glazing systems.
              </p>
            </div>

            <div className="film-tech-grid three-column">
              <div className="film-tech-card">
                <p className="film-tech-label">Standard Solution</p>
                <h3>PDLC Film</h3>
                <p>
                  PDLC smart film is widely used for switchable privacy and
                  simple light control in residential and commercial spaces.
                </p>
              </div>

              <div className="film-tech-card featured">
                <p className="film-tech-label">Energique Core Technology</p>
                <h3>PDCLC Film</h3>
                <p>
                  PDCLC technology offers stronger optical performance, better
                  efficiency, longer durability, and greater flexibility for
                  premium projects and next-generation glazing systems.
                </p>
              </div>

              <div className="film-tech-card">
                <p className="film-tech-label">Supporting Material</p>
                <h3>PVE Intelligent Glass Encapsulation Film</h3>
                <p>
                  Designed for laminated smart glass systems with high clarity,
                  strong adhesion, anti-yellowing stability, and reliable
                  long-term performance.
                </p>
              </div>
            </div>

            {/* APPLICATIONS */}
            <div className="applications-section">
              <div className="section-heading center">
                <p className="section-kicker">Application Scenarios</p>

                <h2 className="section-title">
                  Where Smart Glass Materials Create Value
                </h2>

                <p className="section-description">
                  Applied across vehicles, architecture, interiors and
                  electronics.
                </p>
              </div>

              <div className="application-grid">
                {smartGlassApplications.map((item) => (
                  <div className="application-card" key={item.title}>
                    <div className="application-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="application-image"
                      />
                    </div>

                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="products-cta" id="products-cta">
            <div className="products-cta-content">
              <p className="section-kicker">Next Step</p>

              <h2 className="section-title">
                Find the Right Material Solution for Your Project
              </h2>

              <p className="section-description">
                Whether you are developing clean energy applications or
                intelligent glazing systems, Energique offers advanced material
                solutions tailored to modern industry needs.
              </p>

              <div className="products-hero-buttons cta-buttons">
                <button className="primary-btn">Talk to Our Team</button>

                <button
                  className="secondary-btn"
                  onClick={() => (window.location.href = "/about")}
                >
                  Know More About Us
                </button>
              </div>
            </div>
          </section>
        </div>

        <div id="footer-info">
          <Footer />
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default Products;

