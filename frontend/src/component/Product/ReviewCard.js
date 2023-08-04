import React from "react";
import ReactStars from "react-rating-stars-component";
import profilePng from "../../images/rev4.png";

const ReviewCard = ({ review }) => {

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 768 ? 17 : 22,
    value: review.rating,
    isHalf: true,
  };

  return (
  <div className="reviewCard">
    <img src={profilePng} alt="User" />
    <p>{review.name}</p>
    <ReactStars {...options} />
    <span className="comment">{review.comment}</span>
  </div>
  )
};

export default ReviewCard;
