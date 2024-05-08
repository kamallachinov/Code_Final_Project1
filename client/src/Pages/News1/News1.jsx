import React, { useState, useEffect } from "react";
import "./News1.css";
import Loading from "../../Loading/Loading";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import image1 from "../../Assets/img/8.jpg";
import image2 from "../../Assets/img/carusel2.jpg";
import image3 from "../../Assets/img/carusel3.jpg";
import image4 from "../../Assets/img/carusel4.jpg";
import image5 from "../../Assets/img/carusel5.jpg";
import image6 from "../../Assets/img/carusel6.jpg";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ReservationForm from "../ReservationForm/ReservationForm";
function News1() {
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
          <section className="news1Sec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Hotel Blog</div>
                  <div className="title">Our News</div>
                </div>
              </div>
            </div>
          </section>
          <div className="ourNewsDiv">
            <Container>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={5}
                  columnSpacing={{ xs: 0, sm: 0, md: 5, lg: 0 }}
                >
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Col>
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
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Col>
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
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Col>
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
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Col>
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
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Col>
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
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Col>
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
                    </Col>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default News1;
