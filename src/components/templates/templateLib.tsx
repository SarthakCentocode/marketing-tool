import { FiSearch } from "react-icons/fi";
import Card from "../card";

export default function TemplatesLib() {
  return (
    <>
      <div className="">
        <div className=" flex justify-between items-center my-10 ">
          <div>
            <h1 className="text-[24px] font-[600] text-[#008069]">
              Template library
            </h1>
          </div>
          <div className="flex space-x-2">
            <div className=" flex justify-end items-center overflow-y-auto">
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
          </div>{" "}
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-3 pe-3">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`mb-4 py-2 px-3 flex justify-between items-center w-full ${
                    index === 0 ? "bg-[#F8FDFC]" : ""
                  } rounded-xl`}
                >
                  <h4 className="text-[15px]">Promotional</h4>
                  <h4 className="bg-[#008069] text-[15px] rounded-2xl font-bold px-3 text-white">
                    12
                  </h4>
                </div>
              ))}
            <h4 className="text-[15px] text-[#888282]">More</h4>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-4">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <Card
                    key={index}
                    title="Promotional"
                    badgeText="Festival"
                    button="Preview"
                    description="Hey [Name], looking to elevate your [business/service]? Let us help you with [specific offering]! Special offer for a limited time. Don't miss out! Contact us at [Contact Info] now!"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
