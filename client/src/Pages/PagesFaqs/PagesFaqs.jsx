import React, { useState, useEffect } from "react";
import "./PagesFaqs.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ReservationForm from "../ReservationForm/ReservationForm";
import Loading from "../../Loading/Loading";

function PagesFaqs() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {" "}
          <section className="PagesFaqsSec">
            <div className="container">
              <div className="row">
                <div className="textCenter">
                  <div className="subtitle">F.A.Qs</div>
                  <div className="title">Frequently Asked Questions</div>
                </div>
              </div>
            </div>
          </section>
          <div className="accardionSec">
            <div className="accordionContainer">
              <div className="container">
                <div className="accardion">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        How can I confirm that you have received my reservation?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        Up to what age are they considered children?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        Do you have any discount code?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel4bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        How can I get in touch with my hotel?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel5bh-content"
                      id="panel4bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        On the last day, can I leave the room later?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel6bh-content"
                      id="panel4bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        Can I cancel my reservation?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                    className="accardionItem"
                  >
                    <AccordionSummary
                      expandIcon={<AddIcon sx={{ color: "#AA8453" }} />}
                      aria-controls="panel7bh-content"
                      id="panel4bh-header"
                    >
                      <Typography
                        sx={{
                          width: "100%",
                          flexShrink: 0,
                          fontFamily: "Gilda Display",
                          fontSize: "20px",
                          lineHeight: "27px",
                          fontWeight: "400",
                          color: "#AA8453",
                          paddingLeft: "14px",
                          paddingBottom: "14px",
                          paddingTop: "14px",
                        }}
                      >
                        Do you have hotels with a spa?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          paddingLeft: "16px",
                          color: "#666",
                          fontSize: "18px",
                        }}
                      >
                        Lorem ut nisl quam nestibulum ac quam nec odio elementum
                        sceisue the aucan ligula. Orci varius natoque penatibus
                        et magnis dis parturient monte nascete ridiculus mus
                        nellentesque habitant morbine. Donec in quis the
                        pellentesque velit id velit ac arcu posuere blane.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <ReservationForm />
        </div>
      )}
    </>
  );
}

export default PagesFaqs;
