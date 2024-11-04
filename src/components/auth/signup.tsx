"use client";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
interface formData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  countryCode: string;
  phoneNumber: number;
}

const labelText = {
  fontSize: {
    xl: "1rem",
    lg: "1rem",
    md: "0.8rem",
    sm: "0.5rem",
    xs: "0.5rem",
  },
  color: "#666666",
  fontWeight: 400,
  textAlign: "left",
};

export default function SignUp() {
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<formData>();

  const handleClickShowCreatePassword = () =>
    setShowCreatePassword((createShow) => !createShow);
  const handleClickShowConfPassword = () =>
    setShowConfPassword((confShow) => !confShow);

  const handleMouseCreateDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseConfDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFormSubmit = (data: formData) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#084837",
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: "38.73px",
          }}
        >
          Create an account
        </Typography>
        <Typography sx={{ ...labelText }}>
          Sign up for free and join a thriving community of professionals.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
          <Box sx={{ mt: 1, ...labelText }}>
            <Typography
              className="text-left  text-[#666666] "
              sx={{ mb: "2%", ...labelText }}
            >
              First Name*
            </Typography>
            <TextField
              variant="outlined"
              {...register("firstName", { required: true })}
              fullWidth
              type="text"
              sx={{ height: "56px" }}
            />
          </Box>
          <Box sx={{ mt: 1, ...labelText }}>
            <Typography
              className="text-left  text-[#666666] "
              sx={{ mb: "2%", ...labelText }}
            >
              Last Name
            </Typography>
            <TextField
              variant="outlined"
              {...register("lastName", { required: true })}
              fullWidth
              type="text"
              sx={{ height: "56px" }}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 1, ...labelText }}>
          <Typography sx={{ mb: "2%", ...labelText }}>Email</Typography>
          <TextField
            variant="outlined"
            fullWidth
            type="email"
            {...register("email", { required: true })}
            sx={{ height: "56px" }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box sx={{ mt: 1, ...labelText }}>
            <Typography sx={{ mb: "2%", ...labelText }}>
              Country code*
            </Typography>
            <Controller
              name="countryCode"
              control={control}
              defaultValue="+91"

              render={({ field }) => (
                <PhoneInput
                  {...field}
                  value={field.value ? String(field.value) : ""}
                  onChange={(value) => field.onChange(value)}
                  country={"in"}
                  countryCodeEditable={false}
                  buttonStyle={{
                    backgroundColor: "#FFFF",
                    transition: "none",
                    height: "56px",
                  }}
                  inputStyle={{
                    height: "56px",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ mt: 1, ...labelText }}>
            <Typography sx={{ mb: "2%", ...labelText }}>
              Personal Whatsapp Number*
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              type="text"
              {...register("phoneNumber", { required: true })}
              sx={{ height: "56px" }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 1, ...labelText }}>
          <Typography
            sx={{
              mb: "2%",
              ...labelText,
            }}
          >
            Create Password
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
              type={showCreatePassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    size="large"
                    onClick={handleClickShowCreatePassword}
                    onMouseDown={handleMouseCreateDownPassword}
                  >
                    {!showCreatePassword ? (
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
        <Box sx={{ mt: 1 }}>
          <Typography sx={{ mb: "2%", ...labelText }}>
            Confirm Password
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
              type={showConfPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    size="large"
                    onClick={handleClickShowConfPassword}
                    onMouseDown={handleMouseConfDownPassword}
                  >
                    {!showConfPassword ? (
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
          typeof="submit"
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
      </form>
    </>
  );
}
