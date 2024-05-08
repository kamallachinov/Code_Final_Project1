import React, { useState } from "react";
import "./SearchRooms.css";
import Container from "react-bootstrap/Container";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

function SearchRooms() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if (min !== "" && max !== "") {
      navigate(`/searchResult?min=${min}&max=${max}`);
    } else {
      alert("Fill the inputs with suitable values, then search...");
    }
  };

  return (
    <>
      <section className="SearchRoomsSec">
        <Container>
          <div className="mainDiv">
            <div className="textCenter">
              <div className="subtitle">Check Now</div>
              <div className="title">Search Rooms</div>
            </div>
            <div className="formContainer">
              <form>
                <h4>Per price</h4>
                <input
                  type={"number"}
                  onChange={(e) => setMin(e.target.value)}
                />
                <h4>Max price</h4>
                <input
                  type={"number"}
                  onChange={(e) => setMax(e.target.value)}
                />
                <button onClick={handleClick}>Check now</button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default SearchRooms;
