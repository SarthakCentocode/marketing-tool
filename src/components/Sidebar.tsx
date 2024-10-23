// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FiMenu, FiChevronLeft } from "react-icons/fi";
// import Image from "next/image";
// import home from "@/public/home.svg";
// import template from "@/public/template.svg";
// import task from "@/public/task.svg";
// import calender from "@/public/calender.svg";
// import team from "@/public/team.svg";
// import message from "@/public/message.svg";
// import file from "@/public/file.svg";
// import report from "@/public/report.svg";
// import help from "@/public/help.svg";

// type SidebarProps = {
//   children: React.ReactNode;
// };

// const navigation = [
//   { headline: "Home", name: "dashboard", route: "/dashboard", icon: home },
//   {
//     headline: "Templates",
//     name: "Template Library",
//     route: "/templates",
//     icon: template,
//   },
//   { headline: "Tasks", name: "Tasks", route: "/tasks", icon: task },
//   {
//     headline: "Calendar",
//     name: "Calendar",
//     route: "/calendar",
//     icon: calender,
//   },
//   { headline: "Team", name: "Team", route: "/team", icon: team },
//   { headline: "Messages", name: "Messages", route: "/messages", icon: message },
//   { headline: "Files", name: "Files", route: "/files", icon: file },
//   { headline: "Reports", name: "Reports", route: "/reports", icon: report },
//   {
//     headline: "Help & Support",
//     name: "Help and Support",
//     route: "/help-support",
//     icon: help,
//   },
// ];

