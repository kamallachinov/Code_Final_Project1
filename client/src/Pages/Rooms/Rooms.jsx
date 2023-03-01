import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { GiTowel } from "react-icons/gi";
import "./Rooms.css";
import useFetch from "../../hooks/useFetch";
function Rooms() {
  const { data, loading, error } = useFetch("http://localhost:2000/rooms");

  const navigate = useNavigate();

  const handleDetails = (_id) => {
    navigate(`/roomDetails/${_id}`);
  };
  return (
    <>
      <section className="roomsSec">
        <Container>
          <div className="textStart">
            <div className="subtitle">The Cappa Luxury Hotel</div>
            <div className="title">Rooms & Suites</div>
          </div>
          <Row className="roomsRow">
            {data.map((room, _id) => (
              <Col
                className="roomsCol col-md-6 col-sm-12"
                lg={4}
                key={room._id}
              >
                <Fade bottom>
                  <div className="roomCard">
                    <img src={room.imgUrl} />
                    <div className="card-header">
                      <Link to={"/rooms"} className="linkk">
                        Book
                      </Link>
                    </div>
                    <div className="info">
                      <h6>{room.price}$ / Night</h6>
                      <h5>{room.name}</h5>
                    </div>
                    <div className="divider"></div>
                    <div className="intro">
                      <span>
                        <FaBed className="icon" />
                        <FaBath className="icon" />
                        <MdDinnerDining className="icon" />
                        <GiTowel className="icon" />
                      </span>
                      <span
                        className="detailsBtn"
                        onClick={() => handleDetails(room._id)}
                      >
                        Details <AiOutlineArrowRight />
                      </span>
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Rooms;
