import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import image1 from "../../Assets/img/caruselImg1.jpg";
import image2 from "../../Assets/img/caruselImg2.jpg";
import image3 from "../../Assets/img/caruselImg3.jpg";
import image4 from "../../Assets/img/caruselImg4.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./ExtraServices.css";
function ExtraServices() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section className="extraServiceSec">
        <Container>
          <Row>
            <Col className="col-lg-4">
              <div className="subtitle">Best Prices</div>
              <div className="title">Extra Services</div>
              <p className="colorP">
                The best prices for your relaxing vacation. The utanislen quam
                nestibulum ac quame odion elementum sceisue the aucan.
              </p>
              <p className="colorP">
                Orci varius natoque penatibus et magnis disney parturient monte
                nascete ridiculus mus nellen etesque habitant morbine.
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
            </Col>
            <Col className="col-lg-6">
              <Carousel
                className="carusel"
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={false}
              >
                <div className="element">
                  <img src={image3} />
                  <div className="desc">
                    <div className="name">Room cleaning</div>
                    <div className="amount">
                      $50 <span>/ month</span>
                    </div>
                    <ul>
                      <li>
                        <AiOutlineCheck /> Hotel ut nisan the duru
                      </li>
                      <li>
                        <AiOutlineCheck /> Orci miss natoque vasa ince
                      </li>
                      <li>
                        <AiOutlineClose />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="element">
                  <img src={image4} />
                  <div className="desc">
                    <div className="name">Drinks Included</div>
                    <div className="amount">
                      $30 <span>/ daily</span>
                    </div>
                    <ul>
                      <li>
                        <AiOutlineCheck /> Hotel ut nisan the duru
                      </li>
                      <li>
                        <AiOutlineCheck /> Orci miss natoque vasa ince
                      </li>
                      <li>
                        <AiOutlineClose />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="element">
                  <img src={image1} />
                  <div className="desc">
                    <div className="name">Room Breakfast</div>
                    <div className="amount">
                      $30 <span>/ daily</span>
                    </div>
                    <ul>
                      <li>
                        <AiOutlineCheck /> Hotel ut nisan the duru
                      </li>
                      <li>
                        <AiOutlineCheck /> Orci miss natoque vasa ince
                      </li>
                      <li>
                        <AiOutlineClose />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="element">
                  <img src={image2} />
                  <div className="desc">
                    <div className="name">Safe & Secure</div>
                    <div className="amount">
                      $15 <span>/ daily</span>
                    </div>
                    <ul>
                      <li>
                        <AiOutlineCheck /> Hotel ut nisan the duru
                      </li>
                      <li>
                        <AiOutlineCheck /> Orci miss natoque vasa ince
                      </li>
                      <li>
                        <AiOutlineClose />
                        Clean sorem ipsum morbin
                      </li>
                    </ul>
                  </div>
                </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ExtraServices;
