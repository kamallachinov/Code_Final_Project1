import React, { useEffect, useState } from "react";
import "./NewsSinglePost.css";
import { BsCalendarCheck } from "react-icons/bs";
import image from "../../Assets/img/teamMember4.jpg";
import image2 from "../../Assets/img/restaurantcarousel2.jpg";
import image3 from "../../Assets/img/Restaurant.jpg";
import image4 from "../../Assets/img/restaurantcarousel1.jpg";
import image5 from "../../Assets/img/teamMember5.jpg";
import image6 from "../../Assets/img/spaPage1.jpg";
import image7 from "../../Assets/img/retroImg.jpg";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { AiFillStar } from "react-icons/ai";
import { TfiBackLeft } from "react-icons/tfi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Loading from "../../Loading/Loading";
function NewsSinglePost() {
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
          <section className="newsSinglePost">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">
                    <h5>News</h5>/ Post Page
                  </div>
                  <div className="title">Historic Restaurant</div>
                  <div className="textFooter">
                    <div className="acc">
                      <img src={image} alt={"acc"} />
                      <span>Emma Emily</span>
                    </div>
                    <div className="dateDiv">
                      <BsCalendarCheck className="icon" /> 30 Dec 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="SinglePostDivContainer">
            <Container>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
                >
                  <Grid item xs={12} sm={12} lg={8} md={12}>
                    <Col className="firstCol">
                      <img src={image2} alt="img" />
                      <h2>Historic restaurant renovated</h2>
                      <p>
                        Quisque pretium fermentum quam, sit amet cursus ante
                        sollicitudin vel. Morbi consequat risus consequat,
                        porttitor orci sit amet, iaculis nisl. Integer quis
                        sapien neceli ultrices euismod sit amet id lacus. Sed a
                        imperdiet erat. Duis eu est dignissim lacus dictum
                        hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus
                        tincidun. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Integer tristique sem eget leo
                        faucibus porttitor.
                      </p>
                      <p>
                        Nulla vitae metus tincidunt, varius nunc quis, porta
                        nulla. Pellentesque vel dui nec libero auctor pretium id
                        sed arcu. Nunc consequat diam id nisl blani dinisim.
                        Etiam commodo diam dolor, at scelerisque sem finibus sit
                        amet. Curabitur id lectus eget purus finibus laoreet.
                      </p>
                      <div className="miniDiv">
                        <p>
                          Nulla facilisi. Sedeuter nunc vouta miss mollis sapien
                          vel, conseyer tureution yer vintane in libero semper.
                          Quisque ravida eros ut turpis interdum ornare. Inter
                          miss they adama seder a imerdie fames ac ante ipsum
                          primis in faucibus.
                        </p>
                        <div>
                          <span className="line"></span>
                          <p>Micheal Martin</p>
                        </div>
                      </div>
                      <div className="restPics">
                        <Box sx={{ width: "100%" }}>
                          <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                              <Col>
                                <img src={image3} alt={"img"} />
                              </Col>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                              <Col>
                                <img src={image4} alt={"img"} />
                              </Col>
                            </Grid>
                          </Grid>
                        </Box>
                        <p>
                          Design pretium fermentum quam, sit amet cursus ante
                          sollicitudin vel. Morbi consequat risus consequat,
                          porttitor orci sit amet, iaculis nisl. Integer quis
                          sapien neceli ultrices euismod sit amet id lacus. Sed
                          a imperdiet erat. Duis eu est dignissim lacus dictum
                          hendrerit quis vitae mi. Fusce eu nulla ac nisi cursus
                          tincidun. Interdum et malesuada fames ac ante ipsum
                          primis in faucibus. Integer tristique sem eget leo
                          faucibus porttitor.
                        </p>
                      </div>
                      <div className="commentPart">
                        <div>
                          <img src={image5} alt={"img"} />
                        </div>
                        <div className="textContainer">
                          <span>
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                            <AiFillStar className="icon" />
                          </span>
                          <h3>
                            Robert Martin <span> 29 October 2022</span>
                          </h3>
                          <p>
                            Restaurant ultricies nibh non dolor maximus sceleue
                            inte molliser rana neque nec tempor. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                          </p>
                          <p className="replyP">
                            Reply <TfiBackLeft />
                          </p>
                        </div>
                      </div>
                      <div className="FormPart">
                        <h3>Leave a Reply</h3>
                        <form>
                          <div>
                            <input placeholder="Full Name *" />
                            <input placeholder="Email Address *" />
                          </div>
                          <textarea placeholder="Your Comment *" />
                          <button>SEND COMMENT</button>
                        </form>
                      </div>
                    </Col>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={4} md={12}>
                    <Col className="secCol">
                      <div className="wrap">
                        <div className="search">
                          <input
                            type="text"
                            className="searchTerm"
                            id="input_text"
                            placeholder="Type here..."
                          ></input>
                          <div className="iconDiv">
                            <BiSearchAlt2 className="search-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="recentPost">
                        <h6>Recent Posts</h6>
                        <span className="line"></span>
                        <ul>
                          <li>
                            <div>
                              <img src={image2} alt={"img"} />
                              <p>Historic restaurant renovated</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <img src={image6} alt={"img"} />
                              <p>Benefits of Spa Treatments</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <img src={image7} alt={"img"} />
                              <p>Retro Lighting Design in The Hotels</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="archives">
                        <h6>Archives</h6>
                        <span className="line"></span>
                        <ul>
                          <li>
                            <span>December 2022</span>
                          </li>
                          <li>
                            <span>November 2022</span>
                          </li>
                          <li>
                            <span>October 2022</span>
                          </li>
                        </ul>
                      </div>
                      <div className="categories">
                        <h6>Categories</h6>
                        <span className="line"></span>
                        <ul>
                          <li>
                            <BsArrowRight className="icon" />{" "}
                            <span>Restaurant</span>
                          </li>
                          <li>
                            <BsArrowRight className="icon" />{" "}
                            <span>Hotel Design</span>
                          </li>
                          <li>
                            <BsArrowRight className="icon" />{" "}
                            <span>Spa Center</span>
                          </li>
                        </ul>
                      </div>
                      <div className="tags">
                        <h6>Tags</h6>
                        <span className="line"></span>
                        <div>
                          <button>Restaurant</button>
                          <button>Hotel</button>
                          <button>Spa</button>
                          <button>Health Club</button>
                          <button>Luxury Hotel</button>
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

export default NewsSinglePost;
