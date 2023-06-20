import React from "react";
import "./Developer.css";
import "./DeveloperMd.css";

const Developer = () => {
  const Year = new Date().getFullYear();
  return (
    <>
      <div className="Copyright_container">
        <div className="Copyright_First">Code by Suraj chhipa with ❤️</div>
        <div className="Copyright_Second">
          © Copyright {Year} - All Right Reserved
        </div>
        <div className="Copyright_Third">
          Guided By Abhay ji and Ajay ji with ❤️
        </div>
      </div>
    </>
  );
};

export default Developer;
