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
      title: 'Company Accounts',
      description:
        "Our team of experienced accountants can assist you with all aspects of your company’s accounting needs, including bookkeeping, financial statements, tax returns, and other regulatory filings.",
    },
    {
      image: Chew, // Corrected: removed curly braces
      title: 'Payroll Accounting',
      description:
        "At Fintax Support Limited, we offer HMRC payroll accounting services to help you stay compliant with UK tax laws and regulations.",
    },
    {
      image: Disney, // Corrected: removed curly braces
      title: 'Tax Accounting',
      description:
        "Our team of experienced accountants can assist you with all aspects of tax management, including tax planning, preparation, and filing of tax returns.",
    },
    {
      image: Kfc, // Corrected: removed curly braces
      title: 'VAT Procedures',
      description:
        "Our team of experienced accountants can assist you with all aspects of VAT procedures, including VAT registration, VAT returns, and EC Sales List submissions.",
    },
    {
      image: Mannys, // Corrected: removed curly braces
      title: 'Self Assessment',
      description:
        "At Fintax Support Limited, we offer self-assessment services to help you with the entire process, from preparing your tax return to filing it with HMRC.",
    },
    {
      image: Peak, // Corrected: removed curly braces
      title: 'UTR Registration',
      description:
        "Our team of experienced accountants can assist you with the registration process and ensure that you have all the necessary documents and information required by HMRC.",
    },
    {
      image: Right, // Corrected: removed curly braces
      title: 'Budgeting & Forecasting',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus feugiat laoreet.",
    },
    {
      image: Thumb, // Corrected: removed curly braces
      title: 'Customized Services',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus feugiat laoreet.",
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
