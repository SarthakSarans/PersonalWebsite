import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import PdfViewer from "./components/PdfViewer"; // Import PdfViewer component
import { Analytics } from "@vercel/analytics/react";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main components displayed on the homepage */}
        <Route
          path="/"
          element={
            <>
              
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Analytics />
              <Contact />
            </>
          }
        />
        {/* Separate route for the PDF viewer */}
        <Route path="/pdf-viewer" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}
