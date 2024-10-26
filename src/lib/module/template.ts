import mongoose, { Schema } from "mongoose";

const templateModuel = new Schema({
  category: {
    type: "string",
  },
  templateName: {
    type: "string",
  },
//   header: {
//     type: "string",
//   },
//   footer: {
//     type: "string",
//   },
  message: {
    type: "string",
  },
  language: {
    type: "string",
  },
  type: {
    type: "string",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const TemplateModuel =
  mongoose.models.candidates || mongoose.model("templates", templateModuel);

export default TemplateModuel;
