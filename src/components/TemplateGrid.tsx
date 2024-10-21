import React from "react";
// import TemplateCard from "./TemplateCard";
import Sidebar from "./Sidebar";

const TemplateGrid: React.FC = () => {
  const templates = [
    {
      title: "Promotional",
      description:
        "🎉 Hey [Name], looking to elevate your business/service? 🚀 Let us help you...",
      type: "Festival",
    },
    // Add more templates as needed
  ];

  return (
    <div className="flex">
     
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-[#F7FAFA] p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Templates</h1>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md flex items-center">
            <span className="mr-2">➕</span> Add New
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          {/* Filter buttons */}
          <button className="bg-white shadow-md text-teal-500 px-4 py-2 rounded-md">
            All
          </button>
          <button className="bg-white shadow-md text-teal-500 px-4 py-2 rounded-md">
            Promotional
            <span className="ml-2 bg-teal-500 text-white rounded-full px-2 py-1 text-xs">
              12
            </span>
          </button>
          {/* Add more filter buttons as needed */}
        </div>

        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search"
            className="p-3 w-full max-w-md bg-white rounded-md shadow-md"
          />
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              title={template.title}
              description={template.description}
              type={template.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGrid;
