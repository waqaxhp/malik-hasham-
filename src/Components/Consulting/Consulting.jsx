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
import Acv from "../Assets/Acv.jpg";
import Chew from "../Assets/chew.jpg";
import Disney from "../Assets/Disney.jpg";
import Kfc from "../Assets/kfc.jpg";
import Mannys from "../Assets/mannys.png";
import Peak from "../Assets/peak.jpg";
import Right from "../Assets/right.jpg";
import Thumb from "../Assets/thumb.jpeg";
import Toa from "../Assets/toa.png";
import Truevalue from "../Assets/true-value.jpg";

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
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Acv} alt="Acv" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Chew} alt="Chew" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Disney} alt="2" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Kfc} alt="3" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Mannys} alt="4" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Peak} alt="5" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Right} alt="6" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Thumb} alt="7" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Toa} alt="Paypal" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Truevalue} alt="Acv" /></div>
                        {/* Repeat for infinite scrolling */}
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download1} alt="1" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download2} alt="2" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download3} alt="3" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download4} alt="4" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download5} alt="5" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download7} alt="6" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Download} alt="7" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Paypal} alt="Paypal" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Acv} alt="Acv" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Chew} alt="Chew" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Disney} alt="2" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Kfc} alt="3" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Mannys} alt="4" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Peak} alt="5" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Right} alt="6" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Thumb} alt="7" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Toa} alt="Paypal" /></div>
                        <div className="clients-slide"><img loading="lazy" decoding="async" src={Truevalue} alt="Acv" /></div>
                    </div>
                </div>
            </div>
            <div className="clients-hero">
                <div className="clients-hero-content">
                    <div className="clients-hero-text">
                        <h1>Boost your effectiveness</h1>
                        <p>We help businesses prosper throughout the marketing funnel to surge revenue, improve brand visibility and loyalty, and grow their customer base.</p>
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
