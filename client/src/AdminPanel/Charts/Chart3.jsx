import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";

const DemoPie = () => {
  const data = [
    {
      type: "England",
      value: 27,
    },
    {
      type: "U.S.A",
      value: 25,
    },
    {
      type: "Canada",
      value: 18,
    },
    {
      type: "Azerbaijan",
      value: 15,
    },
    {
      type: "China",
      value: 10,
    },
    {
      type: "Turkey",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default DemoPie;
