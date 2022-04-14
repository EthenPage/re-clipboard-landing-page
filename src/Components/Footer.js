import React from "react";
import IMAGES from "../Assets/Images";
import { ReactComponent as Facebook } from "../Assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../Assets/images/icon-twitter.svg";
import { ReactComponent as Instagram } from "../Assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <img className="resize sm" src={IMAGES.logo} alt="logo" />

      <ul id="a" className="links">
        <li>
          <a href="#a">FAQs</a>
        </li>
        <li>
          <a href="#a">Contact Us</a>
        </li>
        <li>
          <a href="#a">Privacy Policy</a>
        </li>
        <li>
          <a href="#a">Press Kit</a>
        </li>
        <li>
          <a href="#a">Install Guide</a>
        </li>
      </ul>

      <div className="social">
          <ul>
              <li><a href="#"><Facebook /></a></li>
              <li><a href="#"><Twitter /></a></li>
              <li><a href="#"><Instagram /></a></li>
          </ul>
      </div>
    </>
  );
};

export default Footer;
