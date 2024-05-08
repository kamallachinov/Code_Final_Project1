import React, { useState, useEffect } from "react";
import "./PagesPricing.css";

import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import image1 from "../../Assets/img/caruselImg1.jpg";
import image2 from "../../Assets/img/caruselImg2.jpg";
import image3 from "../../Assets/img/caruselImg3.jpg";
import image4 from "../../Assets/img/caruselImg4.jpg";
import ReservationForm from "../ReservationForm/ReservationForm";
import Loading from "../../Loading/Loading";

function PagesPricing() {
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
          <section className="PagesPricingSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Pricing Plan</div>
                  <div className="title">Extra Pricing</div>
                </div>
              </div>
            </div>
          </section>
          <div className="servicesContainer">
            <Container>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid xs={12} sm={12} md={6} lg={4} item={true}>
                    <div className="element">
                      <img src={image3} alt=""/>
                      <div className="desc">
                        <div className="name">Room cleaning</div>
                        <div className="amount">
                          $50 <span>/ month</span>
                        </div>
                        <ul>
                          <li>
                            <AiOutlineCheck /> Hotel ut nisan the duru
                          </li>
                          <li>
                            <AiOutlineCheck /> Orci miss natoque vasa ince
                          </li>
                          <li>
                            <AiOutlineClose />
                            Clean sorem ipsum morbin
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={4} item={true}>
                    <div className="element">
                      <img src={image4} alt=""/>
                      <div className="desc">
                        <div className="name">Drinks Included</div>
                        <div className="amount">
                          $30 <span>/ daily</span>
                        </div>
                        <ul>
                          <li>
                            <AiOutlineCheck /> Hotel ut nisan the duru
                          </li>
                          <li>
                            <AiOutlineCheck /> Orci miss natoque vasa ince
                          </li>
                          <li>
                            <AiOutlineClose />
                            Clean sorem ipsum morbin
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12} md={12} lg={4} item={true}>
                    <div className="element">
                      <img src={image1} alt=""/>
                      <div className="desc">
                        <div className="name">Room Breakfast</div>
                        <div className="amount">
                          $30 <span>/ daily</span>
                        </div>
                        <ul>
                          <li>
                            <AiOutlineCheck /> Hotel ut nisan the duru
                          </li>
                          <li>
                            <AiOutlineCheck /> Orci miss natoque vasa ince
                          </li>
                          <li>
                            <AiOutlineClose />
                            Clean sorem ipsum morbin
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
          <div className="servicesSecondContainer">
            <Container>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid xs={12} sm={12} md={6} lg={4} item={true}>
                    <div className="element">
                      <img src={image2} alt=""/>
                      <div className="desc">
                        <div className="name">Safe & Secure</div>
                        <div className="amount">
                          $15 <span>/ daily</span>
                        </div>
                        <ul>
                          <li>
                            <AiOutlineCheck /> Hotel ut nisan the duru
                          </li>
                          <li>
                            <AiOutlineCheck /> Orci miss natoque vasa ince
                          </li>
                          <li>
                            <AiOutlineClose />
                            Clean sorem ipsum morbin
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={4} item={true}>
                    <div className="element">
                      <img src={image4} alt=""/>
                      <div className="desc">
                        <div className="name">Drinks Included</div>
                        <div className="amount">
                          $30 <span>/ daily</span>
                        </div>
                        <ul>
                          <li>
                            <AiOutlineCheck /> Hotel ut nisan the duru
                          </li>
                          <li>
                            <AiOutlineCheck /> Orci miss natoque vasa ince
                          </li>
                          <li>
                            <AiOutlineClose />
                            Clean sorem ipsum morbin
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12} md={12} lg={4} item={true}>
                    <div className="element">
                      <img src={image1} alt=""/>
                      <div className="desc">
                        <div className="name">Room Breakfast</div>
                        <div className="amount">
                          $30 <span>/ daily</span>
                        </div>
                        <ul>
                          <li>
                            <AiOutlineCheck /> Hotel ut nisan the duru
                          </li>
                          <li>
                            <AiOutlineCheck /> Orci miss natoque vasa ince
                          </li>
                          <li>
                            <AiOutlineClose />
                            Clean sorem ipsum morbin
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default PagesPricing;
