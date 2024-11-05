import React from "react";
import Card from "@/components/card";
import Sidebar from "@/Layout/DefaultLayout";
import { Box, IconButton, Typography } from "@mui/material";
// import Image from "next/image"; // Uncomment if you use the arrow icon image

const Dashboard = () => {
  console.log("change dashboard");

  return (
    <>
      {/* Title Bar */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "7%",
          position: "fixed",
          top: 0,
          zIndex: 999,
          padding: "2%",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        {/* <IconButton sx={{ display: "flex", alignItems: "center", gap: "10px" }}> */}
          {/* Uncomment if you want to include an arrow icon */}
          {/* <Image
            src={arrow}
            alt="arrow"
            style={{ width: "14px", height: "16px", marginLeft: "10px" }}
          /> */}
        {/* </IconButton> */}
        <Typography className="left-0 text-[#008069] font-semibold text-[20px]">
          Dashboard
        </Typography>
      </Box>

      {/* Page Content */}
      <Box sx={{ pt: "7%", backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
        <h1>hello</h1>
      </Box>
    </>
  );
};

export default Dashboard;
