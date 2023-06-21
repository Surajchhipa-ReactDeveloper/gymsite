import React, { useState, useRef, useEffect } from "react";
import "./Choose.css";
import "./ChooseMd.css";
import ChooseData from "./ChooseData";
import BackText from "../../Comman/BackHeading/BackText";

const Choose = () => {
  const [ChooseSlider] = useState(ChooseData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  },);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ChooseSlider.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideWidth = sliderRef.current.offsetWidth / 2;
    sliderRef.current.scrollTo({
      left: (slideWidth * currentIndex) / 2,
      behavior: "smooth",
    });
    console.log(sliderRef.current.offsetWidth);
  }, [currentIndex]);

  return (
    <>
        <div className="Choose_Container1">
          <div className="Choose_Container">
            <div className="Choose_top_container Common_container_with_back_text">
              {/* Rest of your code */}
              <div className="Choose_Heading_And_border_BackText  Common_border_BackText">
                <div className="back_text">
                  <BackText BackText="FEATURES" />
                </div>
                <div className="Choose_Heading_And_border Common_Head_Border">
                  <div className="Choose_heading Common_On_text_heading">
                    WHY CHOOSE US
                  </div>
                  <div className="Choose_Border Common_OnTextBorder"></div>
                </div>
              </div>
              <div className="Choose_caption_container Common_Bottom_Text_Desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                laborum, voluptates,or sit amet consectetur adipisicing elit.
                Porro laborum, voluptates, esse nihil incidunt inventore error.
              </div>
            </div>

            <div className="Choose_Slider_Container" ref={sliderRef}>
              {ChooseSlider.map((item, index) => {
                const { id, name, Seen, DES } = item;

                return (
                  <div
                    className={`Choose_slider ${
                      index === currentIndex ? "active" : ""
                    }`}
                    key={id}
                  >
                    <div className="Slider_Title_Name">{name}</div>
                    <div className="Choose_Slider_logo">
                      <img src={Seen} alt="" />
                    </div>
                    <div className="Slider_Logo_About">{DES}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="slide">
            <div className="Change_slider_state">
              {ChooseSlider.map((item, index) => (
                <div
                  className={`StateSlide ${
                    index === currentIndex ? "activeDot" : ""
                  }`}
                  key={index}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default Choose;
