"use client";
import {
  Box,
  Tooltip,
  Typography,
  IconButton,
  Modal,
  Button,
} from "@mui/material";
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
import arrow from "@/public/arrow.svg";
import unsaved from "@/public/unsaved.svg";

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
  const [modalOpen, setModalOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

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
              <IconButton
                onClick={handleModalOpen}
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Image
                  src={arrow}
                  alt="arrow"
                  style={{ width: "14px", height: "16px", marginLeft: "10px" }}
                />
              </IconButton>
              <Typography className="left-0 text-[#008069] font-semibold text-[20px]">
                {currentPageTitle}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "100vh",
                pt: { xl: "0%", lg: "3%", md: "4%", sm: "3%", xs: "2%" },
                backgroundColor: "#FFFFFF",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>{children} </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal Component */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid-gray-400",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Image
            src={unsaved}
            alt="arrow"
            style={{ width: "50px", height: "50px", marginLeft: "1px" }}
          />
          <Typography id="modal-title" variant="h6" component="h2">
            Unsaved changes
          </Typography>
          <Typography id="modal-description" sx={{ mt: 1 }}>
            Do you want to save or discard changes?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              onClick={handleModalClose}
              variant="contained"
              className="bg-white text-black"
              sx={{ textTransform: "none" }}
            >
              Discard Changes
            </Button>
            <Button
              onClick={handleModalClose}
              variant="contained"
              className="bg-[#008069]"
              sx={{ textTransform: "none" }}
            >
              Save Draft
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
