import React from "react";
import "./HeroCatgary.css";
import "./HeroCatgaryMd.css";
import { Icon } from "../../Constant/iconPath";
const HeroCategory2 = () => {
  return (
    <>
        <div className="Hero_category2">
          <div className="Category2 Category_Common">
            <div className="Category_img">
              <img src={Icon.ManWorkOut} alt="" />
            </div>
            <div className="Category_Type2 Category_type_Common">
              PROGRESSION
            </div>
            <div className="Category_text2 Category_text_common">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur sint commodi minus, saepe aut ipsa quasi neque e
              dolores temporibus. Doloremque.
            </div>
          </div>
          <div className="Background_img2 Background_img_Common ">
            <img src={Icon.ManWorkOut} alt="" />
          </div>
        </div>
    </>
  );
};

export default HeroCategory2;
