import React from "react";
import "./SpaPage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import spaPageImg1 from "../../Assets/img/spaPage1.jpg";
import spaPageImg2 from "../../Assets/img/spaPage2.jpg";
import spaPageImg3 from "../../Assets/img/spaPage3.jpg";
import { AiFillStar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Col from "react-bootstrap/Col";
import Loading from "../../Loading/Loading";
function SpaPage() {
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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
        <section className="spaPageSec">
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
                <img src={spaPageImg1} alt={ "img"} />
            </div>
            <div>
              <img src={spaPageImg2} alt={ "img"} />
            </div>
            <div>
              <img src={spaPageImg3} alt={ "img"} />
            </div>
          </Carousel>

          <Container maxWidth="lg">
            <div className="textContainer">
              <div>
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
                <AiFillStar className="icon" />
              </div>
              <div className="subtitle">So Many Ways to Unwind</div>
              <div className="title">Spa & Wellness</div>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Praesent volutpat nibh ac sodales sodales. Nunc tincidunt erat
                sed nisi faucibus, eget sagittis libero imperdiet. Nunc risus
                magna, imperdiet gravida ultricies in, aliquam a tortor.
                Vestibulum tristique posuere magna, quis elementum neque luctus
                non. Aenean sed arcu efficitur, commodo justo ut, accumsan
                massa. Vivamus ac risus in felis imperdiet mollis id sit amet
                odio. Vestibulum dignissim finibus diam a commodo. Nulla quis
                miss dururana egestas semper. In sit amet nunc sed felis lacinia
                tempus sed quis ipsum.
              </p>
              <div className="reservation">
                <span>
                  <FiPhoneCall className="phoneIcon" />
                </span>
                <div>
                  <span>Reservation</span>
                  <span className="num">855 100 4444</span>
                </div>
              </div>
            </div>
            <Box sx={{ width: "100%" }} className="spaImgContainer">
              <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
                margin={0}
              >
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Fade left delay={600}>
                    <Col className="col">
                      <div className="infoo">
                        <h6>Experiences</h6>
                        <h4>Spa Center</h4>
                        <p>
                          Spa center inilla duiman at elit finibus viverra nec a
                          lacus themo the drudea seneoice misuscipit non sagie
                          the fermen. Viverra tristique jusio the ivite dianne
                          onen nivami acsestion augue artine.
                        </p>
                        <div>
                          <BsClock className="icon" />
                          Lunch: 12.00 noon – 2.00 pm (daily)
                        </div>
                      </div>
                    </Col>
                  </Fade>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Fade right delay={700}>
                    <Col className="col">
                      <div>
                        <img src={spaPageImg1} className="image" alt={ "img"} />
                      </div>
                    </Col>
                  </Fade>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Fade left delay={800}>
                    <Col className="col">
                      <div>
                        <img src={spaPageImg2} className="image" alt={ "img"} />
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
                          Spa center inilla duiman at elit finibus viverra nec a
                          lacus themo the drudea seneoice misuscipit non sagie
                          the fermen. Viverra tristique jusio the ivite dianne
                          onen nivami acsestion augue artine.
                        </p>
                        <div>
                          <BsClock className="icon" />
                          Lunch: 12.00 noon – 2.00 pm (daily)
                        </div>
                      </div>
                    </Col>
                  </Fade>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Fade left delay={1000}>
                    <Col className="col">
                      <div className="infoo">
                        <h6>Experiences</h6>
                        <h4>The Health Club & Pool</h4>
                        <p>
                          Spa center inilla duiman at elit finibus viverra nec a
                          lacus themo the drudea seneoice misuscipit non sagie
                          the fermen. Viverra tristique jusio the ivite dianne
                          onen nivami acsestion augue artine.
                        </p>
                        <div>
                          <BsClock className="icon" />
                          Lunch: 12.00 noon – 2.00 pm (daily)
                        </div>
                      </div>
                    </Col>
                  </Fade>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Fade right delay={1100}>
                    <Col className="col">
                      <div>
                        <img src={spaPageImg3} className="image" alt={ "img"} />
                      </div>
                    </Col>
                  </Fade>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <div className="accordionContainer">
            <div className="container">
              <div className="textContainer">
                <div className="subtitle">F.A.Qs</div>
                <div className="title">Spa Etiquette</div>
              </div>
              <div className="accardion">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Arriving at The Spa
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      Please arrive at The Spa 15 minutes prior to your
                      scheduled treatment and enjoy the calm and serenity of The
                      Spa atmosphere. Arriving late makes it necessary to
                      curtail the time for your treatment.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Mobile Phones
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      Kindly refrain from using your mobile phone in The Spa
                      premises. Please keep your mobile phone on silent mode at
                      all times.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Valuables
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      We provide a secure place for your personal items inside
                      The Spa complex. However, we do not accept liability for
                      loss or damage. We recommend valuable items are stored
                      inside the safe located in your hotel room/suite.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel4bh-content"
                    id="panel3bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Health Matters
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      We provide a secure place for your personal items inside
                      The Spa complex. However, we do not accept liability for
                      loss or damage. We recommend valuable items are stored
                      inside the safe located in your hotel room/suite.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel5bh-content"
                    id="panel4bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Children
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      The minimum age for entry to The Spa, The Health Club and
                      the hydrothermal facilities is 16 years of age. Children
                      under the age of 16 may use the hotel pool if they are
                      accompanied by a parent/adult.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel6bh-content"
                    id="panel4bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Safety
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      The max depth of the pool is 1.60 m. There is no lifeguard
                      at the pool. Children may only use the pool if accompanied
                      by an adult or parent/guardian.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                  className="accardionItem"
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                    aria-controls="panel7bh-content"
                    id="panel4bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontFamily: "Gilda Display",
                        fontSize: "20px",
                        lineHeight: "27px",
                        fontWeight: "400",
                        color: "#AA8453",
                        paddingLeft: "14px",
                        paddingBottom: "14px",
                        paddingTop: "14px",
                      }}
                    >
                      Smoking
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        paddingLeft: "16px",
                        color: "#666",
                        fontSize: "18px",
                      }}
                    >
                      Kindly note that you are not allowed to smoke in The Spa,
                      The Health Club or sauna area.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default SpaPage;
