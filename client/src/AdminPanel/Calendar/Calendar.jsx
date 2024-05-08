import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Calendar.css";
function Calendarr() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendarContainerDivForAdminPanel">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sm={12} lg={12}>
            <Calendar onChange={onChange} value={value} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Calendarr;
