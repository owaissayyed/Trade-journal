import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const username = loggedInUser;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#30ba9d" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand Logo/Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#000" }}>
          Trade Journal
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/home"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/services"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Services
          </Button>
          <Button
            component={Link}
            to="/tradejournal"
            sx={{
              color: "#000",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Trade Journal
          </Button>
        </Box>

        {/* User Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt="User"
            src="/path-to-default-pic.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="body2" sx={{ color: "#000", fontSize: "14px" }}>
            {username || "Guest"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
