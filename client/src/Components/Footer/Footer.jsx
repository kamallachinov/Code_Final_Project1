import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TfiWorld } from "react-icons/tfi";
import { BsTelephoneInbound } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="col">
              <h3 className="footer-title">About Hotel</h3>
              <p className="footer-about-text">
                Welcome to the best five-star deluxe hotel in New York. Hotel
                elementum sesue the aucan vestibulum aliquam justo in sapien
                rutrum volutpat.
              </p>
              <button>
                English <TfiWorld />
              </button>
            </Col>
            <Col className="col">
              <h3 className="footer-title">Explore</h3>
              <ul>
                <li>Home</li>
                <li>Rooms & Suites</li>
                <li>Restaurant</li>
                <li>Spa & Fitness</li>
                <li>About Hotel</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col className="col">
              <h3 className="footer-title">Contact</h3>
              <p className="footer-contact-text">
                1616 Broadway NY, New York 10001 <br />
                United States of America
              </p>
              <div className="footer-contact-info">
                <p className="footer-contact-phone">
                  <BsTelephoneInbound /> 855 100 4444
                </p>
                <p className="footer-contact-mail">info@luxuryhotel.com</p>
              </div>
              <ul className="footer-list">
                <li>
                  <SiInstagram />
                </li>
                <li>
                  <SlSocialTwitter />
                </li>
                <li>
                  <TfiYoutube />
                </li>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaPinterestP />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="copyrightText">
          <span>
            © Copyright 2023 by <p>Kamal Lachinov</p>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
