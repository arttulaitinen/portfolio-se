import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomeView from "./components/views/HomeView";
import InternshipReflectionView from "./components/views/InternshipReflectionView";
import CICDPipelineView from "./components/views/CICDPipelineView";
import DesignDocumentView from "./components/views/DesignDocumentView";
import "./styles/App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/internship-reflection" element={<InternshipReflectionView />} />
        <Route path="/ci-cd-pipeline" element={<CICDPipelineView />} />
        <Route path="/design-doc" element={<DesignDocumentView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
    </>
  );
}

export default App;
