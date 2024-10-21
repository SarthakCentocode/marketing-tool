"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // For menu icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
      <div className=" bg-[#E6F2F0] p-6 h-full w-full ">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Sidebar;
