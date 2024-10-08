import React from 'react'
import './Services.css'
import Favicon from 'react-favicon'

function Services() {
  return (
    <>
      <Favicon url="https://your-website.com/favicon.ico" />
      <section id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section_title text-center">
                <h2>Services</h2>
                <div className="brand_border">
                  <i className="fa fa-minus" aria-hidden="true"></i>
                  <i className="fas fa-handshake"></i>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </div>
                <p>
                  <strong>
                    Prioritize quality in every aspect of development. Test
                    thoroughly to identify and fix bugs, ensure cross-browser
                    compatibility, and optimize performance for a seamless user
                    experience.
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {/* <!--START SINGLE SERVICE AREA--> */}
            <div class="col-md-6 col-lg-4 col-sm-12">
              <div class="single_service hvr-curl-top-right">
                <div class="single_service-left">
                  <div class="icon">
                    <i class="fa fa-laptop"></i>
                  </div>
                </div>
                <div class="single_service-body">
                  <h4 class="single_service-heading">Web Design</h4>
                  <p>
                    Creating visually appealing and user-friendly websites
                    tailored to the client's needs and branding requirements.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/END SINGLE SERVICE AREA-->
        <!--START SINGLE SERVICE AREA--> */}
            <div class="col-md-6 col-lg-4 col-sm-12">
              <div class="single_service hvr-curl-top-right">
                <div class="single_service-left">
                  <div class="icon">
                    <i class="fas fa-quidditch"></i>
                  </div>
                </div>
                <div class="single_service-body">
                  <h4 class="single_service-heading">Logo Design</h4>
                  <p>
                    The designer meets with the client to understand their brand
                    identity, target audience, values, and preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/END SINGLE SERVICE AREA-->
        <!--START SINGLE SERVICE AREA--> */}
            <div class="col-md-6 col-lg-4 col-sm-12">
              <div class="single_service hvr-curl-top-right">
                <div class="single_service-left">
                  <div class="icon">
                    <i class="fas fa-newspaper"></i>
                  </div>
                </div>
                <div class="single_service-body">
                  <h4 class="single_service-heading">Ui & Ux Design</h4>
                  <p>
                    The designer meets with the client to understand their brand
                    identity, target audience, values, and preferences
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/END SINGLE SERVICE AREA-->
        <!--START SINGLE SERVICE AREA--> */}
            <div class="col-md-6 col-lg-4 col-sm-12">
              <div class="single_service hvr-curl-top-right">
                <div class="single_service-left">
                  <div class="icon">
                    <i class="fas fa-smile"></i>
                  </div>
                </div>
                <div class="single_service-body">
                  <h4 class="single_service-heading">App Development:</h4>
                  <p>
                    The designer meets with the client to understand their brand
                    identity, target audience, values, and preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/END SINGLE SERVICE AREA-->
        <!--START SINGLE SERVICE AREA--> */}
            <div class="col-md-6 col-lg-4 col-sm-12">
              <div class="single_service hvr-curl-top-right">
                <div class="single_service-left">
                  <div class="icon">
                    <i class="fa fa-crop"></i>
                  </div>
                </div>
                <div class="single_service-body">
                  <h4 class="single_service-heading">Devlopment</h4>
                  <p>
                    The designer meets with the client to understand their brand
                    identity, target audience, values, and preferences
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/END SINGLE SERVICE AREA-->
        <!--START SINGLE SERVICE AREA--> */}
            <div class="col-md-6 col-lg-4 col-sm-12">
              <div class="single_service hvr-curl-top-right">
                <div class="single_service-left">
                  <div class="icon">
                    <i class="fa fa-cogs"></i>
                  </div>
                </div>
                <div class="single_service-body">
                  <h4 class="single_service-heading">Security System</h4>
                  <p>
                    The designer meets with the client to understand their brand
                    identity, target audience, values, and preferences
                  </p>
                </div>
              </div>
            </div>
            {/* <!--/END SINGLE SERVICE AREA--> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
