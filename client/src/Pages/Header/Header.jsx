import React from "react";
import Image1 from "../../Assets/img/1.jpg";
import Image2 from "../../Assets/img/2.jpg";
import Image3 from "../../Assets/img/3.jpg";
import { AiFillStar } from "react-icons/ai";
import Reveal from "react-reveal/Reveal";
import "./Header.css";
import Carousel from "react-bootstrap/Carousel";
function Header() {
  return (
    <>
      <Carousel fade className="carousel" variant="dark" >
        <Carousel.Item>
          <img className="d-block w-100 Img" src={Image1} alt="First slide" />
          <div className="centerDiv">
            <Reveal effect="fadeInUp">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>

              <h4>The Ultimate Luxury Experience</h4>
              <h1>Enjoy The Best Moments of Life</h1>

              <button className="button slide_right">Rooms & Suites</button>
            </Reveal>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 Img" src={Image2} alt="Second slide" />
          <div className="centerDiv">
            <Reveal effect="fadeInUp">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>

              <h4>The Ultimate Luxury Experience</h4>
              <h1>Enjoy The Best Moments of Life</h1>
              
              <button className="button slide_right">Rooms & Suites</button>
            </Reveal>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 Img" src={Image3} alt="Third slide" />
          <div className="centerDiv">
            <Reveal effect="fadeInUp">
              <span>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </span>

              <h4>The Ultimate Luxury Experience</h4>
              <h1>Enjoy The Best Moments of Life</h1>

              <button className="button slide_right">Rooms & Suites</button>
            </Reveal>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;
