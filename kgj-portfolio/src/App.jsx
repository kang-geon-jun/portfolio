import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./apps/Header";
import Home from "./pages/Home";
import FallingCherryBlossom from "./components/designs/FallingCherryBlossom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-purple-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FallingCherryBlossom />
      </div>
      <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<Home />} />
        <Route path="/portfolio/skills" element={<Home />} />
        <Route path="/portfolio/projects" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
