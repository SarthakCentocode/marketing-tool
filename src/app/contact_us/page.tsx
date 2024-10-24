"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  Paper,
  Typography,
} from "@mui/material";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";

// Define the type for each row item
interface Row {
  id: number;
  name: string;
  mobileNo: string;
  source: string;
  tags: string;
}

// Sample data with defined type
const rows: Row[] = [
  {
    id: 1,
    name: "John Doe",
    mobileNo: "123-456-7890",
    source: "Website",
    tags: "New Lead",
  },
  {
    id: 2,
    name: "Jane Smith",
    mobileNo: "098-765-4321",
    source: "Referral",
    tags: "Follow Up",
  },
  {
    id: 3,
    name: "Alice Johnson",
    mobileNo: "456-123-7890",
    source: "Social Media",
    tags: "Interested",
  },
  // Add more data as needed
];

const ContactUs = () => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center">
        <Typography
          sx={{
            color: "#191D23",
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: "32px",
          }}
        >
          Broadcast Your Message
        </Typography>
        <div className="flex items-center gap-2">
          <button className="font-[600] text-[1rem] bg-[#047857] text-white px-4 py-1 rounded-sm">
            Broadcast
          </button>
          <button className="border-[1.5px] border-[#008069] font-[600] text-[1rem] px-4 py-1 rounded-sm text-[#008069]">
            Add Contact
          </button>
          <button className="border-[1.5px] border-[#008069] font-[600] text-[1rem] px-4 py-1 rounded-sm text-[#008069]">
            Import CSV
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center bg-[#F7F8F9] rounded-sm p-3 mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or number"
            className="w-[343px] border-[1.5px]  pl-10 pr-4 py-2  rounded-md  "
          />
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        <button className="flex gap-2 justify-around items-center font-[600] border-[1.5px] text-[1rem]  text-[#64748B] bg-white border-[#E7EAEE] px-4 py-1 rounded-md">
          <CiFilter style={{ fontSize: "1rem", fontWeight: "bold" }} />
          Filter
        </button>
      </div>
      <TableContainer  sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < rows.length
                  }
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all rows" }}
                />
              </TableCell>
              <TableCell>
                <TableSortLabel>Name</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Mobile No</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Source</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Tags</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${row.id}`;

              return (
                <TableRow
                  hover
                  onClick={() => handleClick(row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </TableCell>
                  <TableCell component="th" id={labelId} scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.mobileNo}</TableCell>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>{row.tags}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactUs;
