import React from "react";

import Card from "@/components/card";
import Sidebar from "@/Layout/DefaultLayout";
import { Box, IconButton, Typography } from "@mui/material";
// import Image from "next/image"; // Uncomment if you use the arrow icon image


const Dashboard = () => {
  console.log("change dashboard");

  return (
    <>

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
