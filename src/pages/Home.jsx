import "../App.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

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

        <div id="footer-info">
          <Footer />
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default Home;