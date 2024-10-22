"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import Image from "next/image";
import home from "@/public/home.svg";
import template from "@/public/template.svg";
import task from "@/public/task.svg";
import calender from "@/public/calender.svg";
import team from "@/public/team.svg";
import message from "@/public/message.svg";
import file from "@/public/file.svg";
import report from "@/public/report.svg";
import help from "@/public/help.svg";

type SidebarProps = {
  children: React.ReactNode;
};

const navigation = [
  { headline: "Home", name: "dashboard", route: "/dashboard", icon: home },
  {
    headline: "Templates",
    name: "Template Library",
    route: "/templates",
    icon: template,
  },
  { headline: "Tasks", name: "Tasks", route: "/tasks", icon: task },
  {
    headline: "Calendar",
    name: "Calendar",
    route: "/calendar",
    icon: calender,
  },
  { headline: "Team", name: "Team", route: "/team", icon: team },
  { headline: "Messages", name: "Messages", route: "/messages", icon: message },
  { headline: "Files", name: "Files", route: "/files", icon: file },
  { headline: "Reports", name: "Reports", route: "/reports", icon: report },
  {
    headline: "Help & Support",
    name: "Help and Support",
    route: "/help-support",
    icon: help,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState("/dashboard");
  const [pageTitle, setPageTitle] = useState("Home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const currentNavItem = navigation.find(
      (item) => item.route === selectedRoute
    );
    if (currentNavItem) setPageTitle(currentNavItem.headline);
  }, [selectedRoute]);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div
        className={`bg-[#E6F2F0] text-white p-5 ${
          isOpen ? "w-[20%]" : "w-[5%]"
        } 
        duration-200 fixed z-10 top-0 left-0 h-full`}
      >
        <div className="flex justify-between items-center mb-8 text-black text-[15px] font-bold">
          {isOpen && (
            <div className="rounded-sm h-[48px] w-[48px] bg-[#EFEBFA]"></div>
          )}
          {isOpen && <div className="text-[#0D6759]">Wabuzz</div>}

          <button onClick={toggleSidebar} className="text-[#145E54] text-2xl">
            {isOpen ? <FiChevronLeft /> : <FiMenu />}
          </button>
        </div>

        <div className="flex flex-col mb-6 overflow-y-auto space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.route}
              onClick={() => setSelectedRoute(item.route)}
              className={`flex items-center text-[15px] text-[#145E54] hover:bg-[#145E54] 
              hover:text-white ${isOpen && "py-1 px-2"} rounded-md 
              ${selectedRoute === item.route ? "bg-[#E6F5F2]" : ""}`}
            >
              <Image src={item.icon} alt={item.name} width={24} height={24} />
              <span
                className={`ml-2 ${
                  isOpen ? "inline-block" : "hidden"
                } transition-all duration-200`}
              >
                {item.headline}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative ${isOpen ? "ms-[20%]" : "ms-[5%]"}`}>
        {/* Top Bar */}
        <div className="bg-[#0D6759] p-2 sticky top-0 w-full h-14 text-white px-4 font-bold">
          {pageTitle}
        </div>

        {/* Content Area */}
        <div className="h-full w-full overflow-y-auto p-4 bg-[#E6F5F2]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
