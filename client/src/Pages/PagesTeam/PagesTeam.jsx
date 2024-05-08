import React, { useState, useEffect } from "react";
import "./PagesTeam.css";
import teamMemberImg1 from "../../Assets/img/teamMember1.jpg";
import teamMemberImg2 from "../../Assets/img/teamMember2.jpg";
import teamMemberImg3 from "../../Assets/img/teamMember3.jpg";
import teamMemberImg4 from "../../Assets/img/teamMember4.jpg";
import teamMemberImg5 from "../../Assets/img/teamMember5.jpg";
import teamMemberImg6 from "../../Assets/img/teamMember6.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { ImPinterest2 } from "react-icons/im";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Loading from "../../Loading/Loading";

function PagesTeam() {
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
          <section className="PagesTeamSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Professionals</div>
                  <div className="title">Meet The Team</div>
                </div>
              </div>
            </div>
          </section>
          <section className="TeamMemberSec">
            <Container>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={0}
                  columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
                  margin={0}
                  className="grid"
                >
                  <Grid item xs={12} sm={12} md={6} lg={4} className="gridItem">
                    <Col className="col">
                      <div className="teamMember">
                        <img src={teamMemberImg1} alt=""/>
                        <div className="about">
                          <span>Valentina Karla</span>
                          <h5>General Meneger</h5>
                        </div>
                        <div className="socialAccs">
                          <ul>
                            <li>
                              <GrInstagram />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                            <li>
                              <SlSocialTwitter />
                            </li>
                            <li>
                              <ImPinterest2 />
                            </li>
                          </ul>
                          <p>valentina@hotel.com</p>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="gridItem">
                    <Col className="col">
                      <div className="teamMember">
                        <img src={teamMemberImg2} alt=""/>
                        <div className="about">
                          <span>Micheal White</span>
                          <h5>Guest Service Department</h5>
                        </div>
                        <div className="socialAccs">
                          <ul>
                            <li>
                              <GrInstagram />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                            <li>
                              <SlSocialTwitter />
                            </li>
                            <li>
                              <ImPinterest2 />
                            </li>
                          </ul>
                          <p>micheal@hotel.com</p>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="gridItem">
                    <Col className="col">
                      <div className="teamMember">
                        <img src={teamMemberImg3} alt=""/>
                        <div className="about">
                          <span>Olivia Martin</span>
                          <h5>Reservations Manager</h5>
                        </div>
                        <div className="socialAccs">
                          <ul>
                            <li>
                              <GrInstagram />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                            <li>
                              <SlSocialTwitter />
                            </li>
                            <li>
                              <ImPinterest2 />
                            </li>
                          </ul>
                          <p>olivia@hotel.com</p>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="gridItem">
                    <Col className="col">
                      <div className="teamMember">
                        <img src={teamMemberImg4} alt=""/>
                        <div className="about">
                          <span>Mariana Dana</span>
                          <h5>F&B Manager</h5>
                        </div>
                        <div className="socialAccs">
                          <ul>
                            <li>
                              <GrInstagram />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                            <li>
                              <SlSocialTwitter />
                            </li>
                            <li>
                              <ImPinterest2 />
                            </li>
                          </ul>
                          <p>mariana@hotel.com</p>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="gridItem">
                    <Col className="col">
                      <div className="teamMember">
                        <img src={teamMemberImg5} alt=""/>
                        <div className="about">
                          <span>Enrico Brown</span>
                          <h5>Head Chef</h5>
                        </div>
                        <div className="socialAccs">
                          <ul>
                            <li>
                              <GrInstagram />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                            <li>
                              <SlSocialTwitter />
                            </li>
                            <li>
                              <ImPinterest2 />
                            </li>
                          </ul>
                          <p>enrico@hotel.com</p>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={4} className="gridItem">
                    <Col className="col">
                      <div className="teamMember">
                        <img src={teamMemberImg6} alt=""/>
                        <div className="about">
                          <span>Victoria Dan</span>
                          <h5>Meetings and Events Manager</h5>
                        </div>
                        <div className="socialAccs">
                          <ul>
                            <li>
                              <GrInstagram />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                            <li>
                              <SlSocialTwitter />
                            </li>
                            <li>
                              <ImPinterest2 />
                            </li>
                          </ul>
                          <p>victoria@hotel.com</p>
                        </div>
                      </div>
                    </Col>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </section>
        </div>
      )}
    </>
  );
}

export default PagesTeam;
