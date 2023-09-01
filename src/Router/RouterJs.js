import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../Components/Contact";
import Blog from "../Components/Pages/Blog";

export default function RouterJs() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog>} />
      </Routes>
    </Router>
  );
}
