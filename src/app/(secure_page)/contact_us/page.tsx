"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Typography,
  Modal,
  Box,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

interface Row {
  id: number;
  name: string;
  mobileNo: string;
  source: string;
  tags: string;
}

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
];

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

function AddContact({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "600" }}>
            Create Contact
          </Typography>
          <IconButton onClick={handleClose}>
            <MdClose style={{ color: "red", fontSize: "1.5rem" }} />
          </IconButton>
        </Box>

        {/* Form Fields */}
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Name*"
            placeholder="Enter Your Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Select defaultValue="India" sx={{ width: "30%" }}>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
            </Select>
            <TextField
              label="Mobile Number*"
              placeholder="xxxx xxxxx"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Box>
          <TextField
            label="Source"
            placeholder="Source"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Tags"
            placeholder="Give some Tags"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Box>

        {/* Add Contact Button */}
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3, textTransform: "none", fontWeight: "600" }}
        >
          + Add Contact
        </Button>
      </Box>
    </Modal>
  );
}

function ImportCSVModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "600" }}>
            Import CSV
          </Typography>
          <IconButton onClick={handleClose}>
            <MdClose style={{ color: "red", fontSize: "1.5rem" }} />
          </IconButton>
        </Box>

        {/* Form Fields */}
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 2 }}>
            Select the CSV file that you want to import.
          </Typography>
          <Button variant="outlined" component="label" fullWidth>
            Upload CSV File
            <input type="file" hidden />
          </Button>
        </Box>

        {/* Import CSV Button */}
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3, textTransform: "none", fontWeight: "600" }}
        >
          Import
        </Button>
      </Box>
    </Modal>
  );
}

const ContactUs = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [open, setOpen] = useState({
    modalName: "",
    open: false,
  });

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleModalClick = (modalName: string) => {
    setOpen({
      modalName: modalName,
      open: true,
    });
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
          <Button
            onClick={() => handleModalClick("broadcast")}
            variant="contained"
            sx={{
              backgroundColor: "#047857",
              fontWeight: "600",
              textTransform: "none",
              padding: "6px 16px",
            }}
          >
            Broadcast
          </Button>
          <Button
            onClick={() => handleModalClick("add_contact")}
            variant="outlined"
            sx={{
              borderColor: "#008069",
              color: "#008069",
              fontWeight: "600",
              textTransform: "none",
              padding: "6px 16px",
            }}
          >
            + Add Contact
          </Button>
          <Button
            onClick={() => handleModalClick("import_csv")}
            variant="outlined"
            sx={{
              borderColor: "#008069",
              color: "#008069",
              fontWeight: "600",
              textTransform: "none",
              padding: "6px 16px",
            }}
          >
            Import CSV
          </Button>
        </div>
      </div>

      {/* Search and Filter Section */}
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

      {/* Table */}
      <TableContainer sx={{ mt: 4 }}>
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
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isItemSelected = isSelected(row.id);
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
                    <Checkbox checked={isItemSelected} />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.mobileNo}</TableCell>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>{row.tags}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modals */}
      <AddContact
        open={open.modalName === "add_contact" && open.open}
        handleClose={() => setOpen({ modalName: "", open: false })}
      />
      <ImportCSVModal
        open={open.modalName === "import_csv" && open.open}
        handleClose={() => setOpen({ modalName: "", open: false })}
      />
    </div>
  );
};

export default ContactUs;
