import React, { useEffect, useState } from "react";
import "./Hero.css";
import BtnPrimary from "../../Comman/Button/Button";
import { Images } from "../../Constant/imagePath";
import HeroData from "./HeroData";

const Hero = () => {
  const [heroPages] = useState(HeroData);
  const [indexImage, setIndexImage] = useState(0);

  const pressOldImg = () => {
    setIndexImage(indexImage - 1);
    console.log("clicked");
  };
  const pressNewImg = () => {
    setIndexImage(indexImage + 1);
  };
  useEffect(() => {
    const lastIndex = heroPages.length - 1;
    if (indexImage < 0) {
      setIndexImage(lastIndex);
    }
    if (indexImage > lastIndex) {
      setIndexImage(0);
    }
  }, [indexImage, heroPages]);

  useEffect(() => {
    let MoveImg = setInterval(() => {
      setIndexImage(indexImage + 1);
    }, 6000);
    return () => {
      clearInterval(MoveImg);
    };
  }, [indexImage]);

  return (
    <>
      <div className="hero_silder_home_page">
        {heroPages.map((item, indexSlider) => {
          const { id, imgSrc, TagLine, TitleLine, DisLine } = item;
          let position = "nextslide";
          if (indexSlider === indexImage) {
            position = "currentslide";
          }
          if (
            indexSlider === indexImage - 1 ||
            (indexImage === 0 && indexSlider === heroPages.length - 1)
          ) {
            position = "lastslide";
          }
          return (
            <div className="hero_display">
              <div className={`Hero_section ${position}`} key={id}>
                <div className="Hero_img">
                  <img
                    // src={Images.Hero_Back_top}
                    src={imgSrc}
                    alt="Loading image..."
                    className="hero_background_img"
                  />
                </div>

                <div className="Text_outer_border"></div>
                <div className="Hero_content">
                  <h5 className="Hero_tagline"> {TagLine}</h5>
                  <h1 className="Hero_title">{TitleLine}</h1>
                  <p className="Hero_dis">{DisLine}</p>
                  <BtnPrimary />
                </div>
              </div>
            </div>
          );
        })}
        <div className="Hero_left_right_button">
          <button className="Hero_left_button_btn lfbtn " onClick={pressOldImg}>
            <p className="Hero_left_button"> &lt;</p>
          </button>
          <button className="Hero_right_button_btn lfbtn" onClick={pressNewImg}>
            <p className="Hero_right_button"> &gt;</p>
          </button>
        </div>
      </div>
    </>
  );
};
export default Hero;

{
  /* <div className="Hero_section" key={id}>
            <div className="Hero_background_img_div green">
              <img src={imgSrc} alt="" className="hero_background_img blue" />
              <div className="Hero_left_right_button">
                <button className="Hero_left_button_btn lfbtn ">
                  <p className="Hero_left_button"> &lt;</p>
                </button>
                <button className="Hero_right_button_btn lfbtn">
                  <p className="Hero_right_button"> &gt;</p>
                </button>
              </div>
              <div className="Text_outer_border"></div>
              <div className="Hero_upper_text_on_img ">
                <h4 className="TagLineTop">{TagLine}</h4>
                <br />
                <h1 className="TItle_On_image">{TitleLine}</h1>
                <br />
                <h1 className="Description_On_image">{DisLine}</h1>
                <br />
                <div className="Hero_join_btn ">
                  <BtnPrimary />
                </div>
              </div>
            </div>s
      </div> 
    */
}
