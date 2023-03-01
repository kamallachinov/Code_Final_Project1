import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { Table } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ImCancelCircle } from "react-icons/im";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Loading/Loading";
import axios from "axios";

function Profile() {
  const [myOrder, setMyOrder] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    axios
      .get(`http://localhost:2000/order/user_orders/${user?._id}`)
      .then((data) => setMyOrder(data.data));
  }, []);


  const cancelReservation = async (id) => {
    let orders = myOrder.filter((order) => order._id !== id);
    setMyOrder(orders);
    await axios.delete(`http://localhost:2000/order/${id}`);
  };

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
        <section className="profileSec">
          <MDBContainer className="py-0">
            <MDBRow style={{ gap: 0, paddingTop: "8rem" }}>
              <MDBCard
                className="mb-4 profileCard"
                style={{ backgroundColor: "#fff" }}
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
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "300px" }}
                      fluid
                    />
                    <p className="text-muted mb-4 mt-4 userName">
                      Username: {user?.username}
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <button className="backToHomeBtn">
                        <Link to={"/"} className="Link">
                          Back to home
                        </Link>
                      </button>
                      <button
                        outline
                        className="ms-1 logOutBtn"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
                  </MDBCardBody>
                </MDBCol>

                <MDBCol>
                  <MDBCardBody>
                    <MDBRow style={{ gap: 0, padding: 3 }}>
                      <MDBCol sm="3">
                        <MDBCardText className="rowTitle">Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.name}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBRow style={{ gap: 0, padding: 3 }}>
                      <MDBCol sm="3">
                        <MDBCardText className="rowTitle">Surname</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.surname}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow style={{ gap: 0, padding: 1 }}>
                      <MDBCol sm="3">
                        <MDBCardText className="rowTitle">
                          updatedAt
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user.updatedAt}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    {myOrder.length === 0 ? (
                      <div className="noOrderDiv">
                        <ImCancelCircle className="iconn" />
                        <h2>You don't ordered any room.</h2>
                      </div>
                    ) : (
                      <div>
                        <div className="reservationTitle">
                          <h4>Your reservations</h4>
                        </div>
                        <Table hover>
                          <thead>
                            <tr className="headingTable">
                              <th>#</th>
                              <th>Reserved at:</th>
                              <th>Room Name</th>
                              <th>Room Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {myOrder.map((orderDetails) => (
                              <tr key={orderDetails._id}>
                                <th>1</th>
                                <td>{orderDetails.createdAt}</td>
                                <td>{orderDetails.room.name}</td>
                                <td>{orderDetails.room.price}</td>
                                <td>
                                  <button
                                    onClick={() =>
                                      cancelReservation(orderDetails?._id)
                                    }
                                    className="cancelBtn"
                                  >
                                    Cancel reservation
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    )}
                  </MDBCardBody>
                </MDBCol>
              </MDBCard>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </>
  );
}

export default Profile;
