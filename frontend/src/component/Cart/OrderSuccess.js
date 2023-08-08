import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./OrderSuccess.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

const OrderSuccess = () => {

    const { user } = useSelector((state) => state.user)
  return (
    <>
    <MetaData>Order Success</MetaData>
    <div className="orderSuccess">
      <BsCheck2Circle />

      <Typography>{user.name}, Your Order has been Placed Successfully!</Typography>
      <Link to="/orders">View Orders</Link>
    </div>
    </>
  );
};

export default OrderSuccess;
