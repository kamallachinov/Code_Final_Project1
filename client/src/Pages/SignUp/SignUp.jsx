import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
function SignUp() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    name: undefined,
    surname: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2000/auth/register",
        credentials
      );
      dispatch({ type: "SIGN_UP", payload: response.data });
      navigate("/logIn");
    } catch (err) {
      dispatch({ type: "SIGN_UP_FAILURE", payload: err.response.data });
      alert(err.response.data.message);
      navigate("/Pages404");
    }
  };
  return (
    <>
      <Navbar />
      <section className="signUpSec">
        <div className="form-container">
          <form className="signUpForm">
            <h5>Sign Up Form</h5>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={credentials.username}
              type="text"
              placeholder="User Name..."
              onChange={handleChange}
            />
            <label htmlFor="name">First Name</label>
            <input
              id="name"
              value={credentials.name}
              type="text"
              placeholder="First Name..."
              onChange={handleChange}
            />
            <label htmlFor="surname">Last Name</label>
            <input
              id="surname"
              value={credentials.surname}
              type="text"
              placeholder="Last Name..."
              onChange={handleChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={credentials.email}
              placeholder="E-mail..."
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={credentials.password}
              placeholder="Password..."
              onChange={handleChange}
            />
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
            <div className="form-footer">
              <span>Already have an accaunt?</span>
              <Link to={"/logIn"}>Log in here</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignUp;
