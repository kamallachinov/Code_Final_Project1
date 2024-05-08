import React, { useState, useEffect } from "react";
import "./searchResult.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Col from "react-bootstrap/Col";
import Loading from "../../Loading/Loading";
import Box from "@mui/material/Box";
import Reveal from "react-reveal/Reveal";
import axios from "axios";

import { useNavigate, useSearchParams } from "react-router-dom";

function SearchResult() {
  const [searchParams, ] = useSearchParams();

  const [min, setMin] = useState(searchParams.get("min"));
  const [max, setMax] = useState(searchParams.get("max"));
  const [filtered, setFiltered] = useState([]);

  const [prods, setProds] = useState([]);
  const [loadingg, setLoading] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setFiltered(prods.filter((x) => x.price > min && x.price < max));
  }, [min, max, prods]);

  useEffect(() => {
    axios.get("http://localhost:2000/rooms").then((res) => {
      setProds(res.data);
    });

    function handleScroll() {
      if (window.scrollY > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fixedClass = isFixed ? "fixed" : "searchColContainer";
  return (
    <>
      {loadingg ? (
        <Loading />
      ) : (
        <div>
          <section className="searchResultSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Discover</div>
                  <div className="title">Search Results</div>
                </div>
              </div>
            </div>
          </section>
          <div className="resultContainer">
            <Box sx={{ width: "100%" }}>
              <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Col>
                    <div className={`fixed-div ${fixedClass}`}>
                      <h5>Search</h5>
                      <p style={{ margin: "0" }}>Options</p>
                      <ul>
                        <li>
                          Min price per night{" "}
                          <input
                            type={"number"}
                            value={min}
                            onChange={(e) => setMin(e.target.value)}
                          />
                        </li>
                        <li>
                          Max price per night{" "}
                          <input
                            type={"number"}
                            value={max}
                            onChange={(e) => setMax(e.target.value)}
                          />
                        </li>
                      </ul>
                      <button>Search</button>
                    </div>
                  </Col>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  {filtered.map((prod) => (
                    <Reveal effect="fadeInUp">
                      <Col
                        key={prod._id}
                        style={{
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                        }}
                      >
                        <Box sx={{ flexGrow: 1 }}>
                          <Item style={{ marginBottom: "1rem" }}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={12} md={12} lg={4}>
                                <Col>
                                  <div className="colDiv">
                                    <img src={prod.imgUrl} alt="" />
                                  </div>
                                </Col>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div className="colDiv">
                                  <h5>{prod.name}</h5>
                                  <p>Free Wifi,Swimming Pool,Towels</p>
                                  <h6>
                                    Studio Apartment with Air conditioning
                                  </h6>
                                  <span>
                                    You can cancel later, so lock in this great
                                    price today!
                                  </span>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={4}>
                                <div className="colDiv2">
                                  <h4>Excellent</h4>
                                  <h3>{prod.price}$</h3>
                                  <p>Includes taxes and fees</p>
                                  <button
                                    onClick={() =>
                                      navigate(`/roomDetails/${prod._id}`)
                                    }
                                  >
                                    See detailed
                                  </button>
                                </div>
                              </Grid>
                            </Grid>
                          </Item>
                        </Box>
                      </Col>
                    </Reveal>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchResult;
