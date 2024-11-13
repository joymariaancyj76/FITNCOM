import React from "react";
import "./Footer.css";
import insta_icon from "../../Assets/instagram-icon.png";
import facebook_icon from "../../Assets/facebook-icon.png";
import linkedin_icon from "../../Assets/linkedin-icon.png";
import youtube_icon from "../../Assets/youtube-icon.png";

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <div className="top-section">
        {/* Address and Phone Section */}
        <div className="top-section-items">
          <div className="address-phone-section">
            <div className="address-section">
              <h4>Address</h4>
              <p>
                FitNSportz,
                <br />
                280 Granite Run Drive Suite #200
                <br />
                Lancaster, PA 1760
              </p>
            </div>
            <div className="phone-section">
              <h4>Phone</h4>
              <p>+98 060 712 34</p>
            </div>
          </div>
        </div>

        {/* Newsletter and Mail Section */}
        <div className="top-section-items">
          <div className="newsletter-mail-section">
            <div className="newsletter-section">
              <h4>Newsletter</h4>
              <p>Join our newsletter and stay updated!</p>
              <div className="newsletter-input">
                <input
                  className="input-box"
                  type="email"
                  placeholder="Enter your email"
                />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="mail-section">
              <h4>Mail Us</h4>
              <p>sendmail@mail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="top-section-items">
          <div className="contact-us">
            <h4>Contact Us</h4>
            <div className="contactus_form">
              <form
                action=""
                method="post"
                id="contact-form"
                noValidate="novalidate"
              >
                <div className="formgroup">
                  <label htmlFor="contact_name">Your Name</label>
                  <input
                    className="input-box form_control"
                    type="text"
                    id="contact_name"
                    placeholder="Your Name"
                    required
                    aria-required="true"
                    autoComplete="off"
                  />
                </div>
                <div className="formgroup">
                  <label htmlFor="contact_mail">Your Mail</label>
                  <input
                    type="email"
                    id="contact_mail"
                    className="input-box form_control"
                    placeholder="Your Mail"
                    required
                    aria-required="true"
                    autoComplete="off"
                  />
                </div>
                <div className="formgroup">
                  <label htmlFor="contact_message">Your Message</label>
                  <textarea
                    name="contactmessage"
                    id="contact_message"
                    className="form_control input-box"
                    placeholder="Your Message"
                    required
                    aria-required="true"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn"
                  data-loading-text="Sending..."
                  value={"Send Message"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="followus">
        <h4>Find Us On</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com" className="social-icon">
            <img src={facebook_icon} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/fitnsports-app/"
            className="social-icon"
          >
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/fitnsports.app"
            className="social-icon"
          >
            <img src={insta_icon} alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" className="social-icon">
            <img src={youtube_icon} alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
