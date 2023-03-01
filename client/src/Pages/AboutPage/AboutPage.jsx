import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import image from "../../Assets/img/8.jpg";
import image2 from "../../Assets/img/9.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Reveal from "react-reveal/Reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teamMemberImg1 from "../../Assets/img/teamMember1.jpg";
import teamMemberImg2 from "../../Assets/img/teamMember2.jpg";
import teamMemberImg3 from "../../Assets/img/teamMember3.jpg";
import teamMemberImg4 from "../../Assets/img/teamMember4.jpg";
import teamMemberImg5 from "../../Assets/img/teamMember5.jpg";
import teamMemberImg6 from "../../Assets/img/teamMember6.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
import HotelFacilities from "../HotelFacilities/HotelFacilities";
import ExtraServices from "../ExtraServices/ExtraServices";
import Loading from "../../Loading/Loading";

function AboutPage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
      {loading ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <section className="aboutPageSec">
            <div className="container">
              <div className="row">
                <div className="col col-lg-12">
                  <div className="subtitle">Luxury Hotel</div>
                  <div className="title">About Us</div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="LuxuryExperience">
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
                      Welcome to the best five-star deluxe hotel in New York.
                      Hotel elementum sesue the aucan vestibulum aliquam justo
                      in sapien rutrum volutpat. Donec in quis the pellentesque
                      velit. Donec id velit ac arcu posuere blane.
                    </p>
                    <p>
                      Hotel ut nisl quam nestibulum ac quam nec odio elementum
                      sceisue the aucan ligula. Orci varius natoque penatibus et
                      magnis dis parturient monte nascete ridiculus mus
                      nellentesque habitant morbine.
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
                      <img src={image} className="firstImg" alt="img" />
                      <img src={image2} alt="image" />
                    </div>
                  </Reveal>
                </Col>
              </Row>
            </div>
          </div>
          <ExtraServices />
          <HotelFacilities />
          <section className="TeamMemberSec">
            <Container>
              <div className="textCenter">
                <div className="subtitle">Professionals</div>
                <div className="title">Meet The Team</div>
              </div>
              <Col className="col-lg-12">
                <Carousel
                  className="carusel"
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={responsive2}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  customTransition="all .7"
                  transitionDuration={1800}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  arrows={false}
                >
                  <div className="teamMember">
                    <img src={teamMemberImg1} />
                    <div className="about">
                      <span>Valentina Karla</span>
                      <h5>General Meneger</h5>
                    </div>
                    <div className="socialAccs">
                      <ul>
                        <li>
                          <GrInstagram />
                        </li>
                        <li>
                          <FaFacebook />
                        </li>
                        <li>
                          <SlSocialTwitter />
                        </li>
                        <li>
                          <ImPinterest2 />
                        </li>
                      </ul>
                      <p>valentina@hotel.com</p>
                    </div>
                  </div>
                  <div className="teamMember">
                    <img src={teamMemberImg2} />
                    <div className="about">
                      <span>Micheal White</span>
                      <h5>Guest Service Department</h5>
                    </div>
                    <div className="socialAccs">
                      <ul>
                        <li>
                          <GrInstagram />
                        </li>
                        <li>
                          <FaFacebook />
                        </li>
                        <li>
                          <SlSocialTwitter />
                        </li>
                        <li>
                          <ImPinterest2 />
                        </li>
                      </ul>
                      <p>micheal@hotel.com</p>
                    </div>
                  </div>
                  <div className="teamMember">
                    <img src={teamMemberImg3} />
                    <div className="about">
                      <span>Olivia Martin</span>
                      <h5>Reservations Manager</h5>
                    </div>
                    <div className="socialAccs">
                      <ul>
                        <li>
                          <GrInstagram />
                        </li>
                        <li>
                          <FaFacebook />
                        </li>
                        <li>
                          <SlSocialTwitter />
                        </li>
                        <li>
                          <ImPinterest2 />
                        </li>
                      </ul>
                      <p>olivia@hotel.com</p>
                    </div>
                  </div>
                  <div className="teamMember">
                    <img src={teamMemberImg4} />
                    <div className="about">
                      <span>Mariana Dana</span>
                      <h5>F&B Manager</h5>
                    </div>
                    <div className="socialAccs">
                      <ul>
                        <li>
                          <GrInstagram />
                        </li>
                        <li>
                          <FaFacebook />
                        </li>
                        <li>
                          <SlSocialTwitter />
                        </li>
                        <li>
                          <ImPinterest2 />
                        </li>
                      </ul>
                      <p>mariana@hotel.com</p>
                    </div>
                  </div>
                  <div className="teamMember">
                    <img src={teamMemberImg5} />
                    <div className="about">
                      <span>Enrico Brown</span>
                      <h5>Head Chef</h5>
                    </div>
                    <div className="socialAccs">
                      <ul>
                        <li>
                          <GrInstagram />
                        </li>
                        <li>
                          <FaFacebook />
                        </li>
                        <li>
                          <SlSocialTwitter />
                        </li>
                        <li>
                          <ImPinterest2 />
                        </li>
                      </ul>
                      <p>enrico@hotel.com</p>
                    </div>
                  </div>
                  <div className="teamMember">
                    <img src={teamMemberImg6} />
                    <div className="about">
                      <span>Victoria Dan</span>
                      <h5>Meetings and Events Manager</h5>
                    </div>
                    <div className="socialAccs">
                      <ul>
                        <li>
                          <GrInstagram />
                        </li>
                        <li>
                          <FaFacebook />
                        </li>
                        <li>
                          <SlSocialTwitter />
                        </li>
                        <li>
                          <ImPinterest2 />
                        </li>
                      </ul>
                      <p>victoria@hotel.com</p>
                    </div>
                  </div>
                </Carousel>
              </Col>
            </Container>
          </section>
        </div>
      )}
    </>
  );
}

export default AboutPage;
