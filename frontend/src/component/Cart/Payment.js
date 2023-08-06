import React, { useEffect, useRef } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Typography } from "@mui/material";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./Payment.css";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdVpnKey } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Payment = () => {

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const dispatch = useDispatch();
    const alert = useAlert();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const payBtn = useRef(null)

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);


    const paymentData = {
      amount: Math.round(orderInfo.totalPrice * 100), //rupees in paise
      
    }
    
    const submitHandler = async (e) => {
      e.preventDefault();

      payBtn.current.disabled = true;

      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };

        const { data } = await axios.post(
          "/api/v1/process/payment",
          paymentData,
          config
        );

        const client_secret = data.client_secret;

        if (!stripe || !elements) return;

        const result = await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: user.name,
              email: user.email,
              address: {
                line1: shippingInfo.address,
                city: shippingInfo.city,
                state: shippingInfo.state,
                postal_code: shippingInfo.pinCode,
                country: shippingInfo.country
              }
            }
          }
        });

        if (result.error) {
          payBtn.current.disabled = false;

          alert.error(result.error.message);
        } else {
          if (result.paymentIntent.status === "succeeded") {

            navigate("/success");
          } else {
            alert.error("There's some issue while processing the payment")
          }
        }



      } catch (error) {
        payBtn.current.disabled = false;
        alert.error(error.response.data.message);
      }

    };

  return (
    <>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <BsFillCreditCard2BackFill />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <BsCalendarEventFill />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <MdVpnKey />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
