import React, { useState, useEffect } from "react";
import "./Restaurant.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import restaurantImg1 from "../../Assets/img/restaurantcarousel3.jpg";
import restaurantImg2 from "../../Assets/img/restaurantcarousel2.jpg";
import restaurantImg3 from "../../Assets/img/restaurantcarousel1.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import Loading from "../../Loading/Loading";
function Restaurant() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="restaurantSec">
          <Carousel
            showArrows={true}
            showThumbs={false}
            swipeable={true}
            infiniteLoop
            autoPlay
            showStatus={false}
            className="carousel"
          >
            <div>
              <img src={restaurantImg2} alt=""/>
            </div>
            <div>
              <img src={restaurantImg1} alt=""/>
            </div>
            <div>
              <img src={restaurantImg3} alt=""/>
            </div>
          </Carousel>
          <div>
            <div className="container">
              <div className="textContainer">
                <div className="iconContainer">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>
                <div className="subtitle">An Experience for the Senses</div>
                <div className="title">The Restaurant</div>
                <p>
                  Led by Chef de Micheal Martin, The Restaurant is celebrated
                  for its excellent cuisine and unique ambience. The gorgeous
                  dining room features three open studio kitchens, allowing you
                  to enjoy the sights and sounds of the culinary artistry on
                  display. The menu showcases both Asian and European
                  influences, with a tempting selection of classic favorites and
                  creative dishes for you to sample. Cheese connoisseurs will be
                  drawn to the The Wine and Cheese Cellar, housed in
                  five-meter-high glass walls, where our knowledgeable staff can
                  introduce you to some of New York's greatest culinary
                  treasures.
                </p>
                <h6>Hours</h6>
                <ul>
                  <li>
                    <BsClock className="icon" />
                    <p>Breakfast: 7.00 am – 11.00 am (daily)</p>
                  </li>
                  <li>
                    <BsClock className="icon" />
                    <p>Lunch: 12.00 noon – 2.00 pm (daily)</p>
                  </li>
                  <li>
                    <BsClock className="icon" />
                    <p>
                      Dinner: open from 6.30 pm, last order at 10.00 pm (daily)
                    </p>
                  </li>
                </ul>
                <h6>Dress Code</h6>
                <p>Smart casual (no shorts, hats, or sandals permitted)</p>
                <h6>Terrace</h6>
                <p>Open for drinks only</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Restaurant;
