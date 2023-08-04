import React from "react";
import playStore from "../../../images/playstore1.png";
import appStore from "../../../images/appstore1.png";
import logo from "../../../images/justlogo.png";
import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img className="play" src={playStore} alt="playstore" />
        <img className="app" src={appStore} alt="appstore" />
      </div>

      <div className="midFooter">
        <img src={logo} alt="logo" />
        <h1>Click Shop</h1>
        <p>From One Click to Your Doorstep</p>

        <p style={{ fontSize: 'smaller' }} >Copyrights 2023 &copy;Ankita Talukdar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://github.com/AnkitaT721" target="_blank">
          <FaGithub /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ankita-talukdar-3569a5280/"
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100011821989387"
          target="_blank"
        >
          <FaFacebook /> Facebook
        </a>
        <a href="https://www.instagram.com/_.ankita_t._/" target="_blank">
          <FaInstagram /> Instagram
        </a>

        <a href="tel:+1234567890">
        <BiSolidPhoneCall /> +1234567890
        </a>

      </div>
    </footer>
  );
};

export default Footer;
