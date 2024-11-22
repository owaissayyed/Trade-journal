import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? "250px" : "80px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? "250px" : "80px",
          transition: "width 0.3s",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {/* Sidebar Content */}
        <Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {isOpen ? "Sidebar Content" : "Logo"}
          </Typography>
          {/* Add more sidebar items */}
        </Box>

        {/* Toggle Icon */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "-30px",
            transform: "translateY(-50%)",
            backgroundColor: "gray",
            borderRadius: "50%",
            zIndex: 2,
            border: "2px solid white",
          }}
        >
          <IconButton onClick={() => toggleSidebar(!isOpen)}>
            {isOpen ? (
              <ArrowBackIosIcon sx={{ color: "black" }} />
            ) : (
              <ArrowForwardIosIcon sx={{ color: "black" }} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
