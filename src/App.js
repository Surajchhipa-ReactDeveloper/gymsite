import React, { useEffect, useState } from "react";
import "./App.css";
import "./AppMd.css";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Hero/Slider";
import HeroCategory1 from "./Components/HeroSecation/HeroCatgary1";
import HeroCategory2 from "./Components/HeroSecation/HeroCatgary2";
import HeroCategory3 from "./Components/HeroSecation/HeroCatgary3";
import About from "./Components/AboutUs/About";
import Choose from "./Components/ChooseUs/Choose";
import HashLoader from "react-spinners/HashLoader";
import RedBar from "./Components/RedTiTleBar/RedBar";
import Reviews from "./Components/UserReviews/Reviews";
import FourIcon from "./Components/FourIcon/FourIcon";
import { Icon } from "./Constant/iconPath";
import SingleVideo from "./Components/SingleVideos/SingleVideo";
import VideoSlider from "./Components/AllVideos/VideoSlider";
import ProteanBox from "./Components/ProtinBox/ProtinBox";
import SmallProtean from "./Components/SmallProteanBox/SmallProtean";
import Blogs from "./Components/Blogs/Blogs";
import Form from "./Components/Deatils/Form";
import FOOTER from "./Components/Footer/Footer";
import Developer from "./Components/Copyright/Developer";
import { Images } from "./Constant/imagePath";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5);
  }, []);
  return (
    <>
      <div className="Gym_webSite_page  ">
        {loading ? (
          <div className="loader">
            <HashLoader
              color={"#e41c26"}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="all_app_data ">
            <div className="Gym_webSite_Navbar">
              <Navbar />
            </div>
            <div className="Gym_webSite_Slider" id="Home">
              <Slider />
            </div>
            <div className="Gym_webSite_Category">
              <div className="cat1">
                <HeroCategory1 />
              </div>
              <div className="cat2">
                <HeroCategory2 />
              </div>
              <div className="cat3">
                <HeroCategory3 />
              </div>
            </div>
            <div className="Gym_webSite_About_US" id="about">
              <About />
            </div>
            <div className="Gym_webSite_Choose_Us">
              <Choose />
            </div>
            <div className="Gym_webSite_Red_TitleHere">
              <RedBar />
            </div>
            <div className="Gym_webSite_Reviews">
              <Reviews />
            </div>
            <div className="Gym_webSite_Four_Icon">
              <div className="Four_Icon1">
                <FourIcon
                  IMG={Icon.Body_logo}
                  Digits={"143"}
                  About={"lorem word"}
                />
              </div>
              <div className="Four_Icon2">
                <FourIcon
                  IMG={Icon.Bike_logo}
                  Digits={"654"}
                  About={"lorem word"}
                />
              </div>
              <div className="Four_Icon3">
                <FourIcon
                  IMG={Icon.Medican_logo}
                  Digits={"246"}
                  About={"lorem word"}
                />
              </div>
              <div className="Four_Icon4">
                <FourIcon
                  IMG={Icon.Inhandthumbal_logo}
                  Digits={"545"}
                  About={"lorem word"}
                />
              </div>
            </div>
            <div className="Gym_webSite_SingleVideo">
              <SingleVideo />
            </div>
            <div className="Gym_webSite_VideoSlider">
              <VideoSlider />
            </div>
            <div className="Gym_webSite_ProteanBox">
              <ProteanBox />
            </div>
            <Pulse>
              <div className="Gym_webSite_Vertical_Line">PROTEIN</div>
            </Pulse>
            <div className="box_line">
              <Fade Bottom>
                <div className="center">
                  <div className="Orange_outer">
                    <img
                      src={Images.Text_outerBorder}
                      alt=""
                      className="Protein_Outer_orange_border "
                    />
                    <div className="Small_protein ">
                      <img
                        src={Images.ProtinSmall}
                        alt=""
                        className="Small_protein_img"
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="Gym_webSite_SmallProteanBox" id="SHOP">
              <SmallProtean />
            </div>
            <div className="Gym_webSite_Our_Blogs">
              <Blogs />
            </div>
            <div className="Gym_webSite_User_Adders" id="CONTACT">
              <Form />
            </div>
            <div className="Gym_webSite_Footer">
              <FOOTER />
            </div>
            <div className="Gym_webSite_Copyright">
              <Developer />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default App;
