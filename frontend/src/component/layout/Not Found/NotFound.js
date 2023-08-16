import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import {BiMessageError} from "react-icons/bi"

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <BiMessageError />

      <Typography>Page Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;