import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import { BsMoonStars, BsPeople } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./BookingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Loading from "../../Loading/Loading";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const query = () => {
  return new URLSearchParams(new URL(window.location).search);
};

function BookingPage() {
  const [bookingDetails, setbookingDetails] = useState([]);
  const { supId } = useParams();
  const [show, setShow] = useState(false);
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");

  const totalCost = useMemo(() => {
    console.log(query().get("totalCost"));
    return parseFloat(query().get("totalCost"));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:2000/rooms/${supId}`)
      .then((response) => response.json())
      .then((data) => setbookingDetails(data));
  }, []);

  const navigate = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [loadingg, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  let userReserv = JSON.parse(localStorage.getItem("user"));
  const handleClick = (id) => {
    const obj = {
      userId: userReserv._id,
      roomId: id,
    };
    console.log(obj);
    axios.post("http://localhost:2000/order", obj);
    setShow(true);
  };
  const handlePay = () => {
    if (
      number.trim() !== "" &&
      name.trim() !== "" &&
      date.trim() !== "" &&
      cvc.trim() !== "" &&
      focus.trim() !== ""
    ) {
      alert("You reserved this room!");
      handleClose();
    } else {
      alert("Plese fill all inputs then submit!");
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      {loadingg ? (
        <Loading />
      ) : (
        <div>
          <section className="bookinPageSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Book your room right now</div>
                  <div className="title">Booking page</div>
                </div>
              </div>
            </div>
          </section>
          <div className="bookingDiv">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Body className="modalBody">
                <div className="rccs__card rccs__card--unknown">
                  <Cards
                    number={number}
                    name={name}
                    expiry={date}
                    cvc={cvc}
                    focused={focus}
                  />
                </div>
                <br />
                <form className="paymentCard">
                  <div className="row">
                    <div className="col-sm-11">
                      <label htmlFor="name">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={number}
                        name="number"
                        placeholder="Card number..."
                        maxLength="16"
                        onChange={(e) => {
                          SetNumber(e.target.value);
                        }}
                        onFocus={(e) => SetFocus(e.target.name)}
                      ></input>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-11">
                      <label htmlFor="name">Card Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        placeholder="Card name..."
                        name="name"
                        maxLength={35}
                        onChange={(e) => {
                          SetName(e.target.value);
                        }}
                        onFocus={(e) => SetFocus(e.target.name)}
                      ></input>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="name">Expiration Date</label>
                      <input
                        type="text"
                        name="expiry"
                        placeholder="Expiration Date..."
                        className="form-control"
                        value={date}
                        maxLength={4}
                        onChange={(e) => {
                          SetDate(e.target.value);
                        }}
                        onFocus={(e) => SetFocus(e.target.name)}
                      ></input>
                    </div>
                    <div className="col-sm-5">
                      <label htmlFor="name">CVV</label>
                      <input
                        type="tel"
                        name="cvc"
                        className="card"
                        maxLength={3}
                        value={cvc}
                        onChange={(e) => {
                          SetCvc(e.target.value);
                        }}
                        onFocus={(e) => SetFocus(e.target.name)}
                      ></input>
                    </div>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <button className="payBtn" onClick={handlePay}>
                  Pay
                </button>
                <button className="cancelBtn" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
            <Container>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4} lg={4}>
                    <Col>
                      <div className="card">
                        <div className="header">
                          <span>Your Booking Details</span>
                        </div>
                        <div className="details-item">
                          <TiArrowRightOutline />
                          <div className="text-info">
                            <p>CHECK-IN</p>
                            <p>20 February 2023, Monday</p>
                          </div>
                        </div>
                        <div className="details-item">
                          <TiArrowLeftOutline />
                          <div className="text-info">
                            <p>CHECK-OUT</p>
                            <p>20 February 2023, Monday</p>
                          </div>
                        </div>
                        <div className="details-item">
                          <BsMoonStars />
                          <div className="text-info">
                            <p>TOTAL NIGHTS</p>
                            <p>1 NIGHT</p>
                          </div>
                        </div>
                        <div className="details-item">
                          <BsPeople />
                          <div className="text-info">
                            <p>GUESTS</p>
                            <p>1 ADULT, 1 KID</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={4} lg={4}>
                    <Col>
                      <div className="card">
                        <div className="header">Your Price Summary</div>
                        <div className="price-summary">
                          <ul>
                            <li>
                              <span>{bookingDetails.price} $ x 1 night</span>
                              <span>{bookingDetails.price} $</span>
                            </li>
                            <li>
                              <span>First Cleaning service</span>
                              <span>0</span>
                            </li>
                            <li>
                              <span>Early booking discount</span>
                              <span>- $ 52.50</span>
                            </li>
                          </ul>
                        </div>
                        <div className="total-price">
                          <div>
                            <span>Total</span>
                            <span>{totalCost} $</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={4} lg={4}>
                    <Col className="btnCol">
                      <div className="card">
                        <div className="aboutRoommm">
                          <span>
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                          </span>
                          <span>The Cappa Luxury Hotel</span>
                          <p>{bookingDetails.name}</p>
                        </div>
                        <div className="btnContainer">
                          <button
                            onClick={() => handleClick(bookingDetails._id)}
                          >
                            Reserve or Book now!
                          </button>
                          <ToastContainer />
                          <button onClick={() => navigate(-1)}>
                            Back to details
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingPage;
