import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://luna1.co/dc739c.png" alt="" />
        <h1>Sign in to the DK Lab</h1>
        <p>dk.slack.com</p>

        <Button
          onClick={signIn}
          variant="contained"
          color="error"
          endIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: capitalize !important;
    color: white;
  }
`;
