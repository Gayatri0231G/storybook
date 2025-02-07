// // import React from "react";
// // import "./BillRecharge.css";

// // const services = [
// //   {
// //     title: "Bills & Recharge",
// //     description: "Pay your bills & recharge instantly with Justdial",
// //     items: [
// //       { name: "Mobile", icon: "📱" },
// //       { name: "Electricity", icon: "💡" },
// //       { name: "DTH", icon: "📡" },
// //       { name: "Water", icon: "💧" },
// //       { name: "Gas", icon: "🛢️" },
// //       { name: "Insurance", icon: "☂️" },
// //     ],
// //   },
// //   {
// //     title: "Travel Bookings",
// //     description: "Instant ticket bookings for your best travel experience",
// //     items: [
// //       { name: "Flight", icon: "✈️" },
// //       { name: "Bus", icon: "🚌" },
// //       { name: "Train", icon: "🚆" },
// //       { name: "Hotel", icon: "🏨" },
// //       { name: "Car Rentals", icon: "🚗" },
// //     ],
// //   },
// // ];

// // const BillRecharge = () => {
// //   return (
// //     <div className="container">
// //       {services.map((section, index) => (
// //         <div key={index} className="section">
// //           <h2>{section.title}</h2>
// //           <p>{section.description}</p>
// //           <div className="icon-grid">
// //             {section.items.map((item, idx) => (
// //               <div key={idx} className="icon-box">
// //                 <span className="icon">{item.icon}</span>
// //                 <p>{item.name}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default BillRecharge;
// import React from "react";
// import "./Services.css";

// const services = [
//   { name: "Mobile", icon: "📱" },
//   { name: "Electricity", icon: "💡" },
//   { name: "DTH", icon: "📡" },
//   { name: "Water", icon: "💧" },
//   { name: "Gas", icon: "🛢️" },
//   { name: "Insurance", icon: "☂️" },
//   { name: "Flight", icon: "✈️" },
//   { name: "Bus", icon: "🚌" },
//   { name: "Train", icon: "🚆" },
//   { name: "Hotel", icon: "🏨" },
//   { name: "Car Rentals", icon: "🚗" },
// ];

// const Services = () => {
//   return (
//     <div className="container">
//       <h2>Services</h2>
//       <p>Instant bill payments, recharges, and travel bookings at your fingertips</p>
//       <div className="icon-grid">
//         {services.map((item, idx) => (
//           <div key={idx} className="icon-box">
//             <span className="icon">{item.icon}</span>
//             <p>{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;
// import React from "react";
// import "./Services.css";

// const services = [
//   { name: "Mobile", icon: "📱" },
//   { name: "Electricity", icon: "💡" },
//   { name: "DTH", icon: "📡" },
//   { name: "Water", icon: "💧" },
//   { name: "Gas", icon: "🛢️" },
//   { name: "Insurance", icon: "☂️" },
//   { name: "Flight", icon: "✈️" },
//   { name: "Bus", icon: "🚌" },
//   { name: "Train", icon: "🚆" },
//   { name: "Hotel", icon: "🏨" },
//   { name: "Car Rentals", icon: "🚗" },
// ];

// const Services = () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="title">
//           <h2>Services</h2>
//           <p>Instant bill payments, recharges, and travel bookings at your fingertips</p>
//         </div>
//         <div className="icon-grid">
//           {services.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


// import React from "react";
// import "./BillRecharge.css";

// const billServices = [
//   { name: "Mobile", icon: "📱" },
//   { name: "Electricity", icon: "💡" },
//   { name: "DTH", icon: "📡" },
//   { name: "Water", icon: "💧" },
//   { name: "Gas", icon: "🛢️" },
//   { name: "Insurance", icon: "☂️" },
// ];

// const travelServices = [
//   { name: "Flight", icon: "✈️", extra: "Powered by Easemytrip.com" },
//   { name: "Bus", icon: "🚌", extra: "Affordable Rides" },
//   { name: "Train", icon: "🚆" },
//   { name: "Hotel", icon: "🏨", extra: "Budget-friendly Stay" },
//   { name: "Car Rentals", icon: "🚗", extra: "Drive Easy Anywhere" },
// ];

// const Services = () => {
//   return (
//     <div className="container">
//       <div className="left">
//         <h2>Bills & Recharge</h2>
//         <p>Pay your bills & recharge instantly with Justdial</p>
//         <h2>Travel Bookings</h2>
//         <p>Instant ticket bookings for your best travel experience</p>
//       </div>
//       <div className="right">
//         <div className="icon-grid">
//           {billServices.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//         <div className="icon-grid">
//           {travelServices.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p>{item.name}</p>
//               {item.extra && <small className="extra">{item.extra}</small>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
// import React from "react";
// import "./BillRecharge.css";

// const billServices = [
//   { name: "Mobile", icon: "📱" },
//   { name: "Electricity", icon: "💡" },
//   { name: "DTH", icon: "📡" },
//   { name: "Water", icon: "💧" },
//   { name: "Gas", icon: "🛢️" },
//   { name: "Insurance", icon: "☂️" },
// ];

// const travelServices = [
//   { name: "Flight", icon: "✈️", extra: "Powered by Easemytrip.com" },
//   { name: "Bus", icon: "🚌", extra: "Affordable Rides" },
//   { name: "Train", icon: "🚆" },
//   { name: "Hotel", icon: "🏨", extra: "Budget-friendly Stay" },
//   { name: "Car Rentals", icon: "🚗", extra: "Drive Easy Anywhere" },
// ];

// const Services = () => {
//   return (
//     <div className="container">
      
//       <div className="section">
//         <h2>Bills & Recharge</h2>
//         <p>Pay your bills & recharge instantly with Justdial</p>
//         <div className="icon-grid">
//           {billServices.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

    
//       <div className="section">
//         <h2>Travel Bookings</h2>
//         <div className="icon-grid">
//           {travelServices.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p>{item.name}</p>
//               {item.extra && <small className="extra">{item.extra}</small>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
// import React from "react";
// import "./BillRecharge.css";

// const billServices = [
//   { name: "Mobile", icon: "📱" },
//   { name: "Electricity", icon: "💡" },
//   { name: "DTH", icon: "📡" },
//   { name: "Water", icon: "💧" },
//   { name: "Gas", icon: "🛢️" },
//   { name: "Insurance", icon: "☂️" },
// ];

// const travelServices = [
//   { name: "Flight", icon: "✈️", extra: "Powered by Easemytrip.com" },
//   { name: "Bus", icon: "🚌", extra: "Affordable Rides" },
//   { name: "Train", icon: "🚆" },
//   { name: "Hotel", icon: "🏨", extra: "Budget-friendly Stay" },
//   { name: "Car Rentals", icon: "🚗", extra: "Drive Easy Anywhere" },
// ];

// const Services = () => {
//   return (
//     <div className="container">
    
//       <div className="section">
//         <div className="text-content">
//           <h2 className="section-title">Bills & Recharge</h2>
//           <p className="description">Pay your bills & recharge instantly with Justdial</p>
//         </div>
//         <div className="icon-grid">
//           {billServices.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p className="icon-text">{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

      
//       <div className="section">
//         <div className="text-content">
//           <h2 className="section-title">Travel Bookings</h2>
//           <p className="description">Instant ticket bookings for your best travel experience</p>
//         </div>
//         <div className="icon-grid">
//           {travelServices.map((item, idx) => (
//             <div key={idx} className="icon-box">
//               <span className="icon">{item.icon}</span>
//               <p className="icon-text">{item.name}</p>
//               {item.extra && <small className="extra">{item.extra}</small>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
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
