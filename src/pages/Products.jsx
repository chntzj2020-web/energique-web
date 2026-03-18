import "./Products.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Products() {
  return (
    <div className="page-layout">
      <div className="main-content">
        <div className="products-page">
          {/* HERO */}
          <section className="products-hero">
            <div className="products-hero-overlay"></div>
            <img
              src="/images/products/products-hero.png"
              alt="Smart glass technology"
              className="products-hero-image"
            />

            <div className="products-hero-content">
              <p className="products-kicker">Product Solutions</p>
              <h1 className="products-title">
                Intelligent Materials for Smart Privacy and Comfort
              </h1>
              <p className="products-subtitle">
                Advanced dimming film and encapsulation solutions engineered for
                automotive, architectural, and commercial environments.
              </p>

              <div className="products-hero-buttons">
                <button
                  className="primary-btn"
                  onClick={() =>
                    document
                      .getElementById("product-lineup")
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
          <section className="products-intro" id="product-lineup">
            <div className="section-heading">
              <p className="section-kicker">Our Lineup</p>
              <h2 className="section-title">Two Core Technologies, One Complete Solution</h2>
              <p className="section-description">
                Energique’s product system is built around two complementary
                technologies: PDCLC Intelligent Color Dimming Film for dynamic
                privacy and comfort, and PVE Intelligent Glass Encapsulation Film
                for clarity, durability, and enhanced integrated performance.
              </p>
            </div>
          </section>

          {/* PRODUCT 1 */}
          <section className="product-block">
            <div className="product-image-wrapper">
              <img
                src="/images/products/pdclc-film.png"
                alt="PDCLC Intelligent Color Dimming Film"
                className="product-image"
              />
            </div>

            <div className="product-text">
              <p className="product-label">Product 01</p>
              <h2 className="product-name">PDCLC Intelligent Color Dimming Film</h2>
              <p className="product-description">
                A fast-switching smart film solution that combines privacy,
                thermal comfort, UV protection, and optical clarity in one
                seamless surface.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <h3>Instant Privacy</h3>
                  <p>Rapid switching performance for on-demand privacy control.</p>
                </div>

                <div className="feature-card">
                  <h3>UV Protection</h3>
                  <p>Helps block harmful UV exposure for a safer interior experience.</p>
                </div>

                <div className="feature-card">
                  <h3>Thermal Comfort</h3>
                  <p>Supports heat insulation and a cooler cabin or indoor environment.</p>
                </div>

                <div className="feature-card">
                  <h3>Custom Dimming</h3>
                  <p>Multi-level dimming and zoned configurations for flexible use.</p>
                </div>

                <div className="feature-card">
                  <h3>Clear Visibility</h3>
                  <p>Balances privacy with transparency and modern visual appeal.</p>
                </div>

                <div className="feature-card">
                  <h3>Acoustic Support</h3>
                  <p>Improves comfort with enhanced sound insulation performance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCT 2 */}
          <section className="product-block reverse">
            <div className="product-image-wrapper">
              <img
                src="/images/products/pve-film.png"
                alt="PVE Intelligent Glass Encapsulation Film"
                className="product-image"
              />
            </div>

            <div className="product-text">
              <p className="product-label">Product 02</p>
              <h2 className="product-name">PVE Intelligent Glass Encapsulation Film</h2>
              <p className="product-description">
                A high-clarity encapsulation layer designed to improve
                transparency, anti-yellowing performance, durability, and
                overall integrated thermal and acoustic results.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <h3>High Transparency</h3>
                  <p>Designed for excellent light transmission and visual purity.</p>
                </div>

                <div className="feature-card">
                  <h3>Low Haze</h3>
                  <p>Maintains a cleaner and more refined optical appearance.</p>
                </div>

                <div className="feature-card">
                  <h3>Anti-yellowing</h3>
                  <p>Improves long-term visual stability under UV exposure.</p>
                </div>

                <div className="feature-card">
                  <h3>Acoustic & Thermal Support</h3>
                  <p>Contributes to comfort through heat and sound insulation.</p>
                </div>

                <div className="feature-card">
                  <h3>No Plasticizers</h3>
                  <p>Built with a cleaner material approach for advanced applications.</p>
                </div>

                <div className="feature-card">
                  <h3>Environmentally Friendly</h3>
                  <p>Supports premium performance with a more sustainable profile.</p>
                </div>
              </div>
            </div>
          </section>

          {/* INTEGRATED SYSTEM */}
          <section className="integrated-section">
            <div className="section-heading center">
              <p className="section-kicker">Integrated Performance</p>
              <h2 className="section-title">Better Together</h2>
              <p className="section-description">
                By combining active dimming technology with advanced glass
                encapsulation materials, Energique delivers a more complete
                solution for privacy, comfort, clarity, and intelligent space design.
              </p>
            </div>

            <div className="integrated-cards">
              <div className="integrated-card">
                <h3>PDCLC Film</h3>
                <p>
                  Dynamic switching, customizable dimming, privacy on demand,
                  and enhanced user experience.
                </p>
              </div>

              <div className="integrated-plus">+</div>

              <div className="integrated-card">
                <h3>PVE Film</h3>
                <p>
                  Higher transparency, lower haze, anti-yellowing durability,
                  and stronger integrated comfort performance.
                </p>
              </div>

              <div className="integrated-equals">=</div>

              <div className="integrated-card highlight">
                <h3>Complete Smart Glass System</h3>
                <p>
                  A unified material solution for automotive, architectural,
                  and commercial applications.
                </p>
              </div>
            </div>
          </section>

          {/* HIGHLIGHTS */}
          <section className="highlights-section">
            <div className="section-heading center">
              <p className="section-kicker">Technology Highlights</p>
              <h2 className="section-title">Performance That Stands Out</h2>
            </div>

            <div className="highlight-grid">
              <div className="highlight-card">
                <h3>5ms</h3>
                <p>Fast switching response for dynamic privacy control.</p>
              </div>

              <div className="highlight-card">
                <h3>99.99%</h3>
                <p>UV blocking capability for improved interior protection.</p>
              </div>

              <div className="highlight-card">
                <h3>7-10°C</h3>
                <p>Potential cooling effect compared with ordinary sunroof glass.</p>
              </div>

              <div className="highlight-card">
                <h3>Multi-Zone</h3>
                <p>Customizable dimming configurations for tailored spaces.</p>
              </div>
            </div>
          </section>

          {/* COMPARISON */}
          <section className="comparison-section">
            <div className="section-heading center">
              <p className="section-kicker">Comparison</p>
              <h2 className="section-title">How the Products Work Across Performance Needs</h2>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>PDCLC Film</th>
                    <th>PVE Film</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Privacy Switching</td>
                    <td>✓</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>UV Protection</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Optical Clarity</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Thermal Comfort</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Acoustic Support</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Anti-yellowing</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Structural Integration</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="products-cta" id="products-cta">
            <div className="products-cta-content">
              <p className="section-kicker">Next Step</p>
              <h2 className="section-title">Find the Right Product for Your Project</h2>
              <p className="section-description">
                Whether you are designing for premium mobility, modern
                architecture, or commercial interiors, Energique offers smart
                material solutions tailored to your application needs.
              </p>

              <div className="products-hero-buttons">
                <button className="primary-btn">Talk to Our Team</button>
                <button className="secondary-btn">Explore Applications</button>
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