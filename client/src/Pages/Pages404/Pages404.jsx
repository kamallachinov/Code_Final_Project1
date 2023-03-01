import React from "react";
import "./Pages404.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
function Pages404() {
  return (
    <>
      <section className="Page404Sec">
        <div className="mainDiv">
          <div className="col-lg-12">
            <h2>Not Found 404</h2>
            <h6>Sorry We Can't Find That Page!</h6>
          </div>
          <div className="col-lg-12">
            <h1>404</h1>
          </div>
          <div className="col-lg-12">
            <p>
              The page you are looking for was moved, removed, renamed or never
              existed.
            </p>
          </div>
          <div className="col-lg-12">
            <form>
              <input placeholder="Search..." />
              <button>Search</button>
            </form>
          </div>
          <div className="col-lg-12">
            <span>
              <AiOutlineArrowLeft className="icon" />
              <p>
                <Link to={"/"} className="link">
                  Back to home
                </Link>
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pages404;
