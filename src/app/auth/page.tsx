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
import Link from "next/link";
import Image from "next/image";
import googleLogo from "@/public/icons/google.svg";
import facebookLogo from "@/public/icons/facebook.svg";
import loginImage from "@/public/loginImage.png";
import { useForm } from "react-hook-form";

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

interface formData {
  name: string;
  email: string;
  password: string;
  wNumber: number;
}

export default function auth() {
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
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
    <div className="h-screen">
      <Grid container sx={{ height: "100%" }}>
        <Grid
          size={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: "5%",
            px: "2%",
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
              <Box sx={{ mt: 1, ...labelText }}>
                <Typography
                  className="text-left  text-[#666666] "
                  sx={{ mb: "2%", ...labelText }}
                >
                  Name
                </Typography>
                <TextField
                  variant="outlined"
                  {...register("name", { required: true })}
                  fullWidth
                  type="text"
                  sx={{ height: "56px" }}
                />
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
              <Box sx={{ mt: 1, ...labelText }}>
                <Typography sx={{ mb: "2%", ...labelText }}>
                  Personal Whatsapp Number
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  type="text"
                  {...register("wNumber", { required: true })}
                  sx={{ height: "56px" }}
                />
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
            <Typography
              sx={{
                fontSize: {
                  xl: "0.9rem",
                  lg: "0.9rem",
                  md: "0.8rem",
                  sm: "0.5rem",
                  xs: "0.5rem",
                },
                color: "#666666",
                fontWeight: 400,
                textAlign: "center",
                mt: "2%",
                lineHeight: "18.5px",
              }}
            >
              Already a user?{" "}
              <Link href="#" className="text-[#084837]">
                Sign in
              </Link>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                gap: 3,
                mt: 2,
              }}
            >
              <hr
                style={{ flex: 1, border: "none", borderTop: "2px solid #ccc" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    xl: "1rem",
                    lg: "1rem",
                    md: "0.8rem",
                    sm: "0.5rem",
                    xs: "0.5rem",
                  },
                  fontWeight: "thin",
                  color: "#666666",
                  lineHeight: "19.5px",
                }}
              >
                OR
              </Typography>
              <hr
                style={{ flex: 1, border: "none", borderTop: "2px solid #ccc" }}
              />
            </Box>

            <Button
              sx={{
                borderColor: "#084837",
                fontWeight: "bold",
                color: "#084837",
                width: "100%",
                borderRadius: "20rem",
                py: "1rem",
                mt: "3%",
                textTransform: "capitalize",
                gap: 1,
              }}
              type="submit"
              variant="outlined"
            >
              <Image src={googleLogo} alt="Google" width={20} height={20} />
              Continue with Google
            </Button>
            <Button
              sx={{
                borderColor: "#084837",
                fontWeight: "bold",
                color: "#084837",
                width: "100%",
                mt: "3%",
                borderRadius: "20rem",
                py: "1rem",
                textTransform: "capitalize",
                gap: 1,
              }}
              variant="outlined"
            >
              <Image src={facebookLogo} alt="facebook" width={20} height={20} />
              Continue with Facebook
            </Button>
          </Box>
        </Grid>
        <Grid size={7} sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#084837",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "15%",
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(-26.84deg, #EDF2F700, rgba(247, 250, 252, 0.4))",
              }}
              className="rounded-full w-[50rem] h-[50rem] bg-white absolute top-[-25rem] right-[-20rem]"
            />
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xl: "2.5rem",
                    lg: "2.5rem",
                    md: "2.3rem",
                    sm: "2rem",
                    xs: "2rem",
                  },
                  fontWeight: "bold",
                  color: "#ffffff",
                  textAlign: "center",
                  lineHeight: "22px",
                }}
              >
                Introducing Waptoz
              </Typography>
              <Typography
                variant="body2"
                alignItems="center"
                sx={{
                  fontSize: {
                    xl: "1.25rem",
                    lg: "1.25rem",
                    md: "1rem",
                    sm: "1rem",
                    xs: "1rem",
                  },
                  color: "#ffffff",
                  textAlign: "center",
                  fontWeight: 400,
                  lineHeight: "27.7px",
                  px: "10%",
                  mt: "4%",
                }}
              >
                Use Waptoz, the AI-powered CRM for WhatsApp marketing, to make
                informed decisions and gain insights that drive success!
              </Typography>
            </Box>
            <Image
              className="mt-[20%]"
              src={loginImage}
              alt="login image"
              width={600}
              height={600}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
