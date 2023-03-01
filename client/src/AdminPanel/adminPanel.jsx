import React from "react";
import { Outlet } from "react-router-dom";
import Pages404 from "../Pages/Pages404/Pages404";
import SideBar from "./SideBar/SideBar";
import { Helmet } from "react-helmet";

function AdminPanel() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.isAdmin);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin Panel</title>
        <link
          rel="icon"
          href="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
        />
      </Helmet>
      <div>
        {user && user.isAdmin ? (
          <>
            <SideBar />
            <Outlet />
          </>
        ) : (
          <Pages404 />
        )}
      </div>
    </>
  );
}

export default AdminPanel;
