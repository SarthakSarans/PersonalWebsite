
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Analytics } from "@vercel/analytics/react"
export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Analytics />
    </>
  )
}