import React from "react";
import "./BillRecharge.css";

const billServices = [
  { name: "Mobile", icon: "📱" },
  { name: "Electricity", icon: "💡" },
  { name: "DTH", icon: "📡" },
  { name: "Water", icon: "💧" },
  { name: "Gas", icon: "🛢️" },
  { name: "Insurance", icon: "☂️" },
];

const travelServices = [
  { name: "Flight", icon: "✈️", extra: "Powered by Easemytrip.com" },
  { name: "Bus", icon: "🚌", extra: "Affordable Rides" },
  { name: "Train", icon: "🚆" },
  { name: "Hotel", icon: "🏨", extra: "Budget-friendly Stay" },
  { name: "Car Rentals", icon: "🚗", extra: "Drive Easy Anywhere" },
];

const Services = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="left-content">
          <h2 className="section-title">Bills & Recharge</h2>
          <p className="description">Pay your bills & recharge instantly with Justdial</p>
        </div>
        <div className="icon-grid">
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

      
      <div className="section">
        <div className="left-content">
          <h2 className="section-title">Travel Bookings</h2>
          <p className="description">Instant ticket bookings for your best travel experience</p>
        </div>
        <div className="icon-grid">
          {travelServices.map((item, idx) => (
            <div key={idx} className="service-item">
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
  );
};

export default Services;
