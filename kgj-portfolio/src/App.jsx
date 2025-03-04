import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { seasonState } from "./atoms/seasonAtom";

import FallingCherryBlossom from "./components/designs/FallingCherryBlossom";
import Raindrop from "./components/designs/Raindrop";
import FallingLeaves from "./components/designs/FallingLeaf";
import FallingSnow from "./components/designs/Snowflake";
import Header from "./apps/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

const pageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5 } },
};

function App() {
  const location = useLocation();
  const season = useRecoilValue(seasonState);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-purple-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {season === "spring" && <FallingCherryBlossom />}
        {season === "summer" && <Raindrop />}
        {season === "autumn" && <FallingLeaves />}
        {season === "winter" && <FallingSnow />}
      </div>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/skills" element={<Skill />} />
            <Route path="/portfolio/projects" element={<Project />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
