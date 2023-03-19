import React, {useState} from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "./api/firebase";
export default function App() {

  const [user, setuser] = useState(null)

  onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user)
      } 
    });

  return (
    <>
      <BrowserRouter>
          <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
