"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function auth() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen">
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid
          size={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Create an account</Typography>
              <Typography>
                Sign up for free and join a thriving community of professionals.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ mb: 1 }}>Email</Typography>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                sx={{ height: 56 }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography
                className="text-left  text-[#666666] "
                sx={{ mb: "2%" }}
              >
                Password
              </Typography>
              <FormControl
                size="small"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "56px", // Sets the height
                  },
                }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  // {...register("password", {
                  //   required: "Password is required",
                  //   minLength: {
                  //     value: 8,
                  //     message: "Password must be at least 8 characters",
                  //   },
                  // })}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        size="large"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {!showPassword ? (
                          <VisibilityOff sx={{ width: 20, height: 20 }} />
                        ) : (
                          <Visibility sx={{ width: 20, height: 20 }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Button
              sx={{
                borderColor: "black",
                bgcolor: "#084837",
                fontWeight: "bold",
                width: "100%",
                borderRadius: "20rem",
                px: "5rem",
                py: "1rem",
                "&:hover": {
                  background: "#084844",
                },
                my: "3%",
                textTransform: "capitalize",
              }}
              type="submit"
              variant="contained"
            >
              Create Account
            </Button>
          </Box>
        </Grid>
        <Grid size={7}></Grid>
      </Grid>
    </div>
  );
}
