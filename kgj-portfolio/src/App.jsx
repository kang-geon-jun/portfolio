import "./App.css";
import { Route, Routes } from "react-router-dom";

import FallingCherryBlossom from "./components/designs/FallingCherryBlossom";
import Header from "./apps/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-purple-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FallingCherryBlossom />
      </div>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/skills" element={<Skill />} />
        <Route path="/portfolio/projects" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
