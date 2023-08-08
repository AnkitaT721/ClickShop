import { Rating } from "@mui/material";
import React from "react";
import profilePng from "../../images/rev4.png";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";

const ReviewCard = ({ review }) => {
  const { user, loading } = useSelector((state) => state.user);

  const options = {
    size: "small",
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="reviewCard">
          <img src={user ? user.avatar.url : profilePng} alt={user.name} />
          <p>{review.name}</p>
          <Rating {...options} />
          <span className="comment">{review.comment}</span>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
