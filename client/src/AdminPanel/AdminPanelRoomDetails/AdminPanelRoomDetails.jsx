import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./AdminPanelRoomDetails.css";
function AdminPanelRoomDetails() {
  const [roomForDetails, setRoomForDetails] = useState([]);
  const { roomId } = useParams();
  const getRoomData = () => {
    axios
      .get(`http://localhost:2000/rooms/${roomId}`)
      .then((data) => setRoomForDetails(data.data));
  };

  useEffect(() => {
    getRoomData();
  }, [roomId]);

  return (
    <div className="RoomDetailsPageForAdminPanel">
      <div className="cardForRoomDetails">
        <div className="imgContainerDiv">
          <img
            src={roomForDetails?.imgUrl}
            alt=""
            style={{ width: "400px", height: "500px" }}
          />
        </div>
        <div className="infoAboutRoom">
          <h4>Room Name: {roomForDetails?.name}</h4>
          <h4>Room Price: {roomForDetails?.price}</h4>
          <h4>Room Type: "{roomForDetails?.type}"</h4>
          <h4>Room Count: "{roomForDetails?.count}"</h4>
          <button className="backToTableBtn">
            <Link to={"/adminPanel/roomList"} className="Linkk">
              Back to table
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanelRoomDetails;
