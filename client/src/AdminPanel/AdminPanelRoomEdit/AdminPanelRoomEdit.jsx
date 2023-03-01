import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import Button from "@mui/material/Button";
import "./AdminPanelRoomEdit.css";

function AdminPanelRoomEdit() {
  const [roomForEdit, setRoomForEdit] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:2000/rooms/${roomId}`).then((res) => {
      setImgUrl(res.data?.imgUrl ?? "");
      setName(res.data?.name ?? "");
      setPrice(res.data?.price ?? "");
      setRoomForEdit(res.data);
    });
  }, []);

  const obj = {
    imgUrl: imgUrl,
    name: name,
    price: price,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imgUrl == "" && name == "" && price == "") {
      alert("Fill the inputs!");
    } else {
      axios
        .put(`http://localhost:2000/rooms/${roomId}`, obj)
        .then((res) => console.log(res));
      console.log(obj);
      setImgUrl("");
      setName("");
      setPrice("");
      setTimeout(
        () => alert("Data updated succesfully!"),
        navigate(`/adminPanel/roomList`),
        2500
      );
    }
  };


  return (
    <>
      <div className="roomEditPageForAdminPanel">
        <div className="roomEditCardContainerDiv">
          <div>
            <form>
              <h4>Image Url</h4>
              <Input
                value={roomForEdit.imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              ></Input>
              <h4>Room Name</h4>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Input>
              <h4>Room Price</h4>
              <Input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Input>
              <div className="editActionsContainer">
                <button onClick={handleSubmit} className="EditBtn">
                  Update
                </button>
                <button variant="contained" className="backToTableBtn">
                  <Link
                    to={"/adminPanel/roomList"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Go Table
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanelRoomEdit;
