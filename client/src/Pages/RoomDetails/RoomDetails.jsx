import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./RoomDetails.css";
import image from "../../Assets/img/1.jpg";
import image2 from "../../Assets/img/3.jpg";
import image3 from "../../Assets/img/5.jpg";
import { AiFillStar } from "react-icons/ai";
import {
  AiOutlineCheck,
  AiOutlineWifi,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { MdDinnerDining } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { GiClockwork, GiEvilTower } from "react-icons/gi";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Loading from "../../Loading/Loading";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

function RoomDetails() {
  const [details, setDetails] = useState([]);
  const { supId } = useParams(); 
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [numberOfDogs, setNumberOfDogs] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:2000/rooms/${supId}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, [supId]);


  const navigate = useNavigate();

  const adultCost = 50;
  const childCost = 30;
  const dogCost = 15;
  const roomCost = details.price;

  const withoutSale =
    numberOfAdults * adultCost +
    numberOfChildren * childCost +
    1 * roomCost +
    numberOfDogs * dogCost +
    30;
  const totalCost =
    numberOfAdults * adultCost +
    numberOfChildren * childCost +
    1 * roomCost +
    numberOfDogs * dogCost;

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);



  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      setShow(true);
    }
  };

  const incrementAdults = () => {
    setNumberOfAdults(numberOfAdults + 1);
  };
  const decreamentAdults = () => {
    setNumberOfAdults(numberOfAdults - 1);
  };
  const incrementKids = () => {
    setNumberOfChildren(numberOfChildren + 1);
  };
  const decreamentKids = () => {
    setNumberOfChildren(numberOfChildren - 1);
  };
  const incrementDogs = () => {
    setNumberOfDogs(numberOfDogs + 1);
  };
  const decreamentDogs = () => {
    setNumberOfDogs(numberOfDogs - 1);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <section className="RoomDetailsSec">
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
                <img src={image} alt={"img"} />
              </div>
              <div>
                <img src={image2} alt={"img"} />
              </div>
              <div>
                <img src={image3} alt={"img"} />
              </div>
            </Carousel>
          </section>

          <div className="aboutRoom">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header>
                <Modal.Title className="modalTitle">
                  Add number of guests
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="modalBody" style={{ gap: "30px" }}>
                <div className="modalRow">
                  <h5>Adults</h5>
                  <div className="iconContainer">
                    <button
                      disabled={numberOfAdults === 0}
                      onClick={() => decreamentAdults()}
                    >
                      <AiOutlineMinus className="icon" />
                    </button>
                    <h5>{numberOfAdults}</h5>
                    <button
                      onClick={() => incrementAdults()}
                      disabled={numberOfAdults === 2}
                    >
                      <AiOutlinePlus className="icon" />
                    </button>
                  </div>
                </div>
                <div className="modalRow">
                  <div className="ages">
                    <h5>Kids</h5>
                    <span>Ages 3-12</span>
                  </div>
                  <div className="iconContainer">
                    <button
                      disabled={numberOfChildren === 0}
                      onClick={() => decreamentKids()}
                    >
                      <AiOutlineMinus className="icon" />
                    </button>
                    <h5>{numberOfChildren}</h5>
                    <button
                      onClick={() => incrementKids()}
                      disabled={numberOfChildren === 2}
                    >
                      <AiOutlinePlus className="icon" />
                    </button>
                  </div>
                </div>
                <div className="modalRow">
                  <div className="dogs">
                    <h5>Dogs</h5>
                    <BsQuestionCircleFill />
                  </div>
                  <div className="iconContainer">
                    <button
                      disabled={numberOfDogs === 0}
                      onClick={() => decreamentDogs()}
                    >
                      <AiOutlineMinus className="icon" />
                    </button>
                    <h5>{numberOfDogs}</h5>
                    <button
                      onClick={() => incrementDogs()}
                      disabled={numberOfDogs === 2}
                    >
                      <AiOutlinePlus className="icon" />
                    </button>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="cancelBtn" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
            <Container>
              <div className="textCenter">
                <span>
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </span>
                <div className="subtitle">The Cappa Luxury Hotel</div>
                <div className="title">{details.name}</div>
                {/* <h5>Available: {data[4].count}</h5> */}
              </div>

              <div>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} lg={8} sm={12} md={8}>
                      <Col>
                        <p className="firstP">
                          Hotel non lorem ac erat suscipit bibendum nulla
                          facilisi. Sedeuter nunc volutpat miss sapien vel
                          conseyen turpeutionyer masin libero sevenion vusetion
                          viventa augue sit amet hendrerit vestibulum.
                          Duisteyerion venenatis lacus gravida eros ut turpis
                          interdum ornare.
                        </p>
                        <p className="firstP">
                          Hotel non lorem ac erat suscipit bibendum nulla
                          facilisi. Sedeuter nunc volutpat miss sapien vel
                          conseyen turpeutionyer masin libero sevenion vusetion
                          viventa augue sit amet hendrerit vestibulum.
                          Duisteyerion venenatis lacus gravida eros ut turpis
                          interdum ornare.
                        </p>
                      </Col>
                      <Box sx={{ width: "100%" }}>
                        <Grid
                          container
                          rowSpacing={1}
                          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          <Grid item xs={12} lg={6} sm={12} md={6}>
                            <Col>
                              <h6>Check-in</h6>
                              <ul>
                                <li>
                                  <AiOutlineCheck className="icon" />
                                  <p>Check-in from 9:00 AM - anytime</p>
                                </li>
                                <li>
                                  <AiOutlineCheck className="icon" />
                                  <p>Early check-in subject to availability</p>
                                </li>
                              </ul>
                            </Col>
                          </Grid>
                          <Grid item xs={12} lg={6} sm={12} md={6}>
                            <Col>
                              <h6>Check-out</h6>
                              <ul>
                                <li>
                                  <AiOutlineCheck className="icon" />
                                  <p>Check-out before noon</p>
                                </li>
                                <li>
                                  <AiOutlineCheck className="icon" />
                                  <p>Express check-out</p>
                                </li>
                              </ul>
                            </Col>
                          </Grid>
                        </Grid>
                      </Box>
                      <h6>Special check-in instructions</h6>
                      <p>
                        Guests will receive an email 5 days before arrival with
                        check-in instructions; front desk staff will greet
                        guests on arrival For more details, please contact the
                        property using the information on the booking
                        confirmation.
                      </p>
                      <h6>Pets</h6>
                      <p>Pets not allowed</p>
                      <h6>Children and extra beds</h6>
                      <p>
                        Children are welcome Kids stay free! Children stay free
                        when using existing bedding; children may not be
                        eligible for complimentary breakfast Rollaway/extra beds
                        are available for $ 10 per day.
                      </p>
                      <button
                        className="buttonn slide_rightt"
                        onClick={handleShow}
                      >
                        Check now
                      </button>
                    </Grid>
                    <Grid item xs={12} lg={4} sm={12} md={4}>
                      <Col className="sidebar">
                        <h6>Amenities</h6>
                        <ul>
                          <li>
                            <BsPersonSquare className="icon" />
                            <p>1-2 Persons</p>
                          </li>
                          <li>
                            <AiOutlineWifi className="icon" />
                            <p>Free Wifi</p>
                          </li>
                          <li>
                            <GiClockwork className="icon" />
                            <p>200 sqft room</p>
                          </li>
                          <li>
                            <MdDinnerDining className="icon" />
                            <p>Breakfast</p>
                          </li>
                          <li>
                            <GiEvilTower className="icon" />
                            <p>Free Wifi</p>
                          </li>
                          <li>
                            <FaSwimmingPool className="icon" />
                            <p>Swimming Pool</p>
                          </li>
                        </ul>
                      </Col>
                      <Col className="sidebar2">
                        <h5>Your Reservation</h5>
                        <Dropdown className="d-inline m-0" autoClose="outside">
                          <Dropdown.Toggle
                            id="dropdown-autoclose-outside"
                            style={{ marginTop: "0", marginBottom: "0.5rem" }}
                          >
                            Guests
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="#">
                              <div className="modalRowDropdown">
                                <h5>Adults</h5>
                                <div className="iconContainer">
                                  <button
                                    disabled={numberOfAdults === 0}
                                    onClick={() => decreamentAdults()}
                                  >
                                    <AiOutlineMinus className="icon" />
                                  </button>
                                  <h5>{numberOfAdults}</h5>
                                  <button
                                    onClick={() => incrementAdults()}
                                    disabled={numberOfAdults === 2}
                                  >
                                    <AiOutlinePlus className="icon" />
                                  </button>
                                </div>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                              <div className="modalRowDropdown">
                                <h5>Kids</h5>
                                <div className="iconContainer">
                                  <button
                                    disabled={numberOfChildren === 0}
                                    onClick={() => decreamentKids()}
                                  >
                                    <AiOutlineMinus className="icon" />
                                  </button>
                                  <h5>{numberOfChildren}</h5>
                                  <button
                                    onClick={() => incrementKids()}
                                    disabled={numberOfChildren === 2}
                                  >
                                    <AiOutlinePlus className="icon" />
                                  </button>
                                </div>
                              </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                              <div className="modalRowDropdown">
                                <h5>Dogs</h5>
                                <div className="iconContainer">
                                  <button
                                    disabled={numberOfDogs === 0}
                                    onClick={() => decreamentDogs()}
                                  >
                                    <AiOutlineMinus className="icon" />
                                  </button>
                                  <h5>{numberOfDogs}</h5>
                                  <button
                                    onClick={() => incrementDogs()}
                                    disabled={numberOfDogs === 2}
                                  >
                                    <AiOutlinePlus className="icon" />
                                  </button>
                                </div>
                              </div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <h6 style={{ margin: "0" }}>Summary</h6>
                        <ul className="sidebarList">
                          <li className="sidebarlistItem">
                            <span>1 night</span>
                            <span>{details.price}$</span>
                          </li>
                          <li className="sidebarlistItem">
                            <span>Cleaning service</span>
                            <span>0$</span>
                          </li>
                          <li className="sidebarlistItem">
                            <span>Early booking discount</span>
                            <span>- 30$</span>
                          </li>
                        </ul>
                        <hr />
                        <div className="priceDiv">
                          <h4>Total</h4>
                          <h4>
                            <span className="priceWithoutSale">
                              ${withoutSale}
                            </span>
                            ${totalCost}
                          </h4>
                        </div>
                        <button
                          onClick={() =>
                            navigate(
                              `/roomDetails/booking/${supId}?totalCost=${totalCost}`
                            )
                          }
                        >
                          BOOK NOW
                        </button>
                      </Col>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default RoomDetails;
