import React, { useState } from "react";
import "./Blogs.css";
import "./BlogsMd.css";
import OurBlogsData from "./BlogsData";
import { Icon } from "../../Constant/iconPath";
import BackText from "../../Comman/BackHeading/BackText";
import Secondary from "../../Comman/Button/SecondaryBtn/Secondary";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Blogs = () => {
  const [BlogsMore] = useState(OurBlogsData);
  const [VideoSlide, setVideoSlide] = useState(3);
  const Splice = OurBlogsData.slice(0, VideoSlide);

  const MoreData = () => {
    setVideoSlide(VideoSlide + VideoSlide);
  };
  return (
    <>
      <Fade bottom>
        <div className="Our_blogs_Container">
          <div className="Blogs_Container_Main">
            <div className="OurBlog_Top_container Common_container_with_back_text">
              <div className="OurBlog_Heading_And_border_BackText  Common_border_BackText">
                <div className="back_text">
                  <BackText BackText="BLOG" />
                </div>
                <div className="OurBlog_Heading_And_border Common_Head_Border">
                  <div className="OurBlog_heading Common_On_text_heading">
                    OUR LATEST BLOG
                  </div>
                  <div className="OurBlog_Border Common_OnTextBorder"></div>
                </div>
              </div>
              <div className="OurBlog_caption_container Common_Bottom_Text_Desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                laborum, voluptates,or sit amet consectetur adipisicing elit.
                Porro laborum, voluptates, esse nihil incidunt inventore error.
              </div>
            </div>
            <div className="Read_more_Blogs_Container">
              <div className="Blogs_swap_main">
                {Splice.map((Blog, index) => {
                  const {
                    id,
                    BackImg,
                    DATE,
                    Month,
                    Comments,
                    TitleImg,
                    BlogDec,
                  } = Blog;
                  return (
                    <div className="Blog_Main_Data" id={id} key={index}>
                      <Fade bottom>
                        <div className="Blog_Main_Data_Img">
                          <div className="Blog_img">
                            <img
                              src={BackImg}
                              alt=""
                              className="Blog_back_img"
                            />
                          </div>
                          <div className="Blogs_data">
                            {DATE} <br />
                            {Month}
                          </div>
                        </div>
                        <div className="Blog_Admin_date_Comments">
                          <div className="Blog_Admin">
                            <div className="Blog_logo_div">
                              <img
                                src={Icon.Admin_logo}
                                alt=""
                                className="Blog_Logo"
                              />
                            </div>
                            <div className="Blog_LOGO_TEXT_DIV"> ADMIN</div>
                          </div>
                          <div className="Blog_Date">
                            <div className="Blog_logo_div">
                              <img
                                src={Icon.Calender_logo}
                                alt=""
                                className="Blog_Logo"
                              />
                            </div>
                            <div className="Blog_LOGO_TEXT_DIV">
                              {DATE}
                              {Month}
                            </div>
                          </div>
                          <div className="Blog_Comments">
                            <div className="Blog_logo_div">
                              <img
                                src={Icon.Massage_logo}
                                alt=""
                                className="Blog_Logo"
                              />
                            </div>
                            <div className="Blog_LOGO_TEXT_DIV">
                              {" "}
                              {Comments}
                            </div>
                          </div>
                        </div>
                        <div className="BlogImg_TiTle">{TitleImg}</div>
                        <div className="BlogImg_Des">{BlogDec}</div>
                        <div className="Read_More_Btn">
                          <Secondary BtnText="READ MORE" />
                        </div>
                      </Fade>
                    </div>
                  );
                })}
              </div>
            </div>
            {Splice.length === 9 ? null : (
              <div className="More_Button">
                <button className="ViewMore" onClick={MoreData}>
                  VIEW MORE
                </button>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Blogs;
