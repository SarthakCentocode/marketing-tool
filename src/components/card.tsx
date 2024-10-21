"use client";
import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  badgeText: string;
  button: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  badgeText,
  button,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProceed = () => {
    // Add your proceed logic here
    alert("Proceeding with the action...");
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#FFFFFF]  shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 w-full max-w-xs mx-auto ">
        <div className="flex items-center justify-between">
          <h4 className="text-[16px]">{title}</h4>
          <div className=" bg-[#00806933] px-4 py-1 rounded-sm">
            <h4 className="text-[#008069] text-[10px] ">{badgeText}</h4>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          {title}
        </h3>
        <p className="text-justify mb-6 text-[16px] text-[#888282]">
          {description}
        </p>
        <div>
          <button
            onClick={handleOpenModal}
            className="text-[#008069] text-[10px] font-[600] py-1 px-3 border-2 border-[#008069] rounded-md"
          >
            {button}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">
              WhatsApp Marketing Message
            </h2>
            <p className="mb-4">
              Hey there!Want to boost your sales with automated WhatsApp
              marketing? Our platform helps you send personalized messages to
              your audience and drive engagement. Get started now and see the
              difference!
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
              <button
                onClick={handleProceed}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
