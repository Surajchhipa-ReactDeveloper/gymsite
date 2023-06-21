import React, { useRef, useState } from "react";
import "./VideoSlider.css";
import "./VideoSliderMd.css";
import VideoClipData from "./VideoSliderData";
import BackText from "../../Comman/BackHeading/BackText";

const VideoSlider = () => {
  const videoRefs = useRef([]);
  const [videoData] = useState(VideoClipData);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [controlVideo, setControlVideo] = useState();

  const playVideo = (index) => {
    if (currentVideoIndex !== index) {
      setCurrentVideoIndex(index);
      videoRefs.current[currentVideoIndex].pause();
      videoRefs.current[currentVideoIndex].currentTime = 0;
    }
    setCurrentVideoIndex(index);
    setControlVideo(index);
    videoRefs.current[index].play();
  };

  return (
    <>
      <div className="VideoSlider_container Common Container">
        <div className="VideoSlider_container">
          <div className="VideoSlider_Top_container Common_container_with_back_text">
            <div className="VideoSlider_Heading_And_border_BackText  Common_border_BackText">
              <div className="back_text">
                <BackText BackText="VIDEOS" />
              </div>
              <div className="VideoSlider_Heading_And_border Common_Head_Border">
                <div className="VideoSlider_heading Common_On_text_heading">
                  Our Training Series
                </div>
                <div className="VideoSlider_Border Common_OnTextBorder"></div>
              </div>
            </div>
            <div className="VideoSlider_caption_container Common_Bottom_Text_Desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              laborum, voluptates,or sit amet consectetur adipisicing elit.
              Porro laborum, voluptates, esse nihil incidunt inventore error.
            </div>
          </div>
          <div className="SliderVideoFlexContainer">
            <div className="Video_slider_main_container">
              {videoData.map((video, index) => {
                const { id, Clip, Exercise, ExerciseType, AboutExercise } =
                  video;
                return (
                  <div className="VideoSlider_slider" key={index + id}>
                    <div className="VideoSlider_video">
                      <div
                        className={
                          controlVideo === index ? "" : "Video_Overlay"
                        }
                        onClick={() => {
                          playVideo(index);
                        }}
                      ></div>
                      <video
                        ref={(ref) => (videoRefs.current[index] = ref)}
                        className="Video"
                        controls={controlVideo === index ? true : false}
                      >
                        <source src={Clip} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="VideoSlider_Slider_About_video">
                      <div className="hello">
                        <div className="Top_Exercise_name_and_type">
                          <div className="Exercise_name">{Exercise}</div>
                          <div className="Exercise_type">{ExerciseType}</div>
                        </div>
                        <div className="About_video">{AboutExercise}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="VideoSlider_State">
            <div className="Change_video_State">
              {videoData.map((video, index) => {
                return (
                  <div
                    className={`VideoSlider ${
                      controlVideo === index ? "VideoSlider activeDot" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      playVideo(index);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSlider;
