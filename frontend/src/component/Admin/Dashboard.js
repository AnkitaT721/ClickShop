import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { useDispatch, useSelector } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
ChartJS.register(...registerables);

const Dashboard = () => {

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

    let outOfStock = 0;

    products && products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

    let inStock = products.length - outOfStock;

    useEffect(() => {
      dispatch(getAdminProduct());
  }, [dispatch]);

    const lineState = {
        labels: ["Initial Amount", "Total Amount"],
        datasets: [
            {
                label: "TOTAL AMOUNT",
                backgroundColor: ["tomato"],
                hoverBackgroundColor: ["rgb(197, 72, 49)"],
                data: [0, 4000]
            }
        ]
    };

    const doughnutState = {
        labels: ["Out of Stock", "In Stock"],
        datasets: [
            {
                backgroundColor: ["#00A6B4", "#6800B4"],
                hoverBackgroundColor: ["#4B5000", "#35014F"],
                data: [outOfStock, inStock]
            }
        ]
    };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹5000
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>2</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>5</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
