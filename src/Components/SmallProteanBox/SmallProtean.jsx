import React, { useState } from "react";
import "./SmallProtean.css";
import "./SmallProteanMd.css";
import { Images } from "../../Constant/imagePath";
import Primary from "../../Comman/PrimaryBtn/Primary";
import Secondary from "../../Comman/Button/SecondaryBtn/Secondary";
const data = [
  {
    id: 1,
    price: 2.27,
  },
  {
    id: 2,
    price: 4.54,
  },
  {
    id: 3,
    price: 7.05,
  },
];

const SmallProtean = () => {
  const [price, setPrice] = useState(15);
  const [isActive, setIsActive] = useState(0);

  const ChangeKGForOne = (Price, index) => {
    debugger;
    switch (Price) {
      case 2.27:
        setPrice(15);
        setIsActive(index);
        break;
      case 4.54:
        setPrice(50);
        setIsActive(index);
        break;
      case 7.05:
        setPrice(90);
        setIsActive(index);
        break;
      default:
        break;
    }
  };

  return (
    <>
        <div className="Whey_ProTein_container shop" id="shop">
          <div className="Vertical_text_Protein Common_Vertical_line">
            PROTEIN
          </div>
          <div className="Protein_Small_box_with_Orange_outer_border ">
            <div className="Orange_outer_border">
              <img
                src={Images.Text_outerBorder}
                alt=""
                className="Protein_Outer_orange_border "
              />
              <div className="Small_protein_box ">
                <img
                  src={Images.ProtinSmall}
                  alt=""
                  className="Small_protein_box_image"
                />
              </div>
            </div>
          </div>
          <div className="Whey_protein_text ">
            <div className="Protein_us_Heading All__container_common_title_top">
              BEST SELLING PRODUCT
            </div>
            <div className="Protein_Title_AND_Orange_border">
              <div className="Protein_Title Common_text_heading">
                WHEY PRODUCT
              </div>
              <div className="Protein_Border Common_text_border"></div>
            </div>
            <div className="Protein_us_description Common_Description_for_all_container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </div>
            <div className="Protein_wait_button">
              {data.map((item, index) => {
                return (
                  <>
                    <div
                      className="Protain_KG_1_btn Active1"
                      onClick={() => ChangeKGForOne(item.price, index)}
                      style={{
                        backgroundColor: isActive === index ? "black" : "",
                        color: isActive === index ? "white" :"",
                      }}
                      key={index + item.id}
                    >
                      {item.price}
                      {"KG"}
                    </div>
                  </>
                );
              })}
            </div>
            <div className="Protain_box_Price">${price}</div>
            <div className="Add_cart_ADD_Wist_Button">
              <div className="Cart_button1">
                <Primary HowText="ADD TO CART" />
              </div>
              <div className="Cart_button2">
                <Secondary BtnText="ADD WISHLIST" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default SmallProtean;
