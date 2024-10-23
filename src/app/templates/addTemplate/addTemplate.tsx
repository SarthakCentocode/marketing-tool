"use client";
import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import Sidebar from "@/Layout/DefaultLayout"; // Assuming Sidebar is global

const AddTemplate = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex-grow ">
        <h2 className="text-2xl font-semibold text-[#008069] mb-6">
          Fill up the form below
        </h2>

        {/* Form Section */}
        <Box
          component="form"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          noValidate
          autoComplete="off"
        >
          {/* Left Column */}

          <div className="space-y-3">
            <h4 className="text-lg font-medium ">Template Preview</h4>
            <h5 className="text-sm font-light text-gray-400">Lorem Ipsum is simply dummy text of the printing and type </h5>
            <TextField
              fullWidth
              label="Choose Catagory"
              select
             className="border-[#008069]"
              variant="outlined"
            >
              <MenuItem value="Category 1">Category 1</MenuItem>
              <MenuItem value="Category 2">Category 2</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Template Name"
              placeholder="Write Template name like this Wabuz_Message"
              helperText="Enter the template name"
              variant="outlined"
            />

            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Template Message"
              placeholder="Write your message here"
              helperText="Enter your template message"
              variant="outlined"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <TextField
              fullWidth
              label="Template Language"
              select
              helperText="Choose the template language"
              variant="outlined"
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Template Type"
              select
              helperText="Choose the template type"
              variant="outlined"
            >
              <MenuItem value="Type 1">Type 1</MenuItem>
              <MenuItem value="Type 2">Type 2</MenuItem>
            </TextField>

            {/* Template Preview */}

            <h4 className="text-lg font-semibold mb-2">Template Preview</h4>
            <div className="p-4 border rounded-md border-[#008069] ">
              <div className="bg-white p-4 border-2 border-[#008069] rounded-lg shadow-md">
                <p className="text-sm text-gray-700">
                  {" "}
                  📢 Hey [Name], looking to elevate your [business/service]? 🚀
                  Let us help you with [specific offering]!{" "}
                  <strong>Special offer</strong> for a limited time. Don't miss
                  out!
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Actions */}
          <div className="col-span-1 md:col-span-2">
            <TextField
              fullWidth
              label="Interactive Actions"
              select
              helperText="Choose an action"
              variant="outlined"
            >
              <MenuItem value="Action 1">Action 1</MenuItem>
              <MenuItem value="Action 2">Action 2</MenuItem>
            </TextField>
          </div>
        </Box>
      </div>
    </>
  );
};

export default AddTemplate;
