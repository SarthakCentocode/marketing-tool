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
import Link from "next/link";
import Image from "next/image";
import googleLogo from "@/public/icons/google.svg";
import facebookLogo from "@/public/icons/facebook.svg";
import loginImage from "@/public/loginImage.png";
import { useForm } from "react-hook-form";
import SignUp from "@/components/auth/signup";
import SignIn from "@/components/auth/signin";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  const loginUserWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // const resData = jwtDecode(codeResponse.access_token);
      console.log(codeResponse);
    },
  });

  const responseFacebook = (response: any) => {
    console.log(response);
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
            {isSignUp ? <SignUp /> : <SignIn />}
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
              {isSignUp ? (
                <>
                  Already a user?{" "}
                  <button
                    className="text-[#084837] hover:border-b-[1px] hover:border-[#084837]"
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  New user?{" "}
                  <button
                    className="text-[#084837] hover:border-b-[1px] hover:border-[#084837]"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </>
              )}
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
              onClick={() => loginUserWithGoogle}
              variant="outlined"
            >
              <Image src={googleLogo} alt="Google" width={20} height={20} />
              Continue with Google
            </Button>
            <FacebookLogin
              appId="1088597931155576"
              autoLoad
              callback={responseFacebook}
              render={(renderProps: any) => (
                <Button
                  onClick={renderProps.onClick}
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
                  <Image
                    src={facebookLogo}
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                  Continue with Facebook
                </Button>
              )}
            />
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
