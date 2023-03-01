import React, { useState, useEffect } from "react";
import "./PagesServices.css";
import Services from "../Services/Services";
import ReservationForm from "../ReservationForm/ReservationForm";
import Loading from "../../Loading/Loading";
function PagesServices() {
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
          <section className="PagesServicesSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Discover</div>
                  <div className="title">Our Services</div>
                </div>
              </div>
            </div>
          </section>
          <Services />
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default PagesServices;
