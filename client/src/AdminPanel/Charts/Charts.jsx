import React, { useEffect, useState } from "react";
import "./Charts.css";

import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import Chart4 from "./Chart4";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Area } from "@ant-design/plots";
import { IoAccessibility } from "react-icons/io5";
import { FaRegComments, FaFacebookF } from "react-icons/fa";
import {
  BsStopwatch,
  BsCloudDownload,
  BsTwitter,
  BsLinkedin,
  BsGoogle,
} from "react-icons/bs";
function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "Date",
    yField: "scales",
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
  };

  return (
    <div className="chartsContainerDivForAdminPanel">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={12} lg={3}>
            <div className="miniCardContainerForAdminPanel">
              <IoAccessibility className="icon" />
              <h4>2500</h4>
              <p>Welcome</p>
            </div>
          </Grid>
          <Grid item xs={6} lg={3} sm={12}>
            <div
              className="miniCardContainerForAdminPanel"
              style={{ backgroundColor: "#2196F3" }}
            >
              <BsStopwatch className="icon" />
              <h4>123.50</h4>
              <p>Average Time</p>
            </div>
          </Grid>
          <Grid item xs={6} lg={3} sm={12}>
            <div
              className="miniCardContainerForAdminPanel"
              style={{ backgroundColor: "#009688" }}
            >
              <BsCloudDownload className="icon" />
              <h4>1,805</h4>
              <p>Collections</p>
            </div>
          </Grid>
          <Grid item xs={6} lg={3} sm={12}>
            <div
              className="miniCardContainerForAdminPanel"
              style={{ backgroundColor: "#E91E63" }}
            >
              <FaRegComments className="icon" />
              <h4>54</h4>
              <p>Comments</p>
            </div>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={12} lg={3}>
            <div className="socialCardContainerForAdminPanel">
              <div className="social_icon_div">
                <FaFacebookF className="icon" />
              </div>
              <div className="social_cont_div">
                <ul>
                  <li>
                    <h5>35k</h5>
                    <span>Friends</span>
                  </li>
                  <li>
                    <h5>128</h5>
                    <span>Feeds</span>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} lg={3} sm={12}>
            <div className="socialCardContainerForAdminPanel">
              <div
                className="social_icon_div"
                style={{ backgroundColor: "#00ACED" }}
              >
                <BsTwitter className="icon" />
              </div>
              <div className="social_cont_div">
                <ul>
                  <li>
                    <h5>584k</h5>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h5>978</h5>
                    <span>Tweets</span>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} lg={3} sm={12}>
            <div className="socialCardContainerForAdminPanel">
              <div
                className="social_icon_div"
                style={{ backgroundColor: "#0077B5" }}
              >
                <BsLinkedin className="icon" />
              </div>
              <div className="social_cont_div">
                <ul>
                  <li>
                    <h5>758+</h5>
                    <span>Contacts</span>
                  </li>
                  <li>
                    <h5>365</h5>
                    <span>Feeds</span>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} lg={3} sm={12}>
            <div className="socialCardContainerForAdminPanel">
              <div
                className="social_icon_div"
                style={{ backgroundColor: "#D34836" }}
              >
                <BsGoogle className="icon" />
              </div>
              <div className="social_cont_div">
                <ul>
                  <li>
                    <h5>450</h5>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h5>57</h5>
                    <span>Circles</span>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={12} lg={6}>
            <Item>
              <Area {...config} />;
            </Item>
          </Grid>
          <Grid item xs={6} lg={6} sm={12}>
            <Item style={{ padding: "1.1rem 1rem" }}>
              <Chart4 />
            </Item>
          </Grid>
          <Grid item xs={6} lg={6} sm={12}>
            <Chart2 />
          </Grid>
          <Grid item xs={6} lg={6} sm={12}>
            <Chart3 />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
