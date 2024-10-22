"use client";
import Card from "@/components/card";
import MyTemplates from "@/components/templates/myTemplates";
import TemplatesLib from "@/components/templates/templateLib";
import { useState } from "react";

export default function Templates() {
  const [isTab, setTab] = useState(0);

  return (
    <>
      <div className=" bg-[#E6F2F0] h-full w-full p-6">
        <div className="mt-5 flex justify-center items-center ">
          <div className=" bg-white  gap-2 flex justify-around items-center border-2 border-[#008069] py-2 px-4 rounded-full">
            <button
              className={`px-6   rounded-full py-2  text-[16px] text-[600]  ${
                isTab === 0 && "bg-[#008069] text-white"
              }`}
              onClick={() => setTab(0)}
            >
              Template Library
            </button>

            <button
              className={`px-6   rounded-full py-2  text-[16px] text-[600]  ${
                isTab === 1 && "bg-[#008069] text-white"
              }`}
              onClick={() => setTab(1)}
            >
              My Templates
            </button>
          </div>
        </div>
        {isTab === 0 && <TemplatesLib />}
        {isTab === 1 && <MyTemplates />}
      </div>
    </>
  );
}
