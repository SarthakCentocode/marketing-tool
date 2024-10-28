// "use client";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useState } from "react";
// import { Field, useFormik } from "formik";
// import * as Yup from "yup";
// import {
//   Box,
//   FormControlLabel,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   TextField,
//   Typography,
// } from "@mui/material";

// const heading = {
//   fontSize: {
//     xl: "1.5rem",
//     lg: "1.5rem",
//     md: "1.3rem",
//     sm: "1.3rem",
//     xs: "1.3rem",
//   },
// };
// const subHeading = {
//   fontSize: {
//     xl: "1.25rem",
//     lg: "1.25rem",
//     md: "1rem",
//     sm: "1rem",
//     xs: "1rem",
//   },
//   fontWeight: 500,
//   lineHeight: "26px",
// };
// const validationSchema = Yup.object({
//   category: Yup.string().required("Category is required"),
//   language: Yup.string().required("Language is required"),
//   templateType: Yup.string().required("Template type is required"),
//   templateName: Yup.string().required("Template name is required"),
//   templateMessage: Yup.string().required("Template message is required"),
// });
// const AddTemplate = () => {

//   const [previewMessage, setPreviewMessage] = useState("");
//   const [previewType, setPreviewType] = useState("");
//    const[(ctas, setCtas)] = useState([{ category: "", buttonTitle: "" }]);
//   const formik = useFormik({
//     initialValues: {
//       category: "",
//       language: "",
//       templateType: "",
//       templateName: "",
//       templateMessage: "",
//       actionType: "none",
//       ctas: [{ category: "", buttonTitle: "" }],
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   const handlePreviewUpdate = (e: any) => {
//     formik.handleChange(e);
//     setPreviewMessage(e.target.value);
//   };

//     const handleAddCta = () => {
//     setCtas([...ctas, { category: "", buttonTitle: "" }]);
//   };

//   const handleCtaChange = (index:any, event:any) => {
//     const updatedCtas = [...ctas];
//     updatedCtas[index][event.target.name] = event.target.value;
//     setCtas(updatedCtas);
//   };
//   return (
//     <>
//       {/* Main Content */}

//       <div className="flex-grow h-full w-full p-6  ">
//         <Typography
//           sx={{
//             ...heading,
//             color: "#008069",
//             fontWeight: 600,
//             lineHeight: "32px",
//           }}
//         >
//           Fill up the form below
//         </Typography>

//         {/* Form Section */}
//         <Box
//           component="form"
//           sx={{
//             display: "grid",
//             gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//             gap: 6,
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           {/* Left Column */}
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <Typography variant="h6" sx={{ ...subHeading, mt: 3 }}>
//               Template Category
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and type
//             </Typography>
//             <TextField
//               fullWidth
//               label=""
//               select
//               variant="outlined"
//               placeholder="Select a category"
//               value={formik.values.category}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.category && Boolean(formik.errors.category)}
//               helperText={formik.touched.category && formik.errors.category}
//               sx={{
//                 backgroundColor: "#F0F7F6",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderWidth: "1px",
//                     borderColor: "#008069",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#008069",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#008069",
//                   },
//                 },
//                 "& .MuiSelect-icon": {
//                   color: "#008069",
//                 },
//                 "& .MuiInputBase-input::placeholder": {
//                   color: "#757575",
//                 },
//               }}
//             >
//               <MenuItem value="Marketing">Marketing</MenuItem>
//               <MenuItem value="Utility">Utility</MenuItem>
//               <MenuItem value="Authentication">Authentication</MenuItem>
//             </TextField>
//             <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
//               Template Name
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Write Template name like this Wabuz_Message"
//               name="templateName"
//               value={formik.values.templateName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.templateName &&
//                 Boolean(formik.errors.templateName)
//               }
//               helperText={
//                 formik.touched.templateName && formik.errors.templateName
//               }
//               sx={{
//                 backgroundColor: "#F0F7F6",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderWidth: "1px",
//                     borderColor: "#008069",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#008069",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#008069",
//                   },
//                 },
//                 "& .MuiSelect-icon": {
//                   color: "#008069",
//                 },
//                 "& .MuiInputBase-input::placeholder": {
//                   color: "#757575",
//                 },
//               }}
//             />
//             <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
//               Template Message
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and type
//             </Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Message"
//               multiline
//               rows={10}
//               name="templateMessage"
//               value={formik.values.templateMessage}
//               onChange={handlePreviewUpdate}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.templateMessage &&
//                 Boolean(formik.errors.templateMessage)
//               }
//               helperText={
//                 formik.touched.templateMessage && formik.errors.templateMessage
//               }
//               sx={{
//                 backgroundColor: "#F0F7F6",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderWidth: "1px",
//                     borderColor: "#008069",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#008069",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#008069",
//                   },
//                 },
//                 "& .MuiSelect-icon": {
//                   color: "#008069",
//                 },
//                 "& .MuiInputBase-input::placeholder": {
//                   color: "#757575",
//                 },
//               }}
//             />{" "}
//             <Typography variant="h6" sx={{ ...subHeading, mt: 2 }}>
//               Interactive Actions
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and type
//             </Typography>
//             <RadioGroup
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="actionType"
//               value={formik.values.actionType}
//               onChange={formik.handleChange}
//             >
//               <FormControlLabel value="none" control={<Radio />} label="None" />
//               <FormControlLabel
//                 value="Call-to-action"
//                 control={<Radio />}
//                 label="Call-to-action"
//               />
//               <FormControlLabel
//                 value="quickReply"
//                 control={<Radio />}
//                 label="Quick Reply"
//               />
//             </RadioGroup>
//             {formik.values.actionType === "call-to-action " && (
//               <>
//               <Box key={index} sx={{mt:2}}></Box>
//                 <Typography variant="h6" sx={{ ...subHeading, mt: 2 }}>
//                   Call to Action 1 {index+1}:
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
//                 >
//                   Lorem Ipsum is simply dummy text of the printing and type
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     gap: 1,
//                   }}
//                 >
//                   <TextField
//                     fullWidth
//                     label="Select Category"
//                     select
//                     variant="outlined"
//                     placeholder="category"
//                     name="category1"
//                     onChange={formik.handleChange}
//                     value={formik.values.category}
//                     error={
//                       formik.touched.category && Boolean(formik.errors.category)
//                     }
//                     helperText={formik.touched.category}
//                     sx={{
//                       backgroundColor: "#F0F7F6",
//                       "& .MuiOutlinedInput-root": {
//                         "& fieldset": {
//                           borderWidth: "1px",
//                           borderColor: "#008069",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "#008069",
//                         },
//                         "&.Mui-focused fieldset": {
//                           borderColor: "#008069",
//                         },
//                       },
//                       "& .MuiSelect-icon": {
//                         color: "#008069",
//                       },
//                       "& .MuiInputBase-input::placeholder": {
//                         color: "#757575",
//                       },
//                     }}
//                   >
//                     <MenuItem value="Category 1">Category 1</MenuItem>
//                     <MenuItem value="Category 2">Category 2</MenuItem>
//                   </TextField>
//                   <TextField
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Button Title"
//                     sx={{
//                       backgroundColor: "#F0F7F6",
//                       "& .MuiOutlinedInput-root": {
//                         "& fieldset": {
//                           borderWidth: "1px",
//                           borderColor: "#008069",
//                         },
//                         "&:hover fieldset": {
//                           borderColor: "#008069",
//                         },
//                         "&.Mui-focused fieldset": {
//                           borderColor: "#008069",
//                         },
//                       },
//                       "& .MuiSelect-icon": {
//                         color: "#008069",
//                       },
//                       "& .MuiInputBase-input::placeholder": {
//                         color: "#757575",
//                       },
//                     }}
//                   />
//                 </Box>

//                <button onClick={handleAddCta} className="border-[1px] border-[#008069] px-2 py-1 rounded-md mt-2 text-[#008069] font-semibold w-[20%] text-[1rem] ">
//               + Add CTA
//             </button>
//             </>
//             )}
//             {/* <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   gap: 1,
//                   mt: 1,
//                 }}
//               >
//                 <TextField
//                   fullWidth
//                   label=""
//                   select
//                   variant="outlined"
//                   placeholder="Select a category"
//                   sx={{
//                     backgroundColor: "#F0F7F6",
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": {
//                         borderWidth: "1px",
//                         borderColor: "#008069",
//                       },
//                       "&:hover fieldset": {
//                         borderColor: "#008069",
//                       },
//                       "&.Mui-focused fieldset": {
//                         borderColor: "#008069",
//                       },
//                     },
//                     "& .MuiSelect-icon": {
//                       color: "#008069",
//                     },
//                     "& .MuiInputBase-input::placeholder": {
//                       color: "#757575",
//                     },
//                   }}
//                 >
//                   <MenuItem value="Category 1">Category 1</MenuItem>
//                   <MenuItem value="Category 2">Category 2</MenuItem>
//                 </TextField>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Phone Number"
//                   sx={{
//                     backgroundColor: "#F0F7F6",
//                     "& .MuiOutlinedInput-root": {
//                       "& fieldset": {
//                         borderWidth: "1px",
//                         borderColor: "#008069",
//                       },
//                       "&:hover fieldset": {
//                         borderColor: "#008069",
//                       },
//                       "&.Mui-focused fieldset": {
//                         borderColor: "#008069",
//                       },
//                     },
//                     "& .MuiSelect-icon": {
//                       color: "#008069",
//                     },
//                     "& .MuiInputBase-input::placeholder": {
//                       color: "#757575",
//                     },
//                   }}
//                 />
//               </Box> */}

//           </Box>

//           {/* Right Column */}
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <Typography variant="h6" sx={{ ...subHeading, mt: 3 }}>
//               Template Language
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and type
//             </Typography>
//             <TextField
//               fullWidth
//               label=""
//               select
//               variant="outlined"
//               placeholder="Select a category"
//               sx={{
//                 backgroundColor: "#F0F7F6",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderWidth: "1px",
//                     borderColor: "#008069",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#008069",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#008069",
//                   },
//                 },
//                 "& .MuiSelect-icon": {
//                   color: "#008069",
//                 },
//                 "& .MuiInputBase-input::placeholder": {
//                   color: "#757575",
//                 },
//               }}
//             >
//               <MenuItem value="Category 1">Category 1</MenuItem>
//               <MenuItem value="Category 2">Category 2</MenuItem>
//             </TextField>
//             <Typography variant="h6" sx={{ ...subHeading, mt: 3, mb: 1 }}>
//               Template Type
//             </Typography>
//             <TextField
//               fullWidth
//               label=""
//               select
//               variant="outlined"
//               placeholder="Select a category"
//               sx={{
//                 backgroundColor: "#F0F7F6",
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderWidth: "1px",
//                     borderColor: "#008069",
//                   },
//                   "&:hover fieldset": {
//                     borderColor: "#008069",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#008069",
//                   },
//                 },
//                 "& .MuiSelect-icon": {
//                   color: "#008069",
//                 },
//                 "& .MuiInputBase-input::placeholder": {
//                   color: "#757575",
//                 },
//               }}
//             >
//               <MenuItem value="Category 1">Category 1</MenuItem>
//               <MenuItem value="Category 2">Category 2</MenuItem>
//             </TextField>

//             {/* Template Preview */}
//             <Typography
//               variant="h6"
//               sx={{
//                 ...subHeading,
//                 mt: 3,
//                 mb: 1,
//               }}
//             >
//               Template Preview
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{ color: "text.secondary", mt: "0.5rem", mb: "0.8rem" }}
//             >
//               Lorem Ipsum is simply dummy text of the printing and type
//             </Typography>
//             <Box
//               sx={{
//                 p: 2,
//                 border: 1,
//                 borderColor: "#008069",
//                 borderRadius: 10,
//                 height: "36.063rem",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 px: 10,
//                 py: 4,
//               }}
//             >
//               <Box
//                 sx={{
//                   p: 2,
//                   border: 2,
//                   borderColor: "#008069",
//                   borderRadius: 5,
//                   bgcolor: "white",
//                   boxShadow: 1,
//                   width: "100%",
//                   height: "100%",
//                 }}
//               >
//                 <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                   📢 Hey [Name], looking to elevate your [business/service]? 🚀
//                   Let us help you with [specific offering]!{" "}
//                   <strong>Special offer</strong> for a limited time. Don't miss
//                   out!
//                 </Typography>
//               </Box>
//             </Box>
//             <button className=" px-4 py-2 rounded-md mt-5 bg-[#008069] text-white font-[600] text-[1rem] mx-auto">
//               Save Template
//             </button>
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// };

