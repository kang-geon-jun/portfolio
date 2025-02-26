import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./apps/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
