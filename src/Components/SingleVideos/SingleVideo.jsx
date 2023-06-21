import React, { useRef, useState } from "react";
import "./SingleVideo.css";
import "./SingleVideoMd.css";
import { Images } from "../../Constant/imagePath";
const SingleVideo = () => {
const [playing, setPlaying] = useState(false);

const videoRef = useRef(null);
 const videoPlayer = (control) => {
   if (control === "play") {
     videoRef.current.play();
     setPlaying(true);
   } else if (control === "pause") {
     videoRef.current.pause();
     setPlaying(false);
   }
 };
  return (
    <>
        <div className="SingleVideo_container">
          <div className="BackGround_line_and_Vertical_line">
            <div className="Vertical_line Common_Vertical_line">VIDEO</div>
            <div className="Background_line">
              <img src={Images.Video_back1} alt="" />
            </div>
          </div>
          <div className="Main_Video red">
            <video ref={videoRef} className="VideoSingle" id="video1">
              <source
                src=".//SingleVideo/TrainingVideosBig.mp4"
                type="video/mp4"
              />
            </video>
            <div className="Video_Play_Pause">
              {playing ? (
                <svg
                  onClick={() => videoPlayer("pause")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#E41C26"
                  class="bi bi-pause-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                </svg>
              ) : (
                <svg
                  onClick={() => videoPlayer("play")}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#E41C26"
                  class="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default SingleVideo;
