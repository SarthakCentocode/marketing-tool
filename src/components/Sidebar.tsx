"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiSearch } from "react-icons/fi";
import home from "@/public/home.svg";
import template from "@/public/template.svg";
import task from "@/public/task.svg";
import Image from "next/image";
import calender from "@/public/calender.svg";
import team from "@/public/team.svg";
import message from "@/public/message.svg";
import file from "@/public/file.svg";
import report from "@/public/report.svg";
import help from "@/public/help.svg";
import {
  FaTasks,
  FaCalendarAlt,
  FaUsers,
  FaEnvelope,
  FaFileAlt,
  FaChartBar,
  FaQuestionCircle,
} from "react-icons/fa"; // Example icons

type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-[#fdfdfd] text-white h-screen p-5 pt-8 ${
          isOpen ? "w-64" : "w-20"
        } duration-300 relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-black text-2xl"
        >
          <FiMenu />
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col mt-10 space-y-6">
          <Link
            href="/dashboard"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={home} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Dashboard
            </span>
          </Link>
          <Link
            href="/tasks"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={template} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Templates
            </span>
          </Link>
          <Link
            href="/calendar"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={calender} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Calendar
            </span>
          </Link>
          <Link
            href="/team"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={team} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Team
            </span>
          </Link>
          <Link
            href="/messages"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={message} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Messages
            </span>
          </Link>
          <Link
            href="/files"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={file} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Files
            </span>
          </Link>
          <Link
            href="/reports"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={report} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200 text-[15px]`}
            >
              Reports
            </span>
          </Link>
          <Link
            href="/help-support"
            className={`flex items-center text-[#145E54] hover:bg-[#145E54] hover:text-white ${
              isOpen && "py-3 px-3"
            } rounded-md`}
          >
            <Image src={help} alt="Home" width={24} height={24}></Image>
            <span
              className={`ml-4 ${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Help & Support
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#F8F8F8]">
        {/* Top Navigation Bar */}
        <div className="bg-[#0D6759] p-4 flex justify-between items-center">
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

          {/* Profile/Settings Links */}
          <div className="space-x-4">
            <Link href="/profile" className="text-gray-200 hover:text-gray-400">
              Profile
            </Link>
            <Link
              href="/settings"
              className="text-gray-200 hover:text-gray-400"
            >
              Settings
            </Link>
          </div>
        </div>

        {/* Children Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
