import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="page-layout">
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
            <button className="primary-btn">Explore Products</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default App;