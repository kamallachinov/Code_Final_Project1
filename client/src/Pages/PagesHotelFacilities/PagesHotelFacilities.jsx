import React, { useEffect, useState } from "react";
import "./PagesHotelFacilities.css";
import ReservationForm from "../ReservationForm/ReservationForm";
import Fade from "react-reveal/Fade";
import { Container, Col } from "reactstrap";
import { GiWorld } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { MdDinnerDining } from "react-icons/md";
import { IoCarSportOutline, IoBedOutline } from "react-icons/io5";
import "../HotelFacilities/HotelFacilities.css";
import Loading from "../../Loading/Loading";

function PagesHotelFacilities() {
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
        <div>
          {" "}
          <section className="PagesHotelFacilitiesSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Other Services</div>
                  <div className="title">Hotel Facilities</div>
                </div>
              </div>
            </div>
          </section>
          <section className="HotelFacilitiesSec">
            <Container>
              <div className="roww">
                <Col>
                  <Fade bottom delay={400}>
                    <div className="card">
                      <GiWorld className="iconn" />
                      <h5>Pick Up & Drop</h5>
                      <p>
                        We’ll pick up from airport while you comfy on your ride,
                        mus nellentesque habitant.
                      </p>
                    </div>
                  </Fade>
                </Col>
                <Col>
                  <Fade bottom delay={500}>
                    <div className="card">
                      <IoCarSportOutline className="iconn" />
                      <h5>Parking Space</h5>
                      <p>
                        Fusce tincidunt nis ace park norttito sit amet space,
                        mus nellentesque habitant.
                      </p>
                    </div>
                  </Fade>
                </Col>

                <Col>
                  <Fade bottom delay={600}>
                    <div className="card">
                      <IoBedOutline className="iconn" />
                      <h5>Room Service</h5>
                      <p>
                        Room tincidunt nis ace park norttito sit amet space, mus
                        nellentesque habitant.
                      </p>
                    </div>
                  </Fade>
                </Col>

                <Col>
                  <Fade bottom delay={800}>
                    <div className="card">
                      <FaSwimmingPool className="iconn" />
                      <h5>Swimming Pool</h5>
                      <p>
                        Swimming pool tincidunt nise ace park norttito sit
                        space, mus nellentesque habitant.
                      </p>
                    </div>
                  </Fade>
                </Col>
                <Col>
                  <Fade bottom delay={900}>
                    <div className="card">
                      <AiOutlineWifi className="iconn" />
                      <h5>Fibre Internet</h5>
                      <p>
                        Wifi tincidunt nis ace park norttito sit amet space, mus
                        nellentesque habitant.
                      </p>
                    </div>
                  </Fade>
                </Col>

                <Col>
                  <Fade bottom delay={1000}>
                    <div className="card">
                      <MdDinnerDining className="iconn" />
                      <h5>Breakfast</h5>
                      <p>
                        Eat tincidunt nisa ace park norttito sit amet space, mus
                        nellentesque habitant
                      </p>
                    </div>
                  </Fade>
                </Col>
              </div>
            </Container>
          </section>
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default PagesHotelFacilities;