// const Sidebar: React.FC<SidebarProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedRoute, setSelectedRoute] = useState("/dashboard");
//   const [pageTitle, setPageTitle] = useState("Home");

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const currentNavItem = navigation.find(
//       (item) => item.route === selectedRoute
//     );
//     if (currentNavItem) setPageTitle(currentNavItem.headline);
//   }, [selectedRoute]);

//   return (
//     <div className="flex h-screen w-screen relative">
//       {/* Sidebar */}
//       <div
//         className={`bg-[#E6F2F0] text-white p-5 ${
//           isOpen ? "w-[20%]" : "w-[5%]"
//         }
//         duration-200 fixed z-10 top-0 left-0 h-full`}
//       >
//         <div className="flex justify-between items-center mb-8 text-black text-[15px] font-bold">
//           {isOpen && (
//             <div className="rounded-sm h-[48px] w-[48px] bg-[#EFEBFA]"></div>
//           )}
//           {isOpen && <div className="text-[#0D6759]">Wabuzz</div>}

//           <button onClick={toggleSidebar} className="text-[#145E54] text-2xl">
//             {isOpen ? <FiChevronLeft /> : <FiMenu />}
//           </button>
//         </div>

//         <div className="flex flex-col mb-6 overflow-y-auto space-y-6">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               href={item.route}
//               onClick={() => setSelectedRoute(item.route)}
//               className={`flex items-center text-[15px] text-[#145E54] hover:bg-[#145E54]
//               hover:text-white ${isOpen && "py-1 px-2"} rounded-md
//               ${selectedRoute === item.route ? "bg-[#E6F5F2]" : ""}`}
//             >
//               <Image src={item.icon} alt={item.name} width={24} height={24} />
//               <span
//                 className={`ml-2 ${
//                   isOpen ? "inline-block" : "hidden"
//                 } transition-all duration-200`}
//               >
//                 {item.headline}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className={`relative ${isOpen ? "ms-[20%]" : "ms-[5%]"}`}>
//         {/* Top Bar */}
//         <div className="bg-[#0D6759] p-2 sticky top-0 w-full h-14 text-white px-4 font-bold">
//           {pageTitle}
//         </div>

//         {/* Content Area */}
//         <div className="h-full w-full overflow-y-auto p-4 bg-[#E6F5F2]">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
"use client";
import { Box, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Image from "next/image";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import home from "@/public/home.svg";
import template from "@/public/template.svg";
import task from "@/public/task.svg";
import calender from "@/public/calender.svg";
import team from "@/public/team.svg";
import message from "@/public/message.svg";
import file from "@/public/file.svg";
import report from "@/public/report.svg";
import help from "@/public/help.svg";

const sliderData = [
  { headline: "Home", route: "/dashboard", icon: home },
  { headline: "Templates", route: "/templates", icon: template },
  { headline: "Tasks", route: "/tasks", icon: task },
  { headline: "Calendar", route: "/calendar", icon: calender },
  { headline: "Team", route: "/team", icon: team },
  { headline: "Messages", route: "/messages", icon: message },
  { headline: "Files", route: "/files", icon: file },
  { headline: "Reports", route: "/reports", icon: report },
  { headline: "Help & Support", route: "/help-support", icon: help },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname(); // Get current path
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // Find the current page title based on the route
  const currentPageTitle =
    sliderData.find((item) => pathName.startsWith(item.route))?.headline ||
    "Dashboard";

  return (
    <div>
      <Box
        sx={{
          mt: {
            xl: "2.8%",
            lg: "0%",
            md: "7%",
            sm: "10%",
            xs: "7rem",
          },
        }}
      >
        <Box
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: open ? "15%" : "6%",
              borderRightWidth: 1.5,
              pt: {
                xl: "1.5rem",
                lg: "1rem",
                md: "8rem",
                sm: "6rem",
                xs: "4rem",
              },
              top: 0,
              zIndex: 10,
              height: "100%",
              position: "fixed",
              left: 0,
              backgroundColor: "#E6F2F0",
            }}
          >
            <div className="top-0 left-0 right-0">
              {/* Drawer Toggle */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: !open ? "center" : "flex-end",
                }}
              >
                {!open ? (
                  <IconButton onClick={handleDrawerOpen}>
                    <FiMenu />
                  </IconButton>
                ) : (
                  <div className="flex justify-between items-center w-full">
                    <Typography
                      sx={{
                        marginLeft: {
                          xl: "9%",
                          lg: "11%",
                          md: "13%",
                        },
                        color: "#008069",
                        my: "3%",
                      }}
                    >
                      WaBuzz
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                      <FiChevronLeft />
                    </IconButton>
                  </div>
                )}
              </Box>

              {/* Sidebar Menu Items */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {sliderData.map((item, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{ px: !open ? "20%" : "10%" }}
                  >
                    <Link href={item.route} className="w-full">
                      <Tooltip
                        title={!open ? item.headline : ""}
                        placement="right"
                        componentsProps={{
                          tooltip: {
                            sx: { fontSize: "0.8rem", padding: "1rem" },
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{
                            justifyContent: open ? "initial" : "center",
                            my: "3%",
                            borderRadius: open ? "8px" : "8px",
                            backgroundColor: pathName.startsWith(item.route)
                              ? "#FFFFFF"
                              : "transparent",
                            "&:hover": { backgroundColor: "#FFFFFF" },
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              justifyContent: "center",
                              width: { xl: "2.5rem", lg: "2rem", md: "1.5rem" },
                              height: {
                                xl: "2.5rem",
                                lg: "2rem",
                                md: "1.5rem",
                              },
                            }}
                          >
                            <Image
                              src={item.icon}
                              alt={`${item.headline} icon`}
                            />
                          </ListItemIcon>

                          {open && (
                            <Typography sx={{ marginLeft: "5%" }}>
                              {item.headline}
                            </Typography>
                          )}
                        </ListItemButton>
                      </Tooltip>
                    </Link>
                  </ListItem>
                ))}
              </Box>
            </div>
          </Box>

          {/* Main Content */}
          <Box sx={{ width: "100%", marginLeft: !open ? "6%" : "15%" }}>
            {/* Top Bar with Dynamic Title */}
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
                {currentPageTitle}
              </Typography>
            </Box>

            <Box
              sx={{
                height: "100vh", 
                pt: { xl: "0%", lg: "3%", md: "4%", sm: "3%", xs: "2%" },
                backgroundColor: "#E6F2F0", 
               
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                {children}{" "}
               
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
