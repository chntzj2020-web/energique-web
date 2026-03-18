import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="page-layout">
      <div className="main-content">
        <section className="about-section" id="about">
          <div className="about-container">
            <div className="about-text">
              <p className="about-subtitle">About Us</p>
              <h2 className="about-title">Leading Innovation in Smart Dimming Film</h2>

              <p className="about-description">
                We are a China-based company specializing in the production and
                development of smart dimming film. With globally leading PDCLC
                technology, we provide intelligent light-control solutions for
                commercial, residential, automotive, and architectural applications.
              </p>

              <p className="about-description">
                Our operations and partnerships span North America, East Asia and
                other international markets. Through close cooperation with HIUV,
                we continue to advance smart glass technology and expand its
                applications across multiple industries.
              </p>

              <p className="about-description">
                We are now expanding into the Australian market, with headquarters
                located in Queensland. Our goal is to deliver innovative and
                sustainable smart glass solutions to customers worldwide.
              </p>
            </div>

            <div className="about-image-wrapper">
              <img
                src="/images/about/about_image1.png"
                alt="Company History"
                className="about-image"
              />
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