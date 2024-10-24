"use client";
import Card from "@/components/card";
import MyTemplates from "@/components/templates/myTemplates";
import TemplatesLib from "@/components/templates/templateLib";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Templates() {
  const [isTab, setTab] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", "Approved", "Pending", "Draft", "Rejected"];

  const handleMyTemplates = () => {
    setTab(1);
  };
  const handleTemplates = () => {
    setTab(0);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <>
      <div className="bg-[#ffffff] h-full w-full p-6">
        <div className="my-8 flex justify-between items-center">
          <div className="bg-white gap-2 flex justify-around items-center border-[1px] border-[#008069] p-[1.5px] rounded-md">
            <button
              className={`px-5   rounded-md py-2  text-[16px] font-[600]  ${
                isTab === 0 ? "bg-[#008069] text-white" : "text-[#627065]"
              }`}
              onClick={handleTemplates}
            >
              Template Library
            </button>

            <button
              className={`px-5   rounded-md py-2  text-[16px] font-[600]  ${
                isTab === 1 ? "bg-[#008069] text-white" : "text-[#627065]"
              }`}
              onClick={handleMyTemplates}
            >
              My Templates
            </button>
          </div>
          <div className="flex space-x-2 h-full">
            <div className="flex justify-end items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[343px] border-[1.5px] border-[#0D6759] pl-10 pr-4 py-2  rounded-md  focus:border-[#0D6759]"
                />
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>

              {isTab === 0 ? (
                <button className="ms-2 border-[1px] bg-[#008069] px-4 h-full text-white rounded-md">
                  Add Template
                </button>
              ) : (
                <div className="ms-2">
                  <select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    className="border-[1px] px-4 py-3 text-[16px] rounded-md text-white bg-[#008069] border-gray-300 focus:ring-2 focus:ring-[#008069] focus:outline-none"
                  >
                    {filterOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {isTab === 0 && <TemplatesLib />}
        {isTab === 1 && <MyTemplates />}
      </div>
    </>
  );
}
