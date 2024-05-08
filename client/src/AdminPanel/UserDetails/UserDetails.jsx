import React, { useEffect, useState } from "react";
import "./Details.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  const [reservedRoomDetails, setReservedRoomDetails] = useState([]);
  const [userDetailed, setUserDetailed] = useState([]);
  const { userId } = useParams();

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(`http://localhost:2000/users/${userId}`)
      .then((data) => setUserDetailed(data.data));
  }, [userId]);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/order/user_orders/${userId}`)
      .then((data) => setReservedRoomDetails(data?.data));
  }, [userId]);

  return (
    <div className="detailsPageContainerForAdminPanel">
      <MDBContainer className="py-0">
        <MDBRow style={{ gap: 0, paddingTop: "4rem" }}>
          <MDBCard
            className="mb-4 profileCard"
            style={{
              backgroundColor: "#191c24",
              opacity: "0.8",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
          >
            <MDBCol>
              <MDBCardBody
                className="text-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <MDBCardImage
                  src="https://static.thenounproject.com/png/3201587-200.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "330px" }}
                  fluid
                />
                <div className="d-flex justify-content-center mb-2">
                  <button className="backToUsersTableBtn">
                    <Link to={"/adminPanel/userList"} className="Link">
                      Back to user list
                    </Link>
                  </button>
                </div>
              </MDBCardBody>
            </MDBCol>

            <MDBCol>
              <MDBCardBody>
                <MDBRow style={{ gap: 0, padding: 3 }}>
                  <MDBCol sm="4">
                    <MDBCardText className="colText">
                      Name : {userDetailed?.name}
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBCardText className="colText ">
                      Surname : {userDetailed?.surname}
                    </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBCardText className="colText">
                      E-mail : {userDetailed?.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
            <MDBContainer>
              <div className="usersReservationText">
                <h4>USER'S RESERVATION</h4>
              </div>
              <MDBCol sm="12">
                <div className="tableContainerDivforAdminPanelll">
                  <div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Room Created Time</th>
                          <th>E-mail address</th>
                          <th>Room Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservedRoomDetails.map((reservedRoom) => (
                          <tr key={user?._id}>
                            <td>{reservedRoom?.createdAt}</td>
                            <td>{reservedRoom?.room.name}</td>
                            <td>{reservedRoom?.room.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </MDBCol>
            </MDBContainer>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Details;
