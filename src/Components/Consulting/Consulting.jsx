import React from "react";
import './Consulting.css';
import Download1 from "../Assets/download-1.png";
import Download2 from "../Assets/download-2.png";
import Download3 from "../Assets/download-3.png";
import Download4 from "../Assets/download-4.png";
import Download5 from "../Assets/download-5.png";
import Download7 from "../Assets/download-7.png";
import Download from "../Assets/download.jpeg";
import Paypal from "../Assets/paypal.png";

function Consulting() {
    return (
        <>
            <div className="clients">
                <h2>Our Few Clients</h2>
                <div className="clients-clients-slider">
                    <div className="clients-clients-slide-track">
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download1} alt="1" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download2} alt="2" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download3} alt="3" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download4} alt="4" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download5} alt="5" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download7} alt="6" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download} alt="7" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Paypal} alt="Paypal" /></div>
                        {/* Repeat for infinite scrolling */}
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download1} alt="1" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download2} alt="2" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download3} alt="3" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download4} alt="4" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download5} alt="5" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download7} alt="6" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download} alt="7" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Paypal} alt="Paypal" /></div>
                    </div>
                </div>
            </div>
            <div className="clients-hero">
                <div className="clients-hero-content">
                    <div className="clients-hero-text">
                        <h1>We Offer Financial & Superior Services</h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which.</p>
                    </div>
                    <div className="clients-hero-button">
                        <a href="#" className="cta-button">Call Us Now</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Consulting;
