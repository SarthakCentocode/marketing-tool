import * as React from "react";
import { useEffect, useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Box,
  Typography,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import moment from "moment";

interface Column {
  id:
    | "templateName"
    | "category"
    | "status"
    | "type"
    | "quality"
    | "created_at"
    | "action";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "templateName", label: "Name", minWidth: 170 },
  { id: "category", label: "Category", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 110,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "type",
    label: "Type",
    minWidth: 110,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "quality",
    label: "Quality",
    minWidth: 110,
    align: "center",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "created_at",
    label: "Created On",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 110,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  category: string;
  status: string;
  type: string;
  quality: string;
  created_on: string;
  action: string;
}

function createData(
  name: string,
  category: string,
  status: string,
  type: string,
  quality: string,
  created_on: string,
  action: string
): Data {
  return { name, category, status, type, quality, created_on, action };
}

const rows = [
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
  createData(
    "Regular text column",
    "Broadcast",
    "SENT",
    "Text",
    "High",
    "Oct 4, 2024, 06:55PM",
    ""
  ),
];

export default function StickyHeadTable() {
  const [isTemplates, setIsTemplates] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetch("/api/read", {
          method: "GET",
        });
        const data = await res.json();
        setIsTemplates(data);
      } catch (err) {
        console.log(err);
      }
    };
    response();
  }, []);

  console.log("---------->>>>>>>>>>>", isTemplates);

  return (
    <div className="w-[100%]">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ width: "100%", border: "1px solid #00806933" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: "none",
              },
            }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#CDE7E2",
                      color: "#667085",
                    }}
                  >
                    {column.label}
                    <ArrowDownwardIcon
                      sx={{ fonttype: 16, ml: 1, color: "#667085" }} // Icon styling (optional)
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isTemplates.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          {column.id === "status" ? (
                            <TableCell key={column.id} align={column.align}>
                              <Box
                                sx={{
                                  // width:"4.5rem",
                                  mx: 4,
                                  py: "3px",
                                  bgcolor: "#10984BD4",
                                  color: "white",
                                  borderRadius: "4px",
                                }}
                              >
                                <Typography sx={{ fontSize: "0.75rem" }}>
                                  {value}
                                </Typography>
                              </Box>
                            </TableCell>
                          ) : column.id === "created_at" ? (
                            <TableCell key={column.id} align={column.align}>
                              <Typography sx={{ fontSize: "0.875rem" }}>
                                {moment(value).format("MMM DD YYYY, hh:mm a ")}
                              </Typography>
                            </TableCell>
                          ) : (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number" ? (
                                column.format(value)
                              ) : (
                                <Typography sx={{ fontSize: "0.875rem" }}>
                                  {value}
                                </Typography>
                              )}
                            </TableCell>
                          )}
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </div>
  );
}
