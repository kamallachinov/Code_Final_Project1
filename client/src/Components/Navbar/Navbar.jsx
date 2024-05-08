import React, { useState, useEffect, useContext } from "react";
import logo from "../../Assets/img/logo.png";
import logoDark from "../../Assets/img/logo-dark.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsArrowUp } from "react-icons/bs";
import NavDropdown from "react-bootstrap/NavDropdown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import Fade from "@mui/material/Fade";

import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";
function Navbar() {
  const [navLogo, setLogo] = useState(logo);
  const [listItemColor, setlistItemColor] = useState("#fff");
  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [menuColor, setmenuColor] = useState("#fff");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [active, setActive] = useState(1);

  const userId = JSON.parse(localStorage.getItem("user"));

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10 ? setLogo(logoDark) : setLogo(logo);
    window.scrollY > 10
      ? window.innerWidth >= 991
        ? setlistItemColor("black")
        : setlistItemColor("#fff")
      : setlistItemColor("#fff");
    window.scrollY > 10 ? setmenuColor("black") : setmenuColor("#fff");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { dispatch } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      handleClose();
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <nav
          className="navbar"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <Link to={"/"}>
            <img src={navLogo} alt="logo" className="logo" />
          </Link>
          <input type={"checkbox"} id="toggler" />
          <label htmlFor="toggler" id="label">
            <RxHamburgerMenu style={{ color: menuColor }} />
          </label>
          <div className="menu">
            <ul className="list">
              <li
                style={{ color: listItemColor }}
                className={active === 1 ? "nav-active" : ""}
                onClick={() => setActive(1)}
              >
                <NavDropdown
                  id="nav-dropdown-white-example"
                  title="Home"
                  menuVariant="white"
                >
                  <NavDropdown.Item href="#action/3.1" className="item">
                    <NavLink className="Link" to={"/"}>
                      Home
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="item">
                    Single Product
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className="item">
                    Home Layout 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Home Layout2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Home Layout3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Home Layout4
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Home Layout1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Video1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Video2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Video3
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" className="item">
                    Video4
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavLink
                  to={"/aboutPage"}
                  style={{ color: listItemColor }}
                  className="Link"
                >
                  About
                </NavLink>
              </li>
              <li style={{ color: listItemColor }}>
                <NavDropdown
                  id="nav-dropdown-white-example"
                  title="Rooms & Suites"
                  menuVariant="white"
                >
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/rooms"}>
                      Rooms 1
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/rooms2"}>
                      Rooms 2
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li style={{ color: listItemColor }}>
                <NavLink
                  className="Link"
                  to={"/restaurant"}
                  style={{ color: listItemColor }}
                >
                  Restaurant
                </NavLink>
              </li>
              <li style={{ color: listItemColor }}>
                <NavLink
                  className="Link"
                  to={"/spa"}
                  style={{ color: listItemColor }}
                >
                  Spa
                </NavLink>
              </li>
              <li style={{ color: listItemColor }}>
                <NavDropdown
                  id="nav-dropdown-white-example"
                  title="Pages"
                  menuVariant="white"
                >
                  <NavDropdown.Item
                    className="item"
                    style={{ color: listItemColor }}
                  >
                    <NavLink className="Link" to={"/services"}>
                      Services
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/HotelFacilities"}>
                      Facilities
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/PagesTeam"}>
                      Team
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/PagesPricing"}>
                      Pricing
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/PagesCareers"}>
                      Careers
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/PagesFaqs"}>
                      F.A.Q's
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/Pages404"}>
                      404
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    Coming Soon
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li style={{ color: listItemColor }}>
                <NavDropdown
                  id="nav-dropdown-white-example"
                  title="News"
                  menuVariant="white"
                >
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/news1"}>
                      News 1
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="item">
                    <NavLink className="Link" to={"/newsSinglePost"}>
                      Single Post
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li style={{ color: listItemColor }}>
                <NavLink
                  className="Link"
                  to={"/contact"}
                  style={{ color: listItemColor }}
                >
                  Contact
                </NavLink>
              </li>
              <li style={{ color: listItemColor }}>
                {localStorage.getItem("user") !== null ? (
                  <NavDropdown
                    id="nav-dropdown-white-example"
                    title={userId.name}
                    menuVariant="white"
                  >
                    <NavDropdown.Item className="item">
                      <NavLink
                        className="Link"
                        to={`/profile/${userId?.username}`}
                      >
                        Profile
                      </NavLink>
                    </NavDropdown.Item>
                    <Divider />
                    <NavDropdown.Item className="item" onClick={handleLogout}>
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <div>
                    <Button
                      id="fade-button"
                      aria-controls={open ? "fade-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      className="Link"
                      style={{
                        color: listItemColor,
                        fontFamily: "Barlow Condensed, sans-serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        margin: "3px",
                        cursor: "pointer",
                      }}
                    >
                      Account
                    </Button>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link
                          to={"/logIn"}
                          className="Link"
                          style={{
                            textDecoration: "none",
                            color: "rgb(5, 5, 5)",
                          }}
                        >
                          Log In
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
        {showTopBtn && (
          <button
            onClick={goToTop}
            style={{
              position: "fixed",
              padding: "0.5rem 1rem",
              fontSize: "20px",
              bottom: "40px",
              right: "40px",
              backgroundColor: "#aa8453",
              color: "#fff",
              textAlign: "center",
              borderRadius: "0.3rem",
              zIndex: "200",
              border: "0",
            }}
          >
            <BsArrowUp />
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
