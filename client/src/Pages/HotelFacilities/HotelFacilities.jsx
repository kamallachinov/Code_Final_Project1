import React from "react";
import { Container, Col } from "reactstrap";
import { GiWorld } from "react-icons/gi";
import { FaSwimmingPool } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { MdDinnerDining } from "react-icons/md";
import { IoCarSportOutline, IoBedOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./HotelFacilities.css";
import Fade from "react-reveal/Fade";
function HotelFacilities() {
  
  return (
    <>
      <section className="HotelFacilitiesSec">
        <Container>
          <div className="textCenter">
            <div className="subtitle">Our Services</div>
            <div className="title">Hotel Facilities</div>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
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
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default HotelFacilities;
