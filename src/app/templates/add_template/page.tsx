"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

const heading = {
  fontSize: {
    xl: "1.5rem",
    lg: "1.5rem",
    md: "1.3rem",
    sm: "1.3rem",
    xs: "1.3rem",
  },
};
const subHeading = {
  fontSize: {
    xl: "1.25rem",
    lg: "1.25rem",
    md: "1rem",
    sm: "1rem",
    xs: "1rem",
  },
  fontWeight: 500,
  lineHeight: "26px",
};

interface formData {
  category: string;
  templateName: string;
  // header: string;
  // footer: string;
  message: string;
  language: string;
  type: string;
}

const AddTemplate = () => {
  const [previewMessage, setPreviewMessage] = useState("");
  const [previewType, setPreviewType] = useState("");
  const [ctas, setCtas] = useState([{ category: "", buttonTitle: "" }]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const handlePreviewUpdate = (e: any) => {
    setPreviewMessage(e.target.value);
  };

  const handleAddCta = () => {
    setCtas([...ctas, { category: "", buttonTitle: "" }]);
  };

  interface Cta {
    category: string;
    buttonTitle: string;
  }

  const handleCtaChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const updatedCtas = [...ctas];

    if (name === "category" || name === "buttonTitle") {
      updatedCtas[index][name] = value;
    }

    setCtas(updatedCtas);
  };

  const handleUploadTemplate = async (data: any) => {
    console.log(data);
    const res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(res);
  };

  console.log(watch("message"));

  return (
    <>
      <div className="flex-grow h-full w-full p-6">
        <Typography
          sx={{
            ...heading,
            color: "#008069",
            fontWeight: 600,
            lineHeight: "32px",
          }}
        >
          Fill up the form below
        </Typography>
        <form onSubmit={handleSubmit(handleUploadTemplate)}>
          <div className="grid grid-cols-2 gap-10">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" sx={{ ...subHeading, mt: 3 }}>
                Template Category
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <TextField
                fullWidth
                label=""
                select
                {...register("category")}
                name="catagory"
                variant="outlined"
                placeholder="Select a category"
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              >
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Utility">Utility</MenuItem>
                <MenuItem value="Authentication">Authentication</MenuItem>
              </TextField>
              <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
                Template Name
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                {...register("templateName", { required: true })}
                placeholder="Write Template name like this Wabuz_Message"
                error={!!errors.templateName}
                helperText={errors.templateName && "Template name is required"}
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              />{" "}
              <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
                Template Header
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Message"
                // {...register("header", { required: true })}
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              />
              <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
                Template Message
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Message"
                multiline
                {...register("message", { required: true })}
                rows={10}
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              />
              <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
                Template Footer
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Message"
                // {...register("footer", { required: true })}
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              />
              <Typography variant="h6" sx={{ ...subHeading, mt: 2 }}>
                Interactive Actions
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="actionType"
              >
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="None"
                />
                <FormControlLabel
                  value="call-to-action"
                  control={<Radio />}
                  label="Call-to-action"
                />
                <FormControlLabel
                  value="quickReply"
                  control={<Radio />}
                  label="Quick Reply"
                />
              </RadioGroup>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" sx={{ ...subHeading, mt: 2 }}>
                  Call to Action 1:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mt: "0.5rem",
                    mb: "0.8rem",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and type
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    mb: 1,
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Button Title"
                    name="buttonTitle"
                    // value={cta.buttonTitle}
                    // onChange={(e) => handleCtaChange(index, e)}
                    sx={{
                      backgroundColor: "#F0F7F6",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderWidth: "1px",
                          borderColor: "#008069",
                        },
                        "&:hover fieldset": {
                          borderColor: "#008069",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#008069",
                        },
                      },
                      "& .MuiSelect-icon": {
                        color: "#008069",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#757575",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    select
                    variant="outlined"
                    placeholder="Select a Category"
                    name="category"
                    // value={cta.category}
                    // onChange={(e) => handleCtaChange(index, e)}
                    sx={{
                      backgroundColor: "#F0F7F6",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderWidth: "1px",
                          borderColor: "#008069",
                        },
                        "&:hover fieldset": {
                          borderColor: "#008069",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#008069",
                        },
                      },
                      "& .MuiSelect-icon": {
                        color: "#008069",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#757575",
                      },
                    }}
                  >
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Utility">Utility</MenuItem>
                    <MenuItem value="Authentication">Authentication</MenuItem>
                  </TextField>
                </Box>
              </Box>
              <Typography
                onClick={handleAddCta}
                sx={{
                  cursor: "pointer",
                  color: "#008069",
                  fontWeight: 500,
                  mt: 2,
                }}
                className="border-[1px] border-[#008069] px-2 py-1 rounded-sm mt-2 text-[#008069] font-normal w-[20%] text-[1rem]"
              >
                + Add CTA
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Typography variant="h6" sx={{ ...subHeading, mt: 3 }}>
                Template Language
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <TextField
                fullWidth
                label=""
                select
                {...register("language")}
                variant="outlined"
                placeholder="Select a category"
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              >
                <MenuItem value="Category 1">English</MenuItem>
                <MenuItem value="Category 2">Hindi</MenuItem>
              </TextField>
              <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
                Template Type
              </Typography>
              <TextField
                fullWidth
                label=""
                {...register("type")}
                select
                variant="outlined"
                placeholder="Select a category"
                sx={{
                  backgroundColor: "#F0F7F6",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderWidth: "1px",
                      borderColor: "#008069",
                    },
                    "&:hover fieldset": {
                      borderColor: "#008069",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#008069",
                    },
                  },
                  "& .MuiSelect-icon": {
                    color: "#008069",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#757575",
                  },
                }}
              >
                <MenuItem value="Audio">Audio</MenuItem>
                <MenuItem value="Video">Video</MenuItem>
                <MenuItem value="Image">Image</MenuItem>
                <MenuItem value="Text">Text</MenuItem>
                <MenuItem value="Location">Location</MenuItem>
              </TextField>
              <Typography
                variant="h6"
                sx={{
                  ...subHeading,
                  mt: 3,
                  mb: 1,
                }}
              >
                Template Preview
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
              >
                Lorem Ipsum is simply dummy text of the printing and type
              </Typography>
              <Box
                sx={{
                  p: 2,
                  border: 1,
                  borderColor: "#008069",
                  borderRadius: 10,
                  height: "36.063rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  px: 10,
                  py: 4,
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    border: 2,
                    borderColor: "#008069",
                    borderRadius: 5,
                    bgcolor: "white",
                    boxShadow: 1,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {watch("message") ? (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {watch("message")}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      "your message will appear here..."
                    </Typography>
                  )}
                </Box>
              </Box>
              <button
                type="submit"
                className=" px-4 py-2 rounded-md mt-5 bg-[#008069] text-white font-[600] text-[1rem] mx-auto"
              >
                Save Template
              </button>
            </Box>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTemplate;
