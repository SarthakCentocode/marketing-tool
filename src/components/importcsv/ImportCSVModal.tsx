import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImportCSVModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Import CSV
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className="p-4 text-center">
          <p>Upload your Contacts CSV file below</p>
          <p className="text-sm text-gray-500">
            CSV must include Name, Whatsapp Number, Source & Tags.
          </p>
          <Button variant="outlined" className="mt-4" component="label">
            <input hidden type="file" accept=".csv" />
            Upload File
          </Button>
          <p className="mt-2 rounded-md">
            <a href="#" className="text-blue-500">
              Download Sample CSV
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImportCSVModal;
