import React, { useState } from "react";
import "./FindUs.css";

function FindUs() {
  const [latitude, setLatitude] = useState(33.621265);
  const [longitude, setLongitude] = useState(73.142517);

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center  flex-column section-find"
        id="find"
      >
        <h1>Find Us</h1>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or
          need assistance, feel free to reach out.
        </p>

        <iframe
          title="Google Map"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          width="100%"
          height="500px"
          allowFullScreen="true"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </>
  );
}

export default FindUs;
