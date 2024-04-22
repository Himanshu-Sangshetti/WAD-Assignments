import React from "react";
import "./About.css"; // Import your CSS file for styling

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I am Himanshu Sangshetti, currently in my third year of studies at PICT IT. My academic journey has been complemented by a keen interest in competitive coding and cloud computing. Over the course of a year, I have immersed myself in the realm of cloud technologies, exploring platforms such as AWS, Azure, GCP, and OCI. This hands-on experience has allowed me to implement services offered by these platforms, as components of various projects that I meticulously document in my blogs.
          </p>
          <p className="about-text">
            Moreover, I have demonstrated my expertise in this domain by acquiring certifications in AZ-900, AI-900, AZ-104, and OCI Foundations.
          </p>
          <p className="about-text">
            I am driven by curiosity and an immense desire to explore new technologies and domains.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