// export default AddTemplate;
"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
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
const validationSchema = Yup.object({
  category: Yup.string().required("Category is required"),
  language: Yup.string().required("Language is required"),
  templateType: Yup.string().required("Template type is required"),
  templateName: Yup.string().required("Template name is required"),
  templateMessage: Yup.string().required("Template message is required"),
});
const AddTemplate = () => {
  const [previewMessage, setPreviewMessage] = useState("");
  const [previewType, setPreviewType] = useState("");
  const [ctas, setCtas] = useState([{ category: "", buttonTitle: "" }]);

  const formik = useFormik({
    initialValues: {
      category: "",
      language: "",
      templateType: "",
      templateName: "",
      templateMessage: "",
      actionType: "none",
      ctas: [{ category: "", buttonTitle: "" }],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handlePreviewUpdate = (e: any) => {
    formik.handleChange(e);
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
        <Box
          component="form"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
          }}
          noValidate
          autoComplete="off"
        >
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
              name="category"
              variant="outlined"
              placeholder="Select a category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
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
              placeholder="Write Template name like this Wabuz_Message"
              name="templateName"
              value={formik.values.templateName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.templateName &&
                Boolean(formik.errors.templateName)
              }
              helperText={
                formik.touched.templateName && formik.errors.templateName
              }
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
              rows={10}
              name="templateMessage"
              value={formik.values.templateMessage}
              onChange={handlePreviewUpdate}
              onBlur={formik.handleBlur}
              error={
                formik.touched.templateMessage &&
                Boolean(formik.errors.templateMessage)
              }
              helperText={
                formik.touched.templateMessage && formik.errors.templateMessage
              }
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
              value={formik.values.actionType}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="none" control={<Radio />} label="None" />
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
            {formik.values.actionType === "call-to-action" && (
              <>
                {ctas.map((cta, index) => (
                  <Box key={index} sx={{ mt: 2 }}>
                    <Typography variant="h6" sx={{ ...subHeading, mt: 2 }}>
                      Call to Action {index + 1}:
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
                        value={cta.buttonTitle}
                        onChange={(e) => handleCtaChange(index, e)}
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
                        value={cta.category}
                        onChange={(e) => handleCtaChange(index, e)}
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
                        <MenuItem value="Authentication">
                          Authentication
                        </MenuItem>
                      </TextField>
                    </Box>
                  </Box>
                ))}
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
              </>
            )}
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {previewMessage || "your message will appear here..."}
                </Typography>
              </Box>
            </Box>
            <button className=" px-4 py-2 rounded-md mt-5 bg-[#008069] text-white font-[600] text-[1rem] mx-auto">
              Save Template
            </button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default AddTemplate;
