import React, { useState, useEffect } from "react";
import "./RoomsSuits2.css";
import { AiFillStar } from "react-icons/ai";
import image1 from "../../Assets/img/rooms1.jpg";
import image2 from "../../Assets/img/rooms2.jpg";
import image3 from "../../Assets/img/rooms3.jpg";
import image4 from "../../Assets/img/rooms4.jpg";
import image5 from "../../Assets/img/rooms5.jpg";
import image6 from "../../Assets/img/rooms6.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineWifi } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ExtraServices from "../ExtraServices/ExtraServices";
import ReservationForm from "../ReservationForm/ReservationForm";
import Loading from "../../Loading/Loading";
function RoomsSuits2() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
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
          <section className="RoomsSuits2Sec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <span>
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                  </span>
                  <div className="subtitle">The Cappa Luxury Hotel</div>
                  <div className="title">Rooms & Suites</div>
                </div>
              </div>
            </div>
          </section>
          <div className="cardsContainer">
            <Container>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Grid
                  container
                  rowSpacing={3}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={4} className="cardGrid">
                    <div class="flip-card" tabIndex="0">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="roomCard">
                            <img src={image1} />
                            <div className="card-header">
                              <Link to={"/rooms"} className="linkk">
                                Book
                              </Link>
                            </div>
                            <div className="info">
                              <h6>150$ / Night</h6>
                              <h5>Junior Suite</h5>
                            </div>
                          </div>
                        </div>
                        <div class="flip-card-back">
                          <div className="room-info">
                            <h6>150$ / Night</h6>
                            <h4>Junior Suite</h4>
                            <p>
                              Hotel viverra tristique ustoni miss vitae sediam
                              neque nivamus aestan.
                            </p>
                            <Box sx={{ width: "100%" }}>
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                              >
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <HiOutlineUserGroup className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <BiBed className="icon" />{" "}
                                      <span> Twin Bed</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <AiOutlineWifi className="icon" />{" "}
                                      <span> Free Wifi</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <MdOutlineFreeBreakfast className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <div className="detailsText">Details</div>
                              </Grid>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="cardGrid">
                    <div class="flip-card" tabIndex="0">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="roomCard">
                            <img src={image2} />
                            <div className="card-header">
                              <Link to={"/rooms"} className="linkk">
                                Book
                              </Link>
                            </div>
                            <div className="info">
                              <h6>200$ / Night</h6>
                              <h5>Family Room</h5>
                            </div>
                          </div>
                        </div>
                        <div class="flip-card-back">
                          <div className="room-info">
                            <h6>200$ / Night</h6>
                            <h4>Family Room</h4>
                            <p>
                              Hotel viverra tristique ustoni miss vitae sediam
                              neque nivamus aestan.
                            </p>
                            <Box sx={{ width: "100%" }}>
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                              >
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <HiOutlineUserGroup className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <BiBed className="icon" />{" "}
                                      <span> Twin Bed</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <AiOutlineWifi className="icon" />{" "}
                                      <span> Free Wifi</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <MdOutlineFreeBreakfast className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <div className="detailsText">Details</div>
                              </Grid>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="cardGrid">
                    <div class="flip-card" tabIndex="0">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="roomCard">
                            <img src={image3} />
                            <div className="card-header">
                              <Link to={"/rooms"} className="linkk">
                                Book
                              </Link>
                            </div>
                            <div className="info">
                              <h6>250$ / Night</h6>
                              <h5>Double Room</h5>
                            </div>
                            <div className="divider"></div>
                            <div className="intro">
                              <span>
                                <FaBed className="icon" />
                                <FaBath className="icon" />
                                <MdDinnerDining className="icon" />
                                <GiTowel className="icon" />
                              </span>
                              <Link to={"details"} className="linkk">
                                Details <AiOutlineArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="flip-card-back">
                          <div className="room-info">
                            <h6>250$ / Night</h6>
                            <h4>Double Room</h4>
                            <p>
                              Hotel viverra tristique ustoni miss vitae sediam
                              neque nivamus aestan.
                            </p>
                            <Box sx={{ width: "100%" }}>
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                              >
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <HiOutlineUserGroup className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <BiBed className="icon" />{" "}
                                      <span> Twin Bed</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <AiOutlineWifi className="icon" />{" "}
                                      <span> Free Wifi</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <MdOutlineFreeBreakfast className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <div className="detailsText">Details</div>
                              </Grid>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="cardGrid">
                    <div class="flip-card" tabIndex="0">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="roomCard">
                            <img src={image4} />
                            <div className="card-header">
                              <Link to={"/rooms"} className="linkk">
                                Book
                              </Link>
                            </div>
                            <div className="info">
                              <h6>300$ / Night</h6>
                              <h5>Deluxe Room</h5>
                            </div>
                            <div className="divider"></div>
                            <div className="intro">
                              <span>
                                <FaBed className="icon" />
                                <FaBath className="icon" />
                                <MdDinnerDining className="icon" />
                                <GiTowel className="icon" />
                              </span>
                              <Link to={"details"} className="linkk">
                                Details <AiOutlineArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="flip-card-back">
                          <div className="room-info">
                            <h6>300$ / Night</h6>
                            <h4>Deluxe Room</h4>
                            <p>
                              Hotel viverra tristique ustoni miss vitae sediam
                              neque nivamus aestan.
                            </p>
                            <Box sx={{ width: "100%" }}>
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                              >
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <HiOutlineUserGroup className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <BiBed className="icon" />{" "}
                                      <span> Twin Bed</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <AiOutlineWifi className="icon" />{" "}
                                      <span> Free Wifi</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <MdOutlineFreeBreakfast className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <div className="detailsText">Details</div>
                              </Grid>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="cardGrid">
                    <div class="flip-card" tabIndex="0">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="roomCard">
                            <img src={image5} />
                            <div className="card-header">
                              <Link to={"/rooms"} className="linkk">
                                Book
                              </Link>
                            </div>
                            <div className="info">
                              <h6>350$ / Night</h6>
                              <h5>Superior Room</h5>
                            </div>
                            <div className="divider"></div>
                            <div className="intro">
                              <span>
                                <FaBed className="icon" />
                                <FaBath className="icon" />
                                <MdDinnerDining className="icon" />
                                <GiTowel className="icon" />
                              </span>
                              <Link to={"details"} className="linkk">
                                Details <AiOutlineArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="flip-card-back">
                          <div className="room-info">
                            <h6>350$ / Night</h6>
                            <h4>Superior Room</h4>
                            <p>
                              Hotel viverra tristique ustoni miss vitae sediam
                              neque nivamus aestan.
                            </p>
                            <Box sx={{ width: "100%" }}>
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                              >
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <HiOutlineUserGroup className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <BiBed className="icon" />{" "}
                                      <span> Twin Bed</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <AiOutlineWifi className="icon" />{" "}
                                      <span> Free Wifi</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <MdOutlineFreeBreakfast className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <div className="detailsText">Details</div>
                              </Grid>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="cardGrid">
                    <div class="flip-card" tabIndex="0">
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <div className="roomCard">
                            <img src={image6} />
                            <div className="card-header">
                              <Link to={"/rooms"} className="linkk">
                                Book
                              </Link>
                            </div>
                            <div className="info">
                              <h6>400$ / Night</h6>
                              <h5>Welness Room</h5>
                            </div>
                            <div className="divider"></div>
                            <div className="intro">
                              <span>
                                <FaBed className="icon" />
                                <FaBath className="icon" />
                                <MdDinnerDining className="icon" />
                                <GiTowel className="icon" />
                              </span>
                              <Link to={"details"} className="linkk">
                                Details <AiOutlineArrowRight />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="flip-card-back">
                          <div className="room-info">
                            <h6>400$ / Night</h6>
                            <h4>Welness Room</h4>
                            <p>
                              Hotel viverra tristique ustoni miss vitae sediam
                              neque nivamus aestan.
                            </p>
                            <Box sx={{ width: "100%" }}>
                              <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 0 }}
                              >
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <HiOutlineUserGroup className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <BiBed className="icon" />{" "}
                                      <span> Twin Bed</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <AiOutlineWifi className="icon" />{" "}
                                      <span> Free Wifi</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={12}>
                                  <Col>
                                    <div>
                                      <MdOutlineFreeBreakfast className="icon" />{" "}
                                      <span> 1-2 Persons</span>
                                    </div>
                                  </Col>
                                </Grid>
                                <div className="detailsText">Details</div>
                              </Grid>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
          <ExtraServices />
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default RoomsSuits2;
