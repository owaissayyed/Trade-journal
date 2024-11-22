import React from "react";
import Navbar from "../component/navbar";

const Services = () => {
  const services = [
    {
      title: "Backtesting",
      description: "Simulate your trading strategies using historical data to identify performance trends.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF-emIZjbVyobo49QMqzF43wtikveAQ8E8A&s", // Replace with your image URL
    },
    {
      title: "Trade Journal",
      description: "Log and analyze your trades to improve decision-making and refine your strategies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwx63rBn21bB4Rv2tk2yZkOxL8Pobzksqqg&s",
    },
    {
      title: "Risk Management",
      description: "Evaluate and manage risk with tools for position sizing and stop-loss planning.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNToL_j9QcWd1y1RVJ_jfbR_F43eL0WgcYQ&s",
    },
    {
      title: "Performance Analytics",
      description: "Track key metrics like win rate, drawdown, and profit factor for detailed performance insights.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqYgriwbENZPddMIWwbunGhwzPJWDdeeHCg&s",
    },
    {
      title: "Market Alerts",
      description: "Set up alerts for specific price levels or technical indicators to stay informed.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGwrqOzKctOcZS_oTO5AjRXSNA0oOVtNNQw&s",
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1 className="text[20px]">Our Services</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
              />
              <h2 style={{ margin: "10px 0" }}>{service.title}</h2>
              <p style={{ margin: "0" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
