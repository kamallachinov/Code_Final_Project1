import React, { useState } from "react";
import "./PromotionalVideo.css";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
function PromotionalVideo() {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "7BGNAGahig8";
  const youtubeEmbedLink = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <section className="PromotionalVideoSec">
        <div className="textCenter">
          <span>
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="subtitle">The Cappa Luxury Hotel</div>
          <div className="title">Promotional Video</div>

          <div style={{ position: "relative" }}>
            {!showVideo && (
              <button onClick={() => setShowVideo(true)} className="playBtn">
                <BsPlay />
              </button>
            )}
            {showVideo && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  src={youtubeEmbedLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture"
                  allowFullScreen
                  title="Youtube link"
                />

                <AiOutlineClose
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "0px",
                    fontSize: "28px",
                    cursor: "pointer",
                    color: "white",
                  }}
                  onClick={() => setShowVideo(false)}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default PromotionalVideo;
