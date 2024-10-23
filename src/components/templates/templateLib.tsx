import { FiSearch } from "react-icons/fi";
import Card from "../card";
import { IconButton, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import back from "@/public/icons/back.svg";
import backward from "@/public/icons/backward.svg";
import forward from "@/public/icons/forward.svg";
import front from "@/public/icons/front.svg";
import Image from "next/image";

const textSize = {
  fontSize: {
    xl: "0.875rem",
    lg: "0.875rem",
    md: "0.875rem",
    sm: "0.875rem",
    xs: "0.875rem",
  },
  fontWeight:"400",
  lineHeight: "20px"
};

export default function TemplatesLib() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-12 ">
          <div className="col-span-2 pe-3">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`mb-4 py-2 px-3 flex justify-between items-center w-full ${
                    index === 0 ? "bg-[#F8FDFC]" : ""
                  } rounded-xl`}
                >
                  <h4 className="text-[15px]">Promotional</h4>
                  <h4 className="bg-[#008069] text-[15px] rounded-2xl font-bold px-3 text-white">
                    12
                  </h4>
                </div>
              ))}
            <h4 className="text-[15px] text-[#888282]">More</h4>
          </div>
          <div className="col-span-10">
            <div className="grid grid-cols-3 xl:gap-4 lg:gap-2 md:gap-2 ">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <Card
                    key={index}
                    title="Promotional"
                    badgeText="Festival"
                    button="Preview"
                    description="Hey [Name], looking to elevate your [business/service]? Let us help you with [specific offering]! Special offer for a limited time. Don't miss out! Contact us at [Contact Info] now!"
                  />
                ))}
            </div>
            <div className="my-3 flex justify-between items-center">
              <div className="flex items-center justify-center gap-3">
                <Typography
                  sx={{
                    ...textSize,
                    color:"#5B5B5B",
                    
                  }}
                >
                  Items per page
                </Typography>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={12} // Controlled component value
                  defaultValue={12} // Set the default value to 12
                  IconComponent={KeyboardArrowDownIcon} // Custom dropdown arrow icon
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" }, // Remove border
                    "& .MuiSelect-icon": {
                      color: "#5B5B5B",
                      fontSize: "0.875rem", // Set icon size
                    },
                    "& .MuiSelect-select": {
                      paddingRight: "24px",
                      fontSize: "0.875rem", 
                      color :"#5B5B5B"
                    },
                  }}
                  // onChange={handleChange} // Uncomment and implement if needed
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>{" "}
              </div>
              <Typography
                sx={{
                  ...textSize,
                  color:"#5B5B5B"
                }}
              >
                1-12 of 1,250
              </Typography>
              <div className="flex items-center ">
                <IconButton
                  sx={{ ...textSize, "&:hover": { borderRadius: "4px" } }}
                >
                  <Image src={forward} alt="forward" />
                </IconButton>
                <IconButton
                  sx={{ ...textSize, "&:hover": { borderRadius: "4px" } }}
                >
                  <Image src={front} alt="front" />
                </IconButton>
                <IconButton
                  sx={{ ...textSize, "&:hover": { borderRadius: "4px" } }}
                >
                  <Image src={back} alt="back" />
                </IconButton>
                <IconButton
                  sx={{ ...textSize, "&:hover": { borderRadius: "4px" } }}
                >
                  <Image src={backward} alt="backward" />
                </IconButton>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
