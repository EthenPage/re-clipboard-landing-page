import React from "react";
import IMAGES from "../Assets/Images";

const Companies = () => {
  return (
    <>
      <img className="resize ex" src={IMAGES.google} alt="google" />
      <img className="resize ex" src={IMAGES.ibm} alt="ibm" />
      <img className="resize ex" src={IMAGES.microsoft} alt="microsoft" />
      <img className="resize ex" src={IMAGES.hp} alt="hp" />
      <img className="resize ex" src={IMAGES.vector} alt="vector" />
    </>
  );
};

export default Companies;
