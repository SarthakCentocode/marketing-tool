"use client";
import Card from "@/components/card";
import MyTemplates from "@/components/templates/myTemplates";
import TemplatesLib from "@/components/templates/templateLib";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Templates() {
  const [isTab, setTab] = useState(0);

  const handleMyTemplates = () => {
    setTab(1);
  };
  const handleTemplates = () => {
    setTab(0);
  };
  return (
    <>
      <div className=" bg-[#ffffff] h-full w-full p-6">
        <div className="my-8 flex justify-between items-center ">
          <div className=" bg-white  gap-2 flex justify-around items-center border-[1px] border-[#008069] p-[1.5px]  rounded-md">
            <button
              className={`px-5   rounded-md py-2  text-[16px] text-[600]  ${
                isTab === 0 && "bg-[#008069] text-white"
              }`}
              onClick={handleTemplates}
            >
              Template Library
            </button>

            <button
              className={`px-5   rounded-md py-2  text-[16px] text-[600]  ${
                isTab === 1 && "bg-[#008069] text-white"
              }`}
              onClick={handleMyTemplates}
            >
              My Templates
            </button>
          </div>
          <div className="flex space-x-2 h-full">
            <div className=" flex justify-end items-center ">
              <div className="relative">
                <input
                  type="text"
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-[343px] pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
                />
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              <button className=" ms-2 border-[1px] bg-[#0D6759] px-4 h-full text-white rounded-sm ">
                Add Template
              </button>
            </div>
          </div>
        </div>
        {isTab === 0 && <TemplatesLib />}
        {isTab === 1 && <MyTemplates />}
      </div>
    </>
  );
}
