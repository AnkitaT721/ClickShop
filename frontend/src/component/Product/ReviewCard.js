import { Rating } from "@mui/material";
import React from "react";
import profilePng from "../../images/user.png";

const ReviewCard = ({ review }) => {

  const options = {
    size: "small",
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    
        <div className="reviewCard">
          <img src={profilePng} alt="User" />
          <p>{review.name}</p>
          <Rating {...options} />
          <span className="comment">{review.comment}</span>
        </div>
  );
};

export default ReviewCard;
