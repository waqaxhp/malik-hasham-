import React from "react";
import Lottie from "lottie-react";
import qualityAnimation from "../Assets/ptzLCyjqws.json"; // Adjust the path accordingly
import "./Quality.css"

const QualityWithExperience = () => {
  return (
    <div className="quality-container">
      {/* Left Section */}
      <div className="left-content">
        <h1>Quality With Experience</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        
        {/* Lottie Animation */}
        {qualityAnimation ? (
          <Lottie
            animationData={qualityAnimation}
            loop={true}
            autoplay={true}
            className="illustration"
            style={{ height: "700px", width: "90vw" }}
          />
        ) : (
          <p>Loading animation...</p> // Fallback if animation doesn't load
        )}
      </div>

      {/* Right Section (Cards) */}
      <div className="right-content">
        <QualityCard
          title="Expertise and"
          highlight="Experience"
          description="Our team of experienced accountants has a deep understanding of the accounting industry and the latest tools and technologies to ensure that your financials are in good hands."
        />
        <QualityCard
          title="Personalized"
          highlight="Solutions"
          description="We believe in providing customized solutions to meet the unique needs of each and every one of our clients."
        />
        <QualityCard
          title="Convenient and"
          highlight="Affordable"
          description="Our remote accounting services are convenient and affordable, so you can focus on what you do best, running your business."
        />
        <QualityCard
          title="Commitment to"
          highlight="Excellence"
          description="We are committed to providing our clients with exceptional service and support. We take pride in our commitment to excellence."
        />
        <QualityCard
          title="Innovative"
          highlight="Approach"
          description="We constantly seek innovative solutions to help our clients stay ahead in a dynamic and competitive market."
        />
      </div>
    </div>
  );
};

const QualityCard = ({ title, highlight, description }) => {
  return (
    <div className="card">
      <h3>
        {title} <span>{highlight}</span>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default QualityWithExperience;
