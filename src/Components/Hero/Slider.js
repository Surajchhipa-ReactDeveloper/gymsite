import React, { useRef, useEffect, useState } from "react";
import "./Hero.css";
import "./HeroMd.css";
import "./Slider.css";
import HeroData from "./HeroData";
import { Images } from "../../Constant/imagePath";
import Primary from "../../Comman/PrimaryBtn/Primary";
import { Icon } from "../../Constant/iconPath";

const Slider = () => {
  const [heroPages] = useState(HeroData);
  const [indexImage, setIndexImage] = useState(0);
  useEffect(() => {});

  const RAf = useRef(null);
  const pressOldImg = () => {
    const width = RAf.current.clientWidth;
    RAf.current.scrollLeft = RAf.current.scrollLeft - width;
    setIndexImage(indexImage - 1);
  };

  const pressNewImg = () => {
    const width = RAf.current.clientWidth;
    RAf.current.scrollLeft = RAf.current.scrollLeft + width;
    setIndexImage(indexImage + 1);
  };
  return (
    <div className="Gallery-slider-items-container home" ref={RAf} id="home">
      {heroPages.map((item, indexSlider) => {
        const { id, IMG, TagLine, TitleLine, DisLine } = item;
        return (
          <div className="hero_display">
            <div className="Hero_section" id={id} key={indexSlider}>
              <div className="Hero_img">
                <img
                  className="hero_background_img"
                  src={IMG}
                  alt="Loading image..."
                />
              </div>
              <div className="Border_and_inner_text_container">
                <div className="Text_outer_border">
                  <img
                    src={Images.Text_outerBorder}
                    alt=""
                    className="Text_Boredr_orange"
                  />
                  <div className="Hero_content">
                    <h5 className="Hero_tagline"> {TagLine}</h5>
                    <h1 className="Hero_title">{TitleLine}</h1>
                    <p className="Hero_dis">{DisLine}</p>
                    <button className="Join_button">
                      <Primary HowText="JOIN US NOW" />
                    </button>
                    <div className="btn_border_div">
                      <img
                        src={Images.Btn_outerBorder}
                        alt=""
                        className="Btn_OuterBorder"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="Hero_left_right_button">
        <button className="Hero_left_button_btn lfbtn " onClick={pressOldImg}>
          <img src={Icon.Left_Arrow} alt="" className="SVGBTN" />
        </button>
        <button className="Hero_right_button_btn lfbtn" onClick={pressNewImg}>
          <img src={Icon.Right_Arrow} alt="" className="SVGBTN" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
