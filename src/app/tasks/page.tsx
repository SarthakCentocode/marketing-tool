// pages/chat.tsx
"use client";
import axios from "axios";
import { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Harry",
      text: "Can we schedule a call to discuss on Monday?",
      time: "9:33 PM",
    },
    {
      id: 2,
      sender: "You",
      text: "Let’s get this all sorted out before the holidays",
      time: "9:30 PM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    const whatsappMessage = {
      messaging_product: "whatsapp",
      to: "918604435428", // Hardcoded receiver's number
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
              "Bearer EAAYuiifnBQoBOZBk7mxXmY24ZAPvOkgDPgay1voVp1ShRVcZABnynpr1ZCmUUIbZB0vUcx4MHPUxIBRZBOXEAjwwTiy9jjuu1FIX3kAGlBFlPjf1QxllfXsDG0XZBZAMm1HveqeyRSqlWxvxlK5PbSWyEuyya2tB7adwtcd629pA3M4vTpu6ZCZC7Ykapf0xRlTr6PkDuRSqzyySZAL1iSuW232SQAaSb0ZD",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Message sent:", response.data);

      // Adding the new message to the chat after sending
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          text: newMessage,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage(""); // Clear input
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat List */}
      <div className="w-1/4 bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
        <div className="p-4">
          <div className="bg-green-100 p-2 mb-2 rounded-lg cursor-pointer">
            <h3 className="text-md font-semibold">2022 Meet Up</h3>
            <p className="text-sm">
              Can we schedule a call to discuss on Monday?
            </p>
          </div>
          <div className="p-2 rounded-lg cursor-pointer">
            <h3 className="text-md font-semibold">Developer Advocacy</h3>
            <p className="text-sm">How’s everyone's week going so far?</p>
          </div>
        </div>
      </div>

      {/* Message View */}
      <div className="flex-1 bg-gray-200 p-4">
        <div className="p-2 border-b flex justify-between items-center bg-white">
          <h2 className="text-xl font-semibold">2022 Meet Up</h2>
        </div>
        <div className="flex-1 bg-gray-300 p-4 rounded-lg">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              } mb-4`}
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
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter message"
            className="p-2 border w-full"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 text-white p-2 mt-2 w-full"
          >
            Send
          </button>
        </div>
      </div>

      {/* Channel Information */}
      <div className="w-1/4 bg-white p-4 border-l">
        <h3 className="text-lg font-semibold">Channel Information</h3>
        <div className="mt-4">
          <h4 className="text-sm">Operators</h4>
          {/* Operators list */}
        </div>
        <div className="mt-2">
          <h4 className="text-sm">Members</h4>
          {/* Members list */}
        </div>
        <div className="mt-2">
          <button className="text-red-500">Leave Channel</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
