import React, { useState, useEffect } from "react";
import { createGlobalStyle, styled } from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "./slices/userSlice";
import { Routes, Route } from "react-router-dom";
import Authorization from "./components/Authorization";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUp";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("/api/auth")
      .then((r) => r.json())
      .then((usersData) => dispatch(setUser(usersData)));
  };

  if (!user)
    return (
      <>
        <Header>Welcome To Story Vault</Header>
        <Prompt>Signup or Login to track your reading experience</Prompt>
        <Authorization />
      </>
    );

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body{
      background-color: black; 
      color:white;
    }
    `;

const Header = styled.h1`
  font-size: 350%;
  font-family: arial;
  color: white;
`;

const Prompt = styled.h2`
  padding-bottom: 50px;
  color: red;
`;
