import React from 'react';
import './Consultants.css'; // Import the CSS file for styling
import Acv from "../Assets/Acv.jpg";
import Chew from "../Assets/chew.jpg";
import Disney from "../Assets/Disney.jpg";
import Kfc from "../Assets/kfc.jpg";
import Mannys from "../Assets/mannys.png";
import Peak from "../Assets/peak.jpg";
import Right from "../Assets/right.jpg";
import Thumb from "../Assets/thumb.jpeg";

const Consultants = () => {
  const services = [
    {
      image: Acv, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for ACV Auctions emphasize the convenience and transparency of real-time mobile vehicle auctions. We highlight features like detailed condition reports and a vast inventory, making it easy for dealers to buy and sell vehicles efficiently from anywhere.",
    },
    {
      image: Chew, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for Big League Chew highlight its fun, shredded bubble gum that brings the excitement of baseball to fans of all ages. We emphasize its unique packaging, bold flavors, and nostalgic appeal, making it a home-run treat for both kids and adults.",
    },
    {
      image: Disney, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for Walt Disney celebrate the magic and creativity behind the beloved characters, films, and theme parks that have enchanted audiences for decades. We focus on Disney's legacy of storytelling, innovation, and unforgettable experiences that continue to inspire generations around the world.",
    },
    {
      image: Kfc, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for KFC highlight its world-famous fried chicken, seasoned with Colonel Sanders’ secret recipe of 11 herbs and spices. We emphasize KFC’s tradition of delivering crispy, flavorful chicken, family-friendly bucket meals, and an authentic taste that customers have loved for generations.",
    },
    {
      image: Mannys, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for Manny's Cafeteria and Delicatessen celebrate its rich history and authentic deli experience, offering a menu filled with classic comfort foods and hearty sandwiches. We highlight the warm, welcoming atmosphere and commitment to quality that make Manny's a beloved destination for both locals and visitors.",
    },
    {
      image: Peak, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for Peak highlight its commitment to providing high-quality outdoor gear and apparel designed for adventure enthusiasts. We emphasize innovation, durability, and performance, encouraging customers to explore the great outdoors with confidence and style.",
    },
    {
      image: Right, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for Right Guard focus on providing effective, long-lasting protection against odor and sweat, ensuring confidence throughout the day. We emphasize the brand's innovative formulas and refreshing scents, catering to active individuals who value both performance and personal care.",
    },
    {
      image: Thumb, // Corrected: removed curly braces
      title: 'Ads Compaign',
      description:
        "Our ad campaigns for Green Thumb highlight the brand’s dedication to providing high-quality gardening tools and supplies for enthusiasts of all levels. We emphasize the importance of nurturing plants and creating beautiful outdoor spaces, inspiring customers to cultivate their green thumb with confidence and creativity.",
    },
  ];

  return (
    <div className="consultants-container">
      <h2>HMRC Consultants</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consultants;
