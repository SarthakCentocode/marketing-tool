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
    <div className="flex">
      <div
        className={`bg-[#fdfdfd] text-white h-screen p-5 pt-8 ${
          isOpen ? "w-64" : "w-20"
        } duration-300 relative`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-8 text-[#145E54] text-2xl"
        >
          {/* Toggle between FiMenu and FiChevronLeft */}
          {isOpen ? <FiChevronLeft /> : <FiMenu />}
        </button>

        <div className="flex flex-col mt-10 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.route}
              onClick={() => setSelectedRoute(item.route)}
              className={`flex items-center text-[15px] text-[#145E54] hover:bg-[#145E54] hover:text-white ${
                isOpen && "py-3 px-3"
              } rounded-md ${
                selectedRoute === item.route ? "bg-[#E6F5F2]" : ""
              }`}
            >
              <Image src={item.icon} alt={item.name} width={24} height={24} />
              <span
                className={`ml-4 ${
                  isOpen ? "inline-block" : "hidden"
                } transition-all duration-200`}
              >
                {item.headline}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className=" w-screen h-screen overflow-y-auto ">
        <div className="bg-[#0D6759] p-2">
          <div className=" flex justify-end items-center">
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

        <div className="h-full w-full ">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
