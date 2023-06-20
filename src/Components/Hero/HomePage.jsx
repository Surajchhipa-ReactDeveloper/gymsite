import React, { useState } from "react";
import "./HomePage.css";
import HeroData from "./HeroData";

const HomePage = () => {
  const [currantPage, setCurrentPage] = useState();
  const BackGround = {
    BackGroundImg: `url(${HeroData[currantPage].imgSrc})`,
    BackGroundPosition: "center",
    BackGroundSize: "cover",
    height: "100%",
  };
  return (
    <>
      <div className="home_page">
        <h1>hello world</h1>
        <div className="Backgroung_img" style={BackGround}></div>
      </div>
    </>
  );
};

export default HomePage;
