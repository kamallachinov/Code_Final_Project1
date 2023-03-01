import React, { useState, useEffect, useContext } from "react";
import "./LogIn.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function LogIn() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });



  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const variants = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      console.log(credentials);
      const response = await axios.post(
        "http://localhost:2000/auth/logIn",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      navigate("/");
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.message });
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <section className="logInSec">
        <div className="form-container">
          <form className="logInForm">
            <h5>Log In Form</h5>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password..."
              onChange={handleChange}
            />

            <button type="submit" disabled={loading} onClick={handleClick}>
              Submit
            </button>
            {error && <span>{error.message}</span>}
            <div className="form-footer">
              <span>Don't have an accaunt?</span>
              <Link to={"/signUp"}>Sign up here</Link>
            </div>
            <div className="form-footer">
              <span>Forgot password?</span>
              <Link to={"/recoverPassword"}>Recover password here</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default LogIn;
