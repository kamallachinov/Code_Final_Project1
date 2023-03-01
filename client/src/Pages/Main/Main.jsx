import React from "react";
import { useState, useEffect } from "react";
import AboutPage from "../AboutPage/AboutPage";
import ExtraServices from "../ExtraServices/ExtraServices";
import Header from "../Header/Header";
import HotelFacilities from "../HotelFacilities/HotelFacilities";
import LuxuryExperience from "../LuxuryExperience/LuxuryExperience";
import OurNews from "../OurNews/OurNews";
import PromotionalVideo from "../PromotionalVideo/PromotionalVideo";
import ReservationForm from "../ReservationForm/ReservationForm";
import Rooms from "../Rooms/Rooms";
import SearchRooms from "../SearchRooms/SearchRooms";
import Services from "../Services/Services";
import "./Main.css";
import Loading from "../../Loading/Loading";
function Main() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <LuxuryExperience />
          <Rooms />
          <ExtraServices />
          <PromotionalVideo />
          <HotelFacilities />
          <SearchRooms />
          <Services />
          <OurNews />
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default Main;
