import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ImCancelCircle } from "react-icons/im";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./AdminPanelRooms.css";
function Room() {
  const [rooms, setRooms] = useState([]);
  const [show, setShow] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [name, setname] = useState("");
  const [price, setPrice] = useState();
  const [count, setCount] = useState();
  const [roomType, setRoomType] = useState();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      imgUrl: "",
      name: "",
      price: "",
      roomType: "",
      count: "",
    },
    validationSchema: Yup.object({
      imgUrl: Yup.string()
        .min(15, "Must be 15 characters or more")
        .required("Required"),
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      roomType: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      price: Yup.number().max(500).required("Required"),
      count: Yup.number().max(5).required("Required"),
    }),
    onSubmit: (values) => {
      alert("Created new room succesfully!");
      const obj = {
        imgUrl: values.imgUrl,
        name: values.name,
        price: values.price,
        type: values.roomType,
        count: values.count,
      };
      setShow(false);
      axios
        .post("http://localhost:2000/rooms/63ee12a65b0084516cb0f2b6", obj)
        .then((res) => console.log(res));
    },
  });

  const navigate = useNavigate();

  const getRooms = async () => {
    axios
      .get("http://localhost:2000/rooms")
      .then((rooms) => setRooms(rooms.data));
  };
  useEffect(() => {
    getRooms();
  });
  const deleteRoom = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        background: "#233466",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        color: "white",
        gap: "20px",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          axios.delete(
            `http://localhost:2000/rooms/find/${id}/63ee12a65b0084516cb0f2b6`
          );
          let theRestRooms = rooms.filter((room) => room._id !== id);
          setRooms(theRestRooms);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const handleEdit = (id) => {
    navigate(`/adminPanel/roomEdit/${id}`);
  };

  const handleCreate = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleView = (id) => {
    navigate(`/adminPanel/roomList/${id}`);
  };
  return (
    <div className="tableContainerDivforAdminPanell">
      <div className="someActionsContainerDiv">
        <button onClick={handleCreate}>Add new room</button>
        <input
          type={"text"}
          placeholder="Search..."
          value={input}
          onChange={handleSearch}
        />
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          }}
        >
          <Modal.Header className="modalHeaderContainer">
            <Modal.Title>
              <div className="modalHeadingContainerDiv">
                <h3>Creating new room type</h3>
                <ImCancelCircle onClick={handleClose} className="icon" />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="roomModalBody">
            <form onSubmit={formik.handleSubmit}>
              <div className="addingNewRoomRow">
                <h4>Image Url</h4>
                <input
                  id="imgUrl"
                  type="text"
                  value={imgUrl}
                  {...formik.getFieldProps("imgUrl")}
                />
              </div>

              {formik.touched.imgUrl && formik.errors.imgUrl ? (
                <div>{formik.errors.imgUrl}</div>
              ) : null}

              <div className="addingNewRoomRow">
                <h4>Room Name</h4>
                <input
                  id="name"
                  type="text"
                  value={name}
                  {...formik.getFieldProps("name")}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}

              <div className="addingNewRoomRow">
                <h4>Price</h4>
                <input
                  id="price"
                  type="number"
                  value={price}
                  {...formik.getFieldProps("price")}
                />
              </div>

              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
              <div className="addingNewRoomRow">
                <h4>roomType</h4>
                <input
                  id="roomType"
                  type="text"
                  value={roomType}
                  {...formik.getFieldProps("roomType")}
                />
              </div>

              {formik.touched.roomType && formik.errors.roomType ? (
                <div>{formik.errors.roomType}</div>
              ) : null}
              <div className="addingNewRoomRow">
                <h4>Count</h4>
                <input
                  id="count"
                  type="number"
                  value={count}
                  {...formik.getFieldProps("count")}
                />
              </div>

              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
              <div className="roomModalActionsDiv">
                <button className="createBtn" type="submit">
                  Create
                </button>
              </div>
            </form>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
        <table className="table">
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Room Price</th>
              <th>Room Type</th>
              <th>Room Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms
              .filter((item) =>
                input == ""
                  ? rooms
                  : item.name.toLowerCase().includes(input.toLowerCase())
              )
              .map((room) => (
                <tr key={room?._id}>
                  <td>{room?.name}</td>
                  <td>{room?.price}</td>
                  <td>{room?.type}</td>
                  <td>{room?.count}</td>
                  <td>
                    <div className="actionsContainer">
                      <button
                        className="deleteBtn"
                        onClick={() => deleteRoom(room._id)}
                      >
                        DELETE
                      </button>
                      <button
                        className="editBtn"
                        onClick={() => handleEdit(room._id)}
                      >
                        EDIT
                      </button>
                      <button
                        className="viewBtn"
                        onClick={() => handleView(room._id)}
                      >
                        VIEW
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Room;
