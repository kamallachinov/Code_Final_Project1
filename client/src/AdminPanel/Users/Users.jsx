import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Users.css";
function Users() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const getUsers = async () => {
    axios
      .get("http://localhost:2000/users")
      .then((users) => setUsers(users.data));
  };
  useEffect(() => {
    getUsers();
  }, []);
  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: "#233466",
      color: "white",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:2000/users/${id}`);
        let theRestUsers = users.filter((user) => user._id !== id);
        setUsers(theRestUsers);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleView = (id) => {
    navigate(`/adminPanel/userList/${id}`);
  };
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="tableContainerDivforAdminPanel">
        <div className="someActionsContainerDiv">
          <input
            type={"text"}
            placeholder="Search..."
            value={input}
            onChange={handleSearch}
          />
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>E-mail address</th>
                <th>Acc creating date</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((item) =>
                  input === ""
                    ? users
                    : item.username.toLowerCase().includes(input.toLowerCase())
                )
                .map((user) => (
                  <tr key={user?._id}>
                    <td>{user?.username}</td>
                    <td>{user?.email}</td>
                    <td>{user?.createdAt}</td>
                    <td>{user?.isAdmin === true ? "Admin" : "User"}</td>
                    <td>
                      <div className="actionsContainer">
                        <button
                          className="deleteBtn"
                          onClick={() => deleteUser(user._id)}
                        >
                          DELETE
                        </button>
                        {/* <button className="editBtn">EDIT</button> */}
                        <button
                          className="viewBtn"
                          onClick={() => handleView(user._id)}
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
    </>
  );
}

export default Users;
