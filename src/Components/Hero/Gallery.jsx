import React, { useRef, useEffect } from "react";
import "./Gallery.css";
import GCard from "./GCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const ref = useRef(null);

  const Left_button = () => {
    const width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft - width;
  };

  const Right_button = () => {
    const width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width;
  };

  return (
    <div className="Gallery-container Gallery" data-aos="fade-in">
      <div className="Gallery-heading-pera-container">
        <div className="Gallery-heading-container">
          <h1>Gallery Photos</h1>
        </div>
        <div className="Gallery-pera-container">
          <p>Explore the most beautiful places in the world.</p>
        </div>
      </div>

      <div className="Gallery-slider-container" data-aos="fade-up">
        <div className="left-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="80"
            viewBox="0 0 40 80"
            className="left-arroww"
            onClick={Left_button}
          >
            <path
              id="Path_11"
              data-name="Path 11"
              d="M0,0V80A40,40,0,0,0,40,40,40,40,0,0,0,0,0Z"
              fill="
                    #fff"
            />
            <path
              id="Path_12"
              data-name="Path 12"
              d="M20.5,11.5l-6,6-6-6"
              transform="translate(30.5 26) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        </div>

        <div className="Gallery-slider-items-container" ref={ref}>
          <GCard img="/Assets/GCard-1.jpg" />
          <GCard img="/Assets/GCard-2.jpg" />
          <GCard img="/Assets/GCard-3.jpg" />
          <GCard img="/Assets/GCard-4.jpg" />
          <GCard img="/Assets/GCard-5.jpg" />
          <GCard img="/Assets/GCard-1.jpg" />
          <GCard img="/Assets/GCard-2.jpg" />
          <GCard img="/Assets/GCard-3.jpg" />
          <GCard img="/Assets/GCard-4.jpg" />
          <GCard img="/Assets/GCard-5.jpg" />
          <GCard img="/Assets/GCard-1.jpg" />
          <GCard img="/Assets/GCard-2.jpg" />
        </div>
        <div className="right-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="80"
            viewBox="0 0 40 80"
            className="right-arroww"
            onClick={Right_button}
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M40,0V80A40,40,0,0,1,40,0Z"
              fill="#fff"
              className="blur"
            />
            <path
              id="Path_13"
              data-name="Path 13"
              d="M12,6,6,0,0,6"
              transform="translate(27 34.5) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
