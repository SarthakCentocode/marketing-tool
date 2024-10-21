"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiSearch } from "react-icons/fi"; // For menu and search icons

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
        className={`bg-[#142C2B] text-white h-screen p-5 pt-8 ${
          isOpen ? "w-64" : "w-20"
        } duration-300 relative`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-white text-2xl"
        >
          <FiMenu />
        </button>

        {/* Sidebar Links */}
        <div
          className={`flex flex-col mt-10 ${
            isOpen ? "space-y-6" : "space-y-4"
          }`}
        >
          <Link
            href="/dashboard"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Dashboard
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              D
            </span>
          </Link>
          <Link
            href="/livechat"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Live Chat
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              L
            </span>
          </Link>
          <Link
            href="/history"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              History
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              H
            </span>
          </Link>
          <Link
            href="/contacts"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Contacts
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              C
            </span>
          </Link>
          <Link
            href="/campaigns"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Campaigns
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              M
            </span>
          </Link>
          <Link
            href="/manage"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Manage
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              M
            </span>
          </Link>
          <Link
            href="/integrations"
            className="hover:bg-gray-700 py-2 px-3 rounded-md"
          >
            <span
              className={`${
                isOpen ? "inline-block" : "hidden"
              } transition-all duration-200`}
            >
              Integrations
            </span>
            <span
              className={`${
                !isOpen ? "block text-center" : "hidden"
              } transition-all duration-200`}
            >
              I
            </span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white">
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
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
