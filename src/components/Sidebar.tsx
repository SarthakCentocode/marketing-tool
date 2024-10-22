"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiChevronLeft, FiSearch } from "react-icons/fi"; // Import the new arrow icon
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
  {
    headline: "Home",
    name: "dashboard",
    route: "/dashboard",
    icon: home,
  },
  {
    headline: "Templates",
    name: "Template Library",
    route: "/templates",
    icon: template,
  },
  {
    headline: "Tasks",
    name: "Tasks",
    route: "/tasks",
    icon: task,
  },
  {
    headline: "Calendar",
    name: "Calendar",
    route: "/calendar",
    icon: calender,
  },
  {
    headline: "Team",
    name: "Team",
    route: "/team",
    icon: team,
  },
  {
    headline: "Messages",
    name: "Messages",
    route: "/messages",
    icon: message,
  },
  {
    headline: "Files",
    name: "Files",
    route: "/files",
    icon: file,
  },
  {
    headline: "Reports",
    name: "Reports",
    route: "/reports",
    icon: report,
  },
  {
    headline: "Help & Support",
    name: "Help and Support",
    route: "/help-support",
    icon: help,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("/dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex h-screen relative ">
      <div
        className={`bg-[#fdfdfd] text-white  p-5 pt-8 ${
          isOpen ? "w-[20%]" : "w-[5%]"
        } duration-300 fixed z-10 top-0 left-0 h-full `}
      >
        <div className="flex justify-between items-center mb-8">
          {isOpen && (
            <div className="rounded-sm h-[48px] w-[48px] bg-[#EFEBFA]"></div>
          )}
          <button
            onClick={toggleSidebar}
            className="  text-[#145E54] text-[15px]"
          >
            {isOpen ? <FiChevronLeft /> : <FiMenu />}
          </button>
        </div>

        <div className="flex flex-col mb-6 overflow-y-auto space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.route}
              onClick={() => setSelectedRoute(item.route)}
              className={`flex items-center text-[15px] text-[#145E54] hover:bg-[#145E54] hover:text-white ${
                isOpen && "p-2"
              } rounded-md ${
                selectedRoute === item.route ? "bg-[#E6F5F2]" : ""
              }`}
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

<<<<<<< Updated upstream
      <div className={`relative ${isOpen ? "ms-[20%]" : "ms-[5%]"}`}>
        <div className="bg-[#0D6759] p-2 sticky top-0 w-">
          <div className=" flex justify-end items-center overflow-y-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
              />
              <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            <button className=" ms-2 border-[1px] border-white px-2 py-1 text-white rounded-sm ">
              Add New
            </button>
          </div>
        </div>

        <div className="h-full w-full overflow-y">{children}</div>
=======
      {/* Main Content */}
      <div className=" w-screen h-screen overflow-y-auto ">
        {/* Top Navigation Bar */}
        <div className="bg-[#142C2B] p-4 flex justify-between items-center">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Profile/Settings or Other Links */}
          <div className="space-x-4">
            <Link href="/profile" className="text-gray-200 hover:text-gray-400">
              Profile
            </Link>
            <Link href="/settings" className="text-gray-200 hover:text-gray-400">
              Settings
            </Link>
          </div>
        </div>

        {/* Children Content */}
        <div className="h-full w-full ">{children}</div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Sidebar;
