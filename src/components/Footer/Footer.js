import React from "react";

import { Link } from "react-router-dom";
import { FaPaperPlane, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.scss";
import { Container } from "react-bootstrap";

const Footerbottom = () => {
  const handleSendMail = () => {
    window.location.href = "mailto:info@digoacademy.com";
  };
  return (
    <>
      {/* <div className="footer">
        <div className="custom-footer row  mt-3">
          <div className="col-sm-4 address">
            <h2>Contact us</h2>
            <ul className="list-unstyled">
              <li>
                <span class="iconify" data-icon="bx:bxs-map">
                  Resort Marg, Bhattidanda, Dhulikhel
                </span>
                Address:Resort Marg, Bhattidanda, Dhulikhel
              </li>
              <li>
                <span class="iconify" data-icon="ic:round-email"></span>
                Email:sojournhimalaya@gmail.com
              </li>
              <li>
                <span
                  class="iconify"
                  data-icon="ant-design:phone-filled"
                ></span>
                Phone:011490872
              </li>
            </ul>
          </div>

          <div className="col-sm-4 address-icon">
            <h2>Get in touch</h2>
            <ul className="d-flex justify-content-evenly">
              <li className="list-unstyled">
                <Link to="#" className="text-decoration-none text-white fs-5">
                  <span
                    className="iconify"
                    data-icon="akar-icons:facebook-fill"
                  ></span>
                </Link>{" "}
              </li>
              <li className="list-unstyled">
                <Link to="#" className="text-decoration-none text-white fs-5">
                  <span
                    className="iconify"
                    data-icon="akar-icons:instagram-fill"
                  ></span>
                </Link>{" "}
              </li>
              <li className="list-unstyled">
                <Link to="#" className="text-decoration-none text-white fs-5">
                  <span
                    className="iconify"
                    data-icon="akar-icons:whatsapp-fill"
                  ></span>
                </Link>{" "}
              </li>
              <li className="list-unstyled">
                <Link to="#" className="text-decoration-none text-white fs-5">
                  <span className="iconify" data-icon="cib:viber"></span>
                </Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-sm-4 address-map">
            <div class="map m-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28281.182415878757!2d85.54441929353702!3d27.61993872621922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb097dbdfc1eb5%3A0xbfb172e72e0b6808!2sSojourn%20Himalaya%20Resort%20Pvt.Ltd!5e0!3m2!1sen!2snp!4v1640256499434!5m2!1sen!2snp"
                allowfullscreen=""
                loading="lazy"
                title="location-map"
              ></iframe>
            </div>
          </div>
          <div className="footer-text text-center">
            <h4> &copy; 2020 ,Mayaz Resort</h4>
          </div>
        </div>
      </div> */}
      <div className="footer text-white">
        <Container className="footer-container">
          <div className="footer-content pt-3 pb-1">
            <div className="row footer-contents">
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="footer-links">
                  <div className="footer-widget-heading">
                    <div class="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28281.182415878757!2d85.54441929353702!3d27.61993872621922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb097dbdfc1eb5%3A0xbfb172e72e0b6808!2sSojourn%20Himalaya%20Resort%20Pvt.Ltd!5e0!3m2!1sen!2snp!4v1640256499434!5m2!1sen!2snp"
                        allowfullscreen=""
                        loading="lazy"
                        title="location-map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 mb-30   ">
                <div className="footer-links">
                  <div className="footer-widget-heading ">
                    <h3 className="">Useful Links</h3>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contactus"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-6 mb-30 ">
                <div className="footer-widget-heading">
                  <h3 className="">Follow us</h3>
                </div>
                <div className="footer-social-icon mt-2">
                  <Link to="#">
                    <FaFacebookSquare className="icon" />
                  </Link>
                  <Link to="#">
                    <BsInstagram className="icon" />
                  </Link>
                  <Link to="#">
                    <AiFillLinkedin className="icon" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 className="">Mail us</h3>
                  </div>
                  <div className="footer-text">
                    <p>
                      Don’t miss on our latest offers,discounts and many more.
                      Drop your mail below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form>
                      <input type="email" placeholder="Email Address" />
                      <button className="icon" onClick={handleSendMail}>
                        <FaPaperPlane />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-text d-flex justify-content-center">
            <p>Copyright &copy; 2022, All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerbottom;
