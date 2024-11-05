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
import { useState } from "react";
import { useForm } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface formData {
  email: string;
  password: string;
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

export default function SignIn() {
  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<formData>();

  const handleClickShowCreatePassword = () =>
    setShowCreatePassword((createShow) => !createShow);

  const handleMouseCreateDownPassword = (
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
          Sign In
        </Typography>
        <Typography sx={{ ...labelText }}>
          Sign in for free and join a thriving community of professionals.
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <Typography
            sx={{
              mb: "2%",
              ...labelText,
            }}
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
          Sign in
        </Button>
      </form>
    </>
  );
}
