import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import InternshipReflection from "./components/InternshipReflection";
import CICDPipeline from "./components/CICDPipeline";
import DesignDoc from "./components/DesignDoc";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/internship-reflection" element={<InternshipReflection />} />
        <Route path="/ci-cd-pipeline" element={<CICDPipeline />} />
        <Route path="/design-doc" element={<DesignDoc />} />
      </Routes>
    </>
  );
}

export default App;
