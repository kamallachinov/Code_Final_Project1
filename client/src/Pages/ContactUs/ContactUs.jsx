import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import ReservationForm from "../ReservationForm/ReservationForm";
import Loading from "../../Loading/Loading";

function ContactUs() {
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
          <section className="contactUsSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Get in touch</div>
                  <div className="title">Contact Us</div>
                </div>
              </div>
            </div>
          </section>
          <Container>
            <Row>
              <Col>
                <div className="textDiv">
                  <h3>The Cappa Luxury Hotel</h3>
                  <p>
                    Hotel ut nisl quam nestibulum ac quam nec odio elementum
                    sceisue the aucan ligula. Orci varius natoque penatibus et
                    magnis dis parturient monte nascete ridiculus mus
                    nellentesque habitant morbine.
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
                  <div className="reservation">
                    <span>
                      <AiOutlineMail className="phoneIcon" />
                    </span>
                    <div>
                      <span>Email Info</span>
                      <span className="num">info@luxuryhotel.com</span>
                    </div>
                  </div>
                  <div className="reservation">
                    <span>
                      <GoLocation className="phoneIcon" />
                    </span>
                    <div>
                      <span>Address</span>
                      <span>
                        1616 Broadway NY, New York 10001 United States of
                        America
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="FormContainer">
                  <h3>Get in touch</h3>
                  <form>
                    <div>
                      <input placeholder="Your Name *" />
                      <input placeholder="Your Name *" />
                    </div>
                    <div>
                      <input placeholder="Your Name *" />
                      <input placeholder="Your Name *" />
                    </div>
                    <textarea className="textarea" placeholder="Message *" />
                    <button className="button slide_right">Send Message</button>
                  </form>
                </div>
              </Col>
            </Row>
            <div className="mapContainer">
              <Row>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.42999314962!2d49.71487582794752!3d40.39450798044884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YMsINCQ0LfQtdGA0LHQsNC50LTQttCw0L0!5e0!3m2!1sru!2s!4v1676110679132!5m2!1sru!2s"
                  style={{ width: "800", height: "800", style: "border:0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Row>
            </div>
          </Container>
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default ContactUs;
