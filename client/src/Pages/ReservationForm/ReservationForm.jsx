import React from "react";
import "./ReservationForm.css";
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { useFormik } from "formik";
import image1 from "../../Assets/img/brand1.png";
import image2 from "../../Assets/img/brand2.png";
import image3 from "../../Assets/img/brand3.png";
import image4 from "../../Assets/img/brand4.png";
import image5 from "../../Assets/img/brand5.png";
import image6 from "../../Assets/img/brand6.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
function ReservationForm() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      lastName: "",
      email: "",
      age: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      age: Yup.number()
        .required("Age is important")
        .min(18, "age can't be less than 18 years :("),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
 
  return (
    <>
      <section className="ReservationFormSec">
        <Container maxWidth="lg">
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={0}
              columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
              margin={0}
            >
              <Grid item xs={12} sm={12} md={6} lg={7}>
                <Col className="col">
                  <div className="formDivContainer">
                    <div className="iconContainer">
                      <AiFillStar className="icon" />
                      <AiFillStar className="icon" />
                      <AiFillStar className="icon" />
                      <AiFillStar className="icon" />
                      <AiFillStar className="icon" />
                    </div>
                    <h5>
                      Each of our guest rooms feature a private bath, wi-fi,
                      cable television and include full breakfast.
                    </h5>
                    <div className="reservationPhoneCall">
                      <span>
                        <FiPhoneCall className="phoneIcon" />
                      </span>
                      <div>
                        <p>Reservation</p>
                        <span className="phoneNum">855 100 4444</span>
                      </div>
                    </div>
                    <div className="footertext">
                      <p>Call us, it's toll-free.</p>
                      <AiOutlineCheck className="check" />
                    </div>
                  </div>
                </Col>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={5}>
                <Col className="col ">
                  <div className="formDiv">
                    <div className="textHeader">
                      <h6>Rooms & Suites</h6>
                      <h4>Hotel Registration Form</h4>
                    </div>
                    <div className="formContainer">
                      <form onSubmit={formik.handleSubmit}>
                        <input
                          id="Name"
                          type="text"
                          placeholder="Name..."
                          {...formik.getFieldProps("Name")}
                        />
                        <input
                          id="lastName"
                          placeholder="Last Name..."
                          type="text"
                          {...formik.getFieldProps("lastName")}
                        />
                        <input
                          id="email"
                          type="email"
                          placeholder="Email Address..."
                          {...formik.getFieldProps("email")}
                        />
                        <input
                          id="age"
                          type="number"
                          placeholder="Age..."
                          {...formik.getFieldProps("age")}
                        />
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </Col>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <div className="brands">
        <Col className="col">
          <div className="brandDiv" data-aos="fade-right">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
            <img src={image5} alt=""/>
            <img src={image6} alt=""/>
          </div>
        </Col>
      </div>
    </>
  );
}

export default ReservationForm;
