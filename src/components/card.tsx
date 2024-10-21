import React from "react";

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
  return (
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
        <button className="text-white font-semibold flex items-center justify-center group hover:underline">
          {actionText}
          <span className="ml-2 transform transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
