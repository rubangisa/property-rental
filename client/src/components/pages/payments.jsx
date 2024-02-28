import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import "../../../styling/payments.css";

export default function Payments() {
  return (
    <div className="payment">
      <h1>Payments</h1>
      <div className="payment-grid">
        <div className="summary-flex">
          <div className="container-bookingdetails">
            <h3>Booking Details</h3>
            <div className="bookingdetails">
             {/* const getBookingDetails = async () =>{
              await fetch("http://localhost:5000/bookingdetails")
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                })} */}
                </div>
          </div>
          <div className="container-pricesummary"></div>
        </div>
        <div className="paymentwrapper">
          <form>
            <div className="container1">
              <div className="left-column">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number..."
                />
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  placeholder="Expiry date..."
                />
                <label htmlFor="cvv">CVV</label>
                <input type="number" name="cvv" placeholder="CVV..." />
              </div>
              <div className="right-column">
                <label htmlFor="cardHolder">Card Holder</label>
                <input
                  type="text"
                  name="cardHolder"
                  placeholder="Card holder..."
                />
                <label htmlFor="cardType">Card Type</label>
                <input type="text" name="cardType" placeholder="Card type..." />
              </div>
            </div>
            <div className="container2">
              <div className="containerP">
                <p>
                  <IoIosCheckbox /> agree to the myhome's terms and conditions
                  and myhome's privacy policy
                </p>
                <p>
                  <MdCheckBoxOutlineBlank /> Sign up to receive myhome
                  newsletters, offer and promotional material
                </p>
              </div>
              <div className="containerButton">
                <button type="submit" className="submitButton">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
