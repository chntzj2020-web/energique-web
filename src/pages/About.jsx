import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./About.css";

const timelineData = [
  {
    year: "2022",
    title: "Preparation for Company Setup",
    description:
      "The early stage was focused on research, planning, and building the foundation of the company. We began shaping our direction around smart materials and the future of adaptive glass technologies.",
    note:
      "Every long-term vision starts quietly — with the courage to begin before the market is ready.",
  },
  {
    year: "2023",
    title: "Established in Brisbane, QLD, Australia",
    description:
      "Energique was officially established in Brisbane, marking the beginning of our journey in the Australian market. This milestone laid the groundwork for our local operations, partnerships, and long-term expansion.",
    note:
      "For us, this was more than registration on paper — it was the moment an idea became a company with a real destination.",
  },
  {
    year: "2024",
    title: "Product R&D Focused on PDCLC Smart Dimming Film",
    description:
      "Our core development efforts centered on PDCLC intelligent color dimming film, with applications across commercial, residential, automotive, and architectural sectors. We worked to refine both product performance and real-world usability.",
    note:
      "Technology only matters when it improves the way people live, work, and move through space.",
  },
  {
    year: "2025",
    title: "Entered the Application Stage",
    description:
      "With product capabilities advancing, we moved from development into practical application scenarios. This stage marked an important shift from technical validation to real market integration.",
    note:
      "Turning innovation into something people can actually experience — that is where ideas begin to earn trust.",
  },
  {
    year: "2026",
    title: "Expansion into NSW, VIC and Wider Markets",
    description:
      "We are continuing to expand across Australia, entering broader regional markets while strengthening partnerships and exploring new opportunities in intelligent glazing solutions.",
    note:
      "We see the future of glass as something active, responsive, and quietly transformative in everyday environments.",
  },
];

const About = () => {
  return (
    <div className="page-layout">
      <div className="main-content">
        <section className="about-hero">
          <div className="about-hero-overlay"></div>
          <div className="about-hero-content">
            <p className="about-kicker">ABOUT ENERGIQUE</p>
            <h1 className="about-hero-title">
              A Journey of Innovation in Smart Glass Solutions
            </h1>
            <p className="about-hero-text">
              From early preparation to product development and market expansion,
              our story is built on one belief: advanced materials should create
              more intelligent, elegant, and adaptable spaces.
            </p>
          </div>
        </section>

        <section className="about-summary-section">
          <div className="about-summary-container">
            <div className="about-summary-intro">
              <p className="about-summary-kicker">WHO WE ARE</p>
              <h2 className="about-summary-title">
                Smart dimming technology, developed with purpose
              </h2>
            </div>

            <div className="about-summary-grid">
              <div className="about-summary-card">
                <h3>Technology</h3>
                <p>
                  We specialize in smart dimming film and intelligent
                  light-control solutions powered by advanced PDCLC technology.
                </p>
              </div>

              <div className="about-summary-card">
                <h3>Applications</h3>
                <p>
                  Our products are designed for commercial, residential,
                  automotive, and architectural environments where privacy,
                  comfort, and flexibility matter.
                </p>
              </div>

              <div className="about-summary-card">
                <h3>Vision</h3>
                <p>
                  We aim to create glass solutions that are not only functional,
                  but also more sustainable, refined, and responsive to modern
                  life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-timeline-section">
          <div className="about-timeline-container">
            <div className="about-timeline-header">
              <p className="timeline-kicker">Company Timeline</p>
              <h2 className="timeline-main-title">How We’ve Grown</h2>
            </div>

            <div className="about-timeline-list">
              {timelineData.map((item) => (
                <div className="timeline-row" key={item.year}>
                  <div className="timeline-left">
                    <div className="timeline-marker">
                      <span className="timeline-dot"></span>
                      <span className="timeline-year">{item.year}</span>
                    </div>
                  </div>

                  <div className="timeline-bridge">
                    <span className="timeline-bridge-line"></span>
                  </div>

                  <div className="timeline-right">
                    <div className="timeline-card">
                      <div className="timeline-card-badge">{item.year}</div>
                      <h3 className="timeline-card-title">{item.title}</h3>
                      <p className="timeline-card-description">
                        {item.description}
                      </p>
                      <p className="timeline-card-note">“{item.note}”</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <Sidebar />
    </div>
  );
};

export default About;