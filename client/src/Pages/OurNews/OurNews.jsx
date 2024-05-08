import React from "react";
import "./OurNews.css";
import Container from "react-bootstrap/Container";
import image1 from "../../Assets/img/8.jpg";
import image2 from "../../Assets/img/carusel2.jpg";
import image3 from "../../Assets/img/carusel3.jpg";
import image4 from "../../Assets/img/carusel4.jpg";
import image5 from "../../Assets/img/carusel5.jpg";
import image6 from "../../Assets/img/carusel6.jpg";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OurNews() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section className="OurNewsSec">
        <Container>
          <div className="textCenter">
            <div className="subtitle">Hotel Blog</div>
            <div className="title">Our News</div>
          </div>
          <Col className="col-lg-12">
            <Carousel
              className="carusel"
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .7"
              transitionDuration={1300}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              arrows={true}
            >
              <div className="item">
                <img src={image1} alt=""/>
                <div className="date">
                  <span>Dec</span>
                  <i>02</i>
                </div>
                <div className="about">
                  <span>Restaurant</span>
                  <h5>Historic restaurant renovated</h5>
                </div>
              </div>
              <div className="item">
                <img src={image2} alt=""/>
                <div className="date">
                  <span>Dec</span>
                  <i>04</i>
                </div>
                <div className="about">
                  <span>Spa</span>
                  <h5>Benefits of Spa Treatments</h5>
                </div>
              </div>
              <div className="item">
                <img src={image3} alt=""/>
                <div className="date">
                  <span>Dec</span>
                  <i>06</i>
                </div>
                <div className="about">
                  <span>Bathrooms</span>
                  <h5>Hotel Bathroom Collections</h5>
                </div>
              </div>
              <div className="item">
                <img src={image4} alt=""/>
                <div className="date">
                  <span>Dec</span>
                  <i>08</i>
                </div>
                <div className="about">
                  <span>Health</span>
                  <h5>Weight Loss with Fitness Health Club</h5>
                </div>
              </div>
              <div className="item">
                <img src={image5} alt=""/>
                <div className="date">
                  <span>Dec</span>
                  <i>10</i>
                </div>
                <div className="about">
                  <span>Design</span>
                  <h5>Retro Lighting Design in The Hotels</h5>
                </div>
              </div>
              <div className="item">
                <img src={image6} alt=""/>
                <div className="date">
                  <span>Dec</span>
                  <i>12</i>
                </div>
                <div className="about">
                  <span>Health</span>
                  <h5>Benefits of Swimming for Your Health</h5>
                </div>
              </div>
            </Carousel>
          </Col>
        </Container>
      </section>
    </>
  );
}

export default OurNews;
