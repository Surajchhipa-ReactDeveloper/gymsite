import React, { useRef, useEffect, useState } from "react";
import "./Reviews.css";
import "./ReviewsMd.css";
import UserDataService from "./ReviewsData";
import { Images } from "../../Constant/imagePath";
import { Icon } from "../../Constant/iconPath";

const Reviews = () => {
  const [userReviews] = useState(UserDataService);
  const [indexReviews, setIndexReviews] = useState(0);
  useEffect(() => {});
  const RAf = useRef(null);
  const OldReview = () => {
    const width = RAf.current.clientWidth;
    RAf.current.scrollLeft = RAf.current.scrollLeft - width;
    setIndexReviews(indexReviews - 1);
    console.log("are you sure you want to Clicks the button");
  };

  const NewReview = () => {
    const width = RAf.current.clientWidth;
    RAf.current.scrollLeft = RAf.current.scrollLeft + width;
    setIndexReviews(indexReviews + 1);
  };
  return (
    <>
        <div className="User_Reviews_container">
          <div className="Reviews_left_side">
            <div className="Top_Reviews_fixed_block">
              <div className="Reviews_left_side_title_top All__container_common_title_top">
                TESTIMONIAL
              </div>
              <div className="Reviews_us_Title_AND_Orange_border">
                <div className="Reviews_Title Common_text_heading">
                  Reviews From You
                </div>
                <div className="Reviews_Border Common_text_border"></div>
              </div>
            </div>

            <div className="User_reviews_Update_block" ref={RAf}>
              {userReviews.map((reviews, indexReviews) => {
                const { id, WorkType, Name, StarRating, WorksReviews } =
                  reviews;
                return (
                  <div className="Reviews_box_main" id={id}>
                    <div className="Reviews_top_side">
                      <div className="User_Which_type_work">{WorkType}</div>
                      <div className="User_Works_Name">{Name}</div>
                      <div className="User_Work_StarRating">{StarRating}</div>
                    </div>
                    <div className="Reviews_bottom_side_Reviews">
                      <p>{WorksReviews}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Change_User_reviews">
              <button onClick={OldReview} className="Arrow_btn_review">
                <img src={Icon.Left_Arrow} alt="" />
              </button>
              <button onClick={NewReview} className="Arrow_btn_review">
                <img src={Icon.Right_Arrow} alt="" />
              </button>
            </div>
          </div>
          <div className="Reviews_Right_side">
            <img src={Images.Four_img} alt="" />
          </div>
        </div>
    </>
  );
};

export default Reviews;
