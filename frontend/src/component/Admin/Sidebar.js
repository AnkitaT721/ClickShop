import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@mui/lab";
import { MdExpandMore } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdImportExport } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="ClickShop" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <BiSolidDashboard /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<MdExpandMore />}
          defaultExpandIcon={<MdImportExport />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2" label="All" icon={<MdOutlinePostAdd />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<MdAdd />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/admin/orders">
        <p>
            <FaListAlt /> Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <BsPeopleFill /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <MdRateReview /> Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
