import React, { useEffect, useState } from "react";
import "./RoomsSuits.css";
import { AiFillStar } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";
import ReservationForm from "../ReservationForm/ReservationForm";
import Rooms from "../Rooms/Rooms";
import ExtraServices from "../ExtraServices/ExtraServices";
import Loading from "../../Loading/Loading";

function RoomsSuits() {
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
          <section className="roomsSuitsSec">
            <div className="container">
              <div className="row">
                <div className="col col-lg-12">
                  <div className="iconsContainer">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                  </div>
                  <div className="subtitle">THE CAPPA LUXURY HOTEL</div>
                  <div className="title">Rooms & Suites</div>
                </div>
              </div>
            </div>
          </section>
          <Rooms />
          <ExtraServices />
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default RoomsSuits;
