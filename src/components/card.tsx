"use client";
import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

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
      <div className="bg-[#FFFFFF]  border-[1px] border-[#CDE7E2] hover:shadow-xl transition-shadow rounded-xl p-6 w-full max-w-xs mx-auto ">
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
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          sx: {
            backdropFilter: "blur(3px)", // This applies the blur effect
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent background
          },
        }}
      >
        <Box sx={{ ...style }}>
          <div className="flex flex-col justify-between items-center">
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            <div className=" w-full h-96 bg-gray-400 rounded-lg" />

            <div className="flex justify-between w-full gap-3   items-center mt-4">
              <button
                onClick={handleCloseModal}
                className="bg font-[500] px-4 py-2 rounded-md border-[1px] border-[#D0D5DD]
                text-[#344054] w-full"
              >
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="bg-[#008069] font-[500] text-white px-4 py-2 rounded-md w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Card;
