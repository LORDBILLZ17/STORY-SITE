import React from "react";
import Hero from "./Hero";
import { Route, Routes } from "react-router-dom";
import StoriesSection from "./Stories";
import Layout from "./Layout";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import UserProfile from "./UserProfile";
import About from "./About";
import Contact from "./Contact";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Stories" element={<StoriesSection />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
