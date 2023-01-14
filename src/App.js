import React from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
