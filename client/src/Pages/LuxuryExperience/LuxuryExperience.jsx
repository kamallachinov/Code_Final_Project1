import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import image from "../../Assets/img/8.jpg";
import image2 from "../../Assets/img/9.jpg";
import Reveal from "react-reveal/Reveal";
import "./LuxuryExperience.css";
function LuxuryExperience() {
  return (
    <>
      <Container>
        <Row className="row">
          <Col className="col" lg={6} md={7} sm={12}>
            <Reveal effect="fadeInUp">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>
              <div className="subtitle">The Cappa Luxury Hotel</div>
              <div className="title">Enjoy a Luxury Experience</div>
              <p>
                Welcome to the best five-star deluxe hotel in New York. Hotel
                elementum sesue the aucan vestibulum aliquam justo in sapien
                rutrum volutpat. Donec in quis the pellentesque velit. Donec id
                velit ac arcu posuere blane.
              </p>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
                the aucan ligula. Orci varius natoque penatibus et magnis dis
                parturient monte nascete ridiculus mus nellentesque habitant
                morbine.
              </p>
              <div className="reservation">
                <span>
                  <FiPhoneCall className="phoneIcon" />
                </span>
                <div>
                  <span>Reservation</span>
                  <span className="num">855 100 4444</span>
                </div>
              </div>
            </Reveal>
          </Col>
          <Col className="col" lg={5} md={4} sm={12}>
            <Reveal effect="fadeInUp">
              <div className="imgContainer">
                <img src={image} className="firstImg" alt="" />
                <img src={image2} alt="" />
              </div>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LuxuryExperience;
