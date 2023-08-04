import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.png";

import { MdAccountCircle } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const options = {
  burgerColorHover: "#ffc8dc",
  logo,
  logoWidth: "20vmax",
  navColor1: "#FFFAFB",
  logoHoverSize: "10px",
  logoHoverColor: "#ffc8dc",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#ffc8dc",
  link1Margin: "1vmax",

  profileIcon: true,
  //   profileIconColor: "rgba(35, 35, 35,0.8)",
  ProfileIconElement: MdAccountCircle,
  searchIcon: true,
  //   searchIconColor: "rgba(35, 35, 35,0.8)",
  SearchIconElement: FiSearch,
  cartIcon: true,
  //   cartIconColor: "rgba(35, 35, 35,0.8)",
  CartIconElement: FaShoppingCart,
  
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#ffc8dc",
  searchIconColorHover: "#ffc8dc",
  cartIconColorHover: "#ffc8dc",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
