import React from "react";
import RiseLoader from "react-spinners/RiseLoader";
import "./Loading.css";
function Loading() {
  return (
    <>
      <div className="loader">
        <RiseLoader color="#8E6D45" size={15} />
      </div>
    </>
  );
}

export default Loading;
