import React from "react";
import "./AboutSection.css";
import { Avatar, Button, Typography } from "@mui/material";
// import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/_.ankita_t._/";
  };
  return (
    <>
    <MetaData title="About Us" />
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/daoqage0i/image/upload/v1692226398/samples/ankita_bnbqyy.jpg"
              alt="Founder"
            />
            <Typography>Ankita Talukdar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Welcome to ClickShop! Crafted by Ankita Talikdar, your go-to
              online emporium. Immerse in a world of fashion, electronics,
              decor, and more. Elevate your shopping today!
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Links</Typography>
            <a href="https://github.com/AnkitaT721" target="blank">
              <BsGithub className="icon" />
            </a>

            <a href="https://www.linkedin.com/in/ankita-talukdar-3569a5280/" target="blank">
              <BsLinkedin className="icon" />
            </a>

            <a href="https://www.instagram.com/_.ankita_t._/" target="blank">
              <BsInstagram className="icon" />
            </a>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
