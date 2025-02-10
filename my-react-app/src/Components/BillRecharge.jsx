import React from "react";
import { FaMobileAlt, FaLightbulb, FaSatelliteDish, FaTint, FaGasPump, FaUmbrella } from "react-icons/fa";
import { FaPlane, FaBus, FaTrain, FaHotel, FaCar } from "react-icons/fa6";
import "./BillRecharge.css";


const billServices = [
  { name: "Mobile", icon: <FaMobileAlt style={{ color: "#ff6600" }} /> }, 
  { name: "Electricity", icon: <FaLightbulb style={{ color: "#ffd700" }} /> }, 
  { name: "DTH", icon: <FaSatelliteDish style={{ color: "#800080" }} /> }, 
  { name: "Water", icon: <FaTint style={{ color: "#0088ff" }} /> }, 
  { name: "Gas", icon: <FaGasPump style={{ color: "#ff4500" }} /> }, 
  { name: "Insurance", icon: <FaUmbrella style={{ color: "#006400" }} /> }, 
];

const travelServices = [
  { 
    name: "Flight", 
    icon: <FaPlane style={{ color: "#ff0000" }} />, 
    extra: <>Powered by <br /> Easemytrip.com</> 
  },
  { name: "Bus", icon: <FaBus style={{ color: "#228b22" }} />, extra: "Affordable Rides" }, 
  { name: "Train", icon: <FaTrain style={{ color: "#8b4513" }} /> }, 
  { name: "Hotel", icon: <FaHotel style={{ color: "#4b0082" }} />, extra: "Budget-friendly Stay" }, 
  { name: "Car Rentals", icon: <FaCar style={{ color: "#4682b4" }} />, extra: "Drive Easy Anywhere" }, 
];

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="section">
          <div className="left-content">
          <div className="bills-container">
            <h2 className="section-title">Bills & Recharge</h2>
            <div className="brand">
              <span className="bharat">Bharat</span>
              <span className="connect">Connect</span>
            </div>
          </div>
            <p className="description">Pay your bills & recharge instantly with Justdial</p>
            <h5>Explore More</h5>
          </div>
          <div className="icon-grid1">
            {billServices.map((item, idx) => (
              <div key={idx} className="service-item">
                <div className="icon-box">
                  <span className="icon">{item.icon}</span>
                </div>
                <p className="icon-text">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="divider"></div>

        <div className="section">
          <div className="left-content">
            <h2 className="section-title">Travel Bookings</h2>
            <p className="description">Instant ticket bookings for your best travel experience</p>
            <h5>Explore More</h5>
          </div>
          <div className="icon-grid">
            {travelServices.map((item, idx) => (
              <div key={idx} className="service-item1">
                <div className="icon-box">
                  <span className="icon">{item.icon}</span>
                </div>
                <p className="icon-text">{item.name}</p>
                {item.extra && <small className="extra">{item.extra}</small>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
