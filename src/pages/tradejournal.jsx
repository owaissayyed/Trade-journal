import React, { useState } from "react";
import { Input, Button, Textarea, Typography } from "@material-tailwind/react";
import { handleSuccess, handleError } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import Navbar from "../component/navbar";

export default function AddTradeJournal() {
  const [tradeData, setTradeData] = useState({
    title: "",
    date: "",
    entryPrice: "",
    exitPrice: "",
    profitLoss: "",
    notes: "",
  });

  const handleChange = (e) => {
    setTradeData({ ...tradeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/trades", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(tradeData),
      });

      if (response.ok) {
        handleSuccess("Trade added successfully!");
        setTradeData({
          title: "",
          date: "",
          entryPrice: "",
          exitPrice: "",
          profitLoss: "",
          notes: "",
        });
      } else {
        const errorData = await response.json();
        handleError(errorData.message || "Failed to add trade.");
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-xl space-y-6">
          <Typography variant="h4" className="text-center font-bold text-gray-800">
            Add Trade Journal Entry
          </Typography>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Title"
                name="title"
                value={tradeData.title}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                label="Date"
                name="date"
                type="date"
                value={tradeData.date}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Entry Price"
                name="entryPrice"
                type="number"
                value={tradeData.entryPrice}
                onChange={handleChange}
                required
                className="w-full"
              />
              <Input
                label="Exit Price"
                name="exitPrice"
                type="number"
                value={tradeData.exitPrice}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Profit/Loss"
                name="profitLoss"
                type="number"
                value={tradeData.profitLoss}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <Textarea
              label="Notes"
              name="notes"
              value={tradeData.notes}
              onChange={handleChange}
              required
              className="w-full"
              rows={4}
            />

            <Button
              type="submit"
              color= "black"
              fullWidth
              className="mt-4 text-lg font-semibold py-3"
            >
              Add Trade
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
