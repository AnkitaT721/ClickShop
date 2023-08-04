import React, { useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import {Backdrop} from "@mui/material";
import profilePic from "../../../images/rev1.png";
import {BiSolidDashboard} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";
import {LuLogOut} from "react-icons/lu";
import {FaListAlt} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {GoHomeFill} from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/userAction";


const UserOptions = ({ user }) => {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const location = useLocation();

  const options = [
    { icon: <FaListAlt />, name: "Orders", func: orders },
    { icon: <BsFillPersonFill />, name: "Profile", func: account },
    { icon: <FaShoppingCart />, name: "Shopping Cart", func: cart },
    { icon: <LuLogOut />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
        icon: <BiSolidDashboard />,
        name: "Dashboard",
        func: dashboard
    });
  }

  if (location.pathname !== "/" ) {
    options.unshift({
      icon: <GoHomeFill />, 
      name: "Home", 
      func: home
    })
  }

  function dashboard() {
    navigate("/dashboard");
  }

  function home() {
    navigate("/");
  }

  function orders() {
    navigate("/orders");
  }

  function account() {
    navigate("/account");
  }

  function cart() {
    navigate("/cart")
  }

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  return (
    <>
    <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        style={{zIndex: "11"}}
        direction="down"
        className="speedDial"
        icon={
            <img
                className="speedDialIcon"
                src={user.avatar.url ? user.avatar.url : profilePic}
                alt="Profile"
            />
        }
      >
        {options.map((item) => (
            <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            />
        ))}

      </SpeedDial>
    </>
  );
};

export default UserOptions;
