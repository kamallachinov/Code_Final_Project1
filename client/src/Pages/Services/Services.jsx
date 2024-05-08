import React from "react";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import image from "../../Assets/img/Restaurant.jpg";
import image2 from "../../Assets/img/Restaurant2.jpg";
import image3 from "../../Assets/img/Restaurant3.jpg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fade from "react-reveal/Fade";
import "./Services.css";
function Services() {
  
  return (
    <>
      <section className="ServicesSec">
        <Container maxWidth="lg">
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={0}
              columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
              margin={0}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade left delay={400}>
                  <Col className="col">
                    <div>
                      <img src={image} className="image" alt=""/>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade right delay={500}>
                  <Col className="col">
                    <div className="infoo">
                      <h6>Discover</h6>
                      <h4>The Restaurant</h4>
                      <p>
                        Restaurant inilla duiman at elit finibus viverra nec a
                        lacus themo the nesudea seneoice misuscipit non sagie
                        the fermen ziverra tristiue duru the ivite dianne onen
                        nivami acsestion augue artine.
                      </p>
                      <button className="buttonn slide_rightt">
                        Learn More
                      </button>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade left delay={600}>
                  <Col className="col">
                    <div className="infoo">
                      <h6>Experiences</h6>
                      <h4>Spa Center</h4>
                      <p>
                        Spa center inilla duiman at elit finibus viverra nec a
                        lacus themo the nesudea seneoice misuscipit non sagie
                        the fermen ziverra tristiue duru the ivite dianne onen
                        nivami acsestion augue artine.
                      </p>
                      <button className="buttonn slide_rightt">
                        Learn More
                      </button>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade right delay={700}>
                  <Col className="col">
                    <div>
                      <img src={image2} className="image" alt=""/>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade left delay={800}>
                  <Col className="col">
                    <div>
                      <img src={image3} className="image" alt=""/>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade right delay={900}>
                  <Col className="col">
                    <div className="infoo">
                      <h6>Modern</h6>
                      <h4>Fitness Center</h4>
                      <p>
                        Restaurant inilla duiman at elit finibus viverra nec a
                        lacus themo the nesudea seneoice misuscipit non sagie
                        the fermen ziverra tristiue duru the ivite dianne onen
                        nivami acsestion augue artine.
                      </p>
                      <button className="buttonn slide_rightt">
                        Learn More
                      </button>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade left delay={950}>
                  <Col className="col">
                    <div className="infoo">
                      <h6>Experiences</h6>
                      <h4>The Health Club & Pool</h4>
                      <p>
                        The health club & pool at elit finibus viverra nec a
                        lacus themo the nesudea seneoice misuscipit non sagie
                        the fermen ziverra tristiue duru the ivite dianne onen
                        nivami acsestion augue artine.
                      </p>
                      <button className="buttonn slide_rightt">
                        Learn More
                      </button>
                    </div>
                  </Col>
                </Fade>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Fade right delay={1000}>
                  <Col className="col">
                    <div>
                      <img src={image3} className="image" alt=""/>
                    </div>
                  </Col>
                </Fade>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}

export default Services;
