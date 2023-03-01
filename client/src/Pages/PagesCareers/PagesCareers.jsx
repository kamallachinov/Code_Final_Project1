import React, { useState, useEffect } from "react";
import "./PageCareers.css";
import { Table } from "reactstrap";
import Container from "react-bootstrap/Container";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import ReservationForm from "../ReservationForm/ReservationForm";
import Loading from "../../Loading/Loading";

function PagesCareers() {
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
          <section className="PagesCareersSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">Pricing Plan</div>
                  <div className="title">Extra Pricing</div>
                </div>
              </div>
            </div>
          </section>
          <div className="tableContainer">
            <Container>
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <div className="pos-title">
                        Senior Executive Assistant <span>Manager</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-location">
                        <span>Location</span> New York, NY
                      </div>
                    </td>
                    <td>
                      <div className="pos-time">
                        Employment Type <span>Full-time</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-icon">
                        <HiArrowTopRightOnSquare className="icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pos-title">
                        Receptionist <span>Employee</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-location">
                        <span>Location</span> San Francisco, CA
                      </div>
                    </td>
                    <td>
                      <div className="pos-time">
                        Employment Type <span>Full-time</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-icon">
                        <HiArrowTopRightOnSquare className="icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pos-title">
                        Senior Architecture <span>Employee</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-location">
                        <span>Location</span> New York, NY
                      </div>
                    </td>
                    <td>
                      <div className="pos-time">
                        Employment Type <span>Full-time</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-icon">
                        <HiArrowTopRightOnSquare className="icon" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pos-title">
                        Intern <span>Intern</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-location">
                        <span>Location</span> San Francisco, CA
                      </div>
                    </td>
                    <td>
                      <div className="pos-time">
                        Employment Type <span>Part-time</span>
                      </div>
                    </td>
                    <td>
                      <div className="pos-icon">
                        <HiArrowTopRightOnSquare className="icon" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="text">
                <p>
                  Please submit a resume and cover letter with compensation
                  history to <b>info[at]luxuryhotel.com</b>
                </p>
              </div>
            </Container>
          </div>
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default PagesCareers;
