import React from "react";
import "./Contact.css";
import { Button } from "@mui/material";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <>
    <MetaData title="Contact Us" />
      <div className="contactContainer">
        <div className="contact_info_item ">
          <BiSolidPhoneCall className="iconContact"/>
          <div className="contact_info_content">
            <div className="contact_info_title">Phone</div>
            <div className="contact_info_text">+91 1111 523 523</div>
          </div>
        </div>

        <div className="contact_info_item ">
          <MdEmail className="iconContact"/>
          <div className="contact_info_content">
            <div className="contact_info_title">Email</div>
            <div className="contact_info_text">talukdarankita721@gmail.com</div>
          </div>
        </div>

        <div className="contact_info_item ">
          <FaMapMarkedAlt className="iconContact"/>
          <div className="contact_info_content">
            <div className="contact_info_title">Address</div>
            <div className="contact_info_text">Jalpaiguri, West Bengal</div>
          </div>
        </div>
      </div>

      <div className="emailContainer">
        <a className="mailBtn" href="mailto:talukdarankita721@gmail.com">
          <Button>
            Contact <span>: talukdarankita721@gmail.com</span>
          </Button>
        </a>
      </div>
    </>
  );
};

export default Contact;
