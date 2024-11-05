"use client";
import React from "react";
import axios from "axios";
import { useState, ChangeEvent } from "react";
import { Box, Typography } from "@mui/material";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
}

interface WhatsAppMessage {
  messaging_product: string;
  to: string;
  type: string;
  template: {
    name: string;
    language: { code: string };
  };
}

interface Contact {
  id: number;
  name: string;
  imageUrl: string;
  lastMessage: string;
  messages: Message[];
}

const ChatPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Tarush",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      lastMessage: "Let’s schedule a call on Monday",
      messages: [
        {
          id: 1,
          sender: "Tarush",
          text: "Can we schedule a call to discuss on Monday?",
          time: "9:33 PM",
        },
        {
          id: 2,
          sender: "You",
          text: "Let’s get this all sorted out before the holidays",
          time: "9:30 PM",
        },
      ],
    },
    {
      id: 2,
      name: "Developer Advocacy",
      imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      lastMessage: "How’s everyone’s week going so far?",
      messages: [
        {
          id: 1,
          sender: "Developer Advocacy",
          text: "How’s everyone’s week going so far?",
          time: "9:00 AM",
        },
      ],
    },
  ]);

  const [activeContactId, setActiveContactId] = useState<number>(
    contacts[0].id
  );
  const [newMessage, setNewMessage] = useState<string>("");

  const sendMessage = async () => {
    const whatsappMessage: WhatsAppMessage = {
      messaging_product: "whatsapp",
      to: "918604435428",
      type: "template",
      template: {
        name: "hello_world",
        language: { code: "en_US" },
      },
    };

    try {
      const response = await axios.post(
        "https://graph.facebook.com/v20.0/488298064358404/messages",
        whatsappMessage,
        {
          headers: {
            Authorization:
              "Bearer EAAYuiifnBQoBO54wayz1sxqOlSHMEda9EtmFmd8ZA3V2dhUUB4O0r6LPhMZAL7HeR6WLovN15TlxVzv0LCOGM8o0z0nYkth1n0ShjbJeiSgL1jYFxxVjwiTZCNaOXQkboVzHHM4dI4FNpnCfycgplacIVygcfINaY4621zJa7wdxC5WDN8s5fLNuuLq1p0ywWEqxmblVORTiFnvodaKjYLE7xu5rP8Picwa2WM6U3is",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Message sent:", response.data);

      setContacts((prevContacts) =>
        prevContacts.map((contact) =>
          contact.id === activeContactId
            ? {
                ...contact,
                messages: [
                  ...contact.messages,
                  {
                    id: contact.messages.length + 1,
                    sender: "You",
                    text: newMessage,
                    time: new Date().toLocaleTimeString(),
                  },
                ],
              }
            : contact
        )
      );
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const selectContact = (id: number) => {
    setActiveContactId(id);
  };

  const activeContact = contacts.find(
    (contact) => contact.id === activeContactId
  );

  return (
    <>
      {/* Title Bar */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: "7%",
          position: "fixed",
          top: 0,
          zIndex: 999,
          padding: "2%",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <Typography className="left-0 text-[#008069] font-semibold text-[20px]">
          Tasks
        </Typography>
      </Box>

      {/* Main Content */}
      <div className="flex h-screen bg-gray-100 pt-[1%]">
        {/* Sidebar with Contact List */}
        <div className="w-1/4 bg-white border-r">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Chats</h2>
          </div>
          <div className="p-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center bg-gray-100 p-2 mb-2 rounded-lg cursor-pointer"
                onClick={() => selectContact(contact.id)}
              >
                <img
                  src={contact.imageUrl}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="text-md font-semibold">{contact.name}</h3>
                  <p className="text-sm">{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message View */}
        <div className="flex-1 bg-gray-200 p-4">
          {/* Chat Header */}
          <div className="p-2 border-b flex justify-between items-center bg-white">
            <div className="flex items-center">
              <img
                src={activeContact?.imageUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-3"
              />
              <h2 className="text-xl font-semibold">{activeContact?.name}</h2>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 bg-white p-4 rounded-lg overflow-y-scroll">
            {activeContact?.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex mb-4 ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.sender === "You" ? "bg-green-300" : "bg-gray-200"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter message"
              className="p-2 border w-full"
              value={newMessage}
              onChange={handleInputChange}
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white p-2 mt-2 w-full"
            >
              Send Template
            </button>
          </div>
        </div>

        {/* Channel Information */}
        <div className="w-1/4 bg-white p-4 border-l">
          <h3 className="text-lg font-semibold">Channel Information</h3>
          <div className="mt-4">
            <h4 className="text-sm">Operators</h4>
          </div>
          <div className="mt-2">
            <h4 className="text-sm">Members</h4>
          </div>
          <div className="mt-2">
            <button className="text-red-500">Leave Channel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
