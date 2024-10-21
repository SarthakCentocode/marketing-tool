"use client";
import React, { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  actionText: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  actionText,
  icon,
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
      <div className="bg-[#142C2B] shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl p-6 w-full max-w-xs mx-auto transform hover:-translate-y-1 hover:scale-105">
        <div className="flex items-center justify-center mb-4">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 rounded-full border-2 border-gray-200 p-2 bg-gray-50 shadow-sm"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          {title}
        </h3>
        <p className="text-white text-center mb-6">{description}</p>
        <div className="text-center">
          <button
            onClick={handleOpenModal}
            className="text-white font-semibold flex items-center justify-center group hover:underline"
          >
            {actionText}
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">
              →
            </span>
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
              Hey there! 🚀 Want to boost your sales with automated WhatsApp
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
